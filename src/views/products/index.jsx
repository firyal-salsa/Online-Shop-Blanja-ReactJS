import React, { Component } from "react";
import "./style/style.scoped.css";
import Headers from "../../components/headers";
import ProductAbout from "../../components/product_about";
import ProductReview from "../../components/product_review";
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
      url: "http://localhost:9000/product/produk_harga",
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
    console.log(produk_id);
    axios
      .delete(`http://localhost:9000/product/${produk_id}`)
      .then((res) => console.log(res));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <body className="product-body">
        <Headers />
        <div className="container pt-5 px-5">
          <span className="d-flex pb-5">
            <Link className="link" to="/">
              Home
            </Link>{" "}
            <i className="bi bi-caret-right" />
            <Link className="link"> Category</Link>{" "}
            <i className="bi bi-caret-right" />
            <Link className="link">T-Shirt</Link>
          </span>
          <main className="container">
            <div>
              <ProductAbout
                produk_id={this.state.prods.produk_id}
                produk_nama={this.state.prods.produk_nama}
                produk_harga={this.state.prods.produk_harga}
                produk_foto={this.state.prods.produk_foto}
                produk_terjual={this.state.prods.produk_terjual}
                produk_toko={this.state.prods.produk_toko}
                remove={this.handleRemove}
              />

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
            <ProductReview />
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
