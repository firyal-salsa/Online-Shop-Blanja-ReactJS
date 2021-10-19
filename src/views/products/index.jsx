import React, { Component } from "react";
import "./style/style.scoped.css";
import Logo from "../../components/logo";
import Navbar from "../../components/navbaricons";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prods: {
        produk_id: "",
        produk_foto: "",
        produk_harga: "",
        produk_kategori_id: "",
        produk_nama: "",
        produk_terjual: "",
        produk_toko: "",
        categories: "",
      },
    };
  }

  getProducts = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/product/produk_harga`,
      params: {
        produk_nama: this.props.match.params.produk_nama,
      },
    })
      .then((res) => {
        let name = res.config.params.produk_nama;
        let process = res.data.result.find(
          ({ produk_nama }) => produk_nama === name
        );
        let prods = process;
        this.setState({
          prods: {
            produk_id: prods.produk_id,
            produk_nama: prods.produk_nama,
            produk_harga: prods.produk_harga,
            produk_terjual: prods.produk_terjual,
            produk_foto: prods.produk_foto,
            produk_toko: prods.produk_toko,
            categories: prods.categories,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAllProducts = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/product/produk_harga`,
    })
      .then((res) => {
        const { result } = res.data;
        console.log(res.data);
        this.setState({ prods: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDetail = (produk_nama) => {
    this.props.history.push(`/products/${produk_nama}`);
  };

  handleRemove = (produk_id) => {
    axios
      .delete(`${process.env.REACT_APP_API}/product/rem/${produk_id}`)
      .then((res) => console.log(res));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <body className="product-body">
        <nav className="header-navbar d-flex justify-content-around">
        <div
          id="header-logo"
          className="header-logo-nav navbar-brand p-2 flex-grow-1"
        >
          <Logo />
        </div>
        <div id="header-search">
          <div id="d-flex" className="search-filter">
            <div className="input-group">
              <input
                className="search-input p-2 rounded-pill"
                placeholder="Search"
              />
              <span className="input-group-append">
                <button
                  id="search-border"
                  className="btn btn-outline-secondary search-icon"
                  type="button"
                >
                  <i className="bi-search" />
                </button>
              </span>
              <button
                className="btn btn-outline-secondary rounded"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi-funnel" />
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Sort By
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                  <div className="modal-body">
                  <form>
                    <select>
                      <option value="nameofproduct">Nama Produk</option>
                      <option value="newest">Terbaru</option>
                      <option value="price">Harga</option>
                    </select>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-navbar-home">
          <Navbar />
        </div>
      </nav>
        <div className="container pt-5 px-5">
          <span className="d-flex pb-5">
            <Link className="link" to="/">
              Home
            </Link>{" "}
            <i className="bi bi-caret-right" />
            <Link className="link"> Category</Link>{" "}
            <i className="bi bi-caret-right" />
            <Link className="link">{this.state.prods.categories.kategori_nama}</Link>
          </span>
          <main className="container">
            <div>
            <section className="product-about">
                    <div className="">
                        <img className="product-photo" src={this.state.prods.produk_foto} alt="" />
                    </div>
                    <div className="test">
                        <h3 className="fw-bold">{this.state.prods.produk_nama}</h3>
                        <p className="text-secondary">{this.state.prods.produk_toko}</p>
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                        <i>{this.state.prods.produk_terjual}</i>
                        
                        <p className="mt-4">Price</p>
                        <h3 className="fw-bold">Rp. {this.state.prods.produk_harga}</h3>
                        <div className="pt-5">
                        <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Chat</button>
                        <button type="button" className="btn btn-outline-secondary py-2 px-5 me-2 rounded-pill">Add Bag</button>
                        <button type="button" className="btn btn-primary py-2 btn-buy-now rounded-pill">Buy Now</button>
                        </div>
                    </div>
                </section>
              <br />
              <section className="productinformation">
                <h3 className="fw-bold">Informasi Produk</h3>
                <h5 className="fw-bold">Condition</h5>
                <p className="text-danger fw-bold">New</p>
                <h5 className="fw-bold">Description</h5>
                <blockquote className="text-secondary lh-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate necessitatibus ut ab velit, iste maxime, cumque
                  eius aperiam voluptas quod sunt qui nobis sint, quis nostrum
                  ea id tempore? Necessitatibus. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptatem quasi eligendi earum
                  omnis numquam accusamus blanditiis sunt totam, eveniet
                  exercitationem explicabo, nam dignissimos quibusdam debitis
                  cumque officiis dolores aspernatur id. Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Ratione debitis dolorem
                  blanditiis eos maxime nihil. Distinctio consequatur quo,
                  quibusdam dolorem nesciunt tempora odit? Sapiente neque ex
                  aliquam ipsa, inventore recusandae?
                </blockquote>
              </section>
            </div>
            <section className="productreview">
            <div className="">
              <h5 className="fw-bold">Product Review</h5>
              <div className="mt-4">
                <div className="d-flex">
                  <div className="margin">
                    <div className="d-flex align-items-end">
                      <h1 className="rating pb-1">5.0</h1>
                      <p className="text-secondary">/10</p>
                    </div>
                    <div className="row">
                      <div className="col text-center">
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                        <i className="bi-star-fill text-warning" />
                      </div>
                    </div>
                  </div>
                  <div className="col lh-1">
                    <p className="bi-star-fill text-warning mb-1">
                      5{" "}
                      <progress
                        className="product_review-progress"
                        id="file"
                        value="100"
                        max="100"
                      >
                        {" "}
                      </progress>{" "}
                      4{" "}
                    </p>
                    <p className="bi-star-fill text-warning mb-1">
                      4{" "}
                      <progress
                        className="product_review-progress"
                        id="file"
                        value="0"
                        max="100"
                      >
                        {" "}
                      </progress>{" "}
                      0
                    </p>
                    <p className="bi-star-fill text-warning mb-1">
                      3{" "}
                      <progress
                        className="product_review-progress"
                        id="file"
                        value="0"
                        max="100"
                      >
                        {" "}
                      </progress>{" "}
                      0
                    </p>
                    <p className="bi-star-fill text-warning mb-1">
                      2{" "}
                      <progress
                        className="product_review-progress"
                        id="file"
                        value="0"
                        max="100"
                      >
                        {" "}
                      </progress>{" "}
                      0
                    </p>
                    <p className="bi-star-fill text-warning mb-1">
                      1{" "}
                      <progress
                        className="product_review-progress"
                        id="file"
                        value="0"
                        max="100"
                      >
                        {" "}
                      </progress>{" "}
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <hr />
            <section>
              <h3 className="fw-bold">You can also like this</h3>
              <p className="text-secondary">You’ve never seen it before!</p>
              <section className="row">
                {/* {this.state.prods.map((res) => {
                            return (
                              <Cards 
                              produk_nama={res.produk_nama}
                              produk_harga={res.produk_harga}
                              produk_foto={res.produk_foto}
                              produk_terjual={res.produk_terjual}
                              produk_toko = {res.produk_toko}/>
                            )
                          })} */}
              </section>
            </section>
          </main>
        </div>
      </body>
    );
  }
}

export default Products;
