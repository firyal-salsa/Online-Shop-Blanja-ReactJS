import React, { Component } from "react";
import axios from 'axios'
import FormData from 'form-data'

export class modalProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
        files: null,
        // imgSrc: noImage,
        products: {
            produk_nama: '',
            produk_toko: '',
            produk_harga: '',
            produk_terjual: '',
            produk_kategori_id: '',
        }
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.inputFile = React.createRef();
    this.inputChange = this.inputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.userFrom = new FormData();
}

inputChange(event) {
    const file = event.target.files[0];
    if (file){
        console.log(file)
       this.setState({ files: file });
       let reader = new FileReader();

       reader.onload = () => {
          this.setState({
             imgSrc: reader.result
          });
       };
       reader.readAsDataURL(file);
    }
    event.preventDefault();
 }

 setData () {
    this.userFrom.append('produk_nama', this.state.products.produk_nama);
    this.userFrom.append('produk_toko', this.state.products.produk_toko);
    this.userFrom.append('produk_harga', this.state.products.produk_harga);
    this.userFrom.append('produk_terjual', this.state.products.produk_terjual);
    this.userFrom.append('categories', this.state.products.produk_kategori_id);
    this.userFrom.append('produk_foto', this.state.files);
 }

 handleChange = e => {
     const newData = {...this.state.products}
     newData[e.target.name] = e.target.value
    this.setState({ products: newData})
}

onUpdate = produk_nama => {
    this.setData();
    // const bodyFormData = new FormData()
    axios({
        method:"PUT",
        url: `http://localhost:9000/product/${produk_nama}`,
        headers: {"content-type":"multipart/form-data"},
        data: this.userFrom
    }).then(res => console.log(res.data))
    // axios
    //     .post('http://localhost:9000/product', this.state, {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         },
    //         data: this.userFrom
    //     })
    //     .then(respone => {
    //         console.log(respone)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
}

handleFile(event) {
    this.inputFile.current.click();
    event.preventDefault();
 }

  render() {
    const { produk_nama, produk_toko, produk_harga, produk_terjual, produk_kategori_id } = this.state.products
    return (
      <div>
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
                  Update Product
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
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name" onChange={this.handleChange} value={produk_nama}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Toko
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name" onChange={this.handleChange} value={produk_toko}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Harga
                    </label>
                    <input
                      type="number"
                      step="500"
                      className="form-control"
                      id="recipient-name" onChange={this.handleChange} value={produk_harga}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Terjual
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="recipient-name" onChange={this.handleChange} value={produk_terjual}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Kategori
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="recipient-name" onChange={this.handleChange} value={produk_kategori_id}
                    />
                  </div>
                  <label htmlFor="formFile" className="form-label">
                    Foto
                  </label>
                  <input className="form-control" type="file" id="formFile" onChange={this.handleChange} ref={this.inputFile}/>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={this.onSave} onSubmit={this.submitHandler} className="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default modalProduct;
