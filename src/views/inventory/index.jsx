import React, { Component } from 'react'
import "./style/style.scoped.css"
import Header from "../../components/headeruser"
import Aside from "../../components/asideseller"
import FormData from 'form-data'
import axios from "axios";


class Inventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            files: null,
            products: {
                produk_nama: '',
                produk_toko: '',
                produk_harga: '',
                produk_terjual: '',
                produk_kategori_id: '',
            }
        };

        this.onSave = this.onSave.bind(this);
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

    onSave = e => {
        this.setData();
        axios({
            method:"POST",
            url: "http://localhost:9000/product",
            headers: {"content-type":"multipart/form-data"},
            data: this.userFrom
        }).then(res => console.log(res.data))
    }

    handleFile(event) {
        this.inputFile.current.click();
        event.preventDefault();
     }

    render() {
        const { produk_nama, produk_toko, produk_harga, produk_terjual, produk_kategori_id } = this.state.products
        return (
                <body className="home-body">
                    <Header />
                        <div className="d-flex">
                        <div>
                            <Aside />
                        </div>
                            <main className="card me-4 mt-5 p-3 mb-4">
                                <h3>Inventory</h3>
                                <hr />
                                <div >
                                    <label htmlFor="Nama Produk" className="p-3">
                                        <h5>Nama produk</h5>
                                        <input type="text" name="produk_nama" value={produk_nama} onChange={this.handleChange} className="inputinventory-name inputinventory-name-box" id="inputinventory-name" placeholder="Nama produk. contoh : pensil"/>
                                    </label>
                                    <label htmlFor="Nama Toko" className="p-3">
                                        <h5>Toko</h5>
                                        <input type="text" className="inputinventory-name inputinventory-name-box" name="produk_toko" value={produk_toko} onChange={this.handleChange} id="inputinventory-name" placeholder="Nama toko. contoh : Toko Abadi"/>
                                    </label>
                                    <label htmlFor="Harga" className="p-3">
                                        <h5>Harga</h5>
                                        <input type="number" min="0" step="500" className="inputinventory-name inputinventory-name-box" name="produk_harga" value={produk_harga} onChange={this.handleChange} id="inputinventory-name"/>
                                    </label>
                                    <label htmlFor="Stok terjual" className="p-3">
                                        <h5>Stok terjual</h5>
                                        <input type="number" min="0" name="produk_terjual" value={produk_terjual} onChange={this.handleChange} className="inputinventory-name inputinventory-name-box" id="inputinventory-name"/>
                                    </label>
                                    <br />
                                    <label htmlFor="" className="p-3">
                                        <h5>Kategori</h5>
                                    <input type="number" min="0" name="produk_kategori_id" value={produk_kategori_id} onChange={this.handleChange} className="inputinventory-name inputinventory-name-box" id="inputinventory-name"/>
                                    </label>
                                    <br />
                                    <label htmlFor="formFile" className="form-label">
                                        <h5>Foto</h5>
                                    </label>
                                    <input className="form-control" ref={this.inputFile} onChange={this.inputChange} type="file" id="formFile" />
                                    <br />
                                    <button onClick={this.onSave} onSubmit={this.submitHandler} className="btn btn-danger w-25 float-end">
                                        Jual
                                    </button>
                                </div>
                            </main>
                        </div>
                </body>
        )
    }
}

export default Inventory
