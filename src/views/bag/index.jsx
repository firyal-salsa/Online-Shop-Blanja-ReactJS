import "./style/style.scoped.css";
import React, { useEffect, useState} from "react"
import { useSelector } from "react-redux"
import withAuth from "../../utils/withAuth"
import axios from "axios"
import Header from "../../components/header_bag";

function Bag() {
  const [bag, setbag] = useState([])
  const { token } = useSelector((state) => state.users)
  const [filteredData, setFilteredData] = useState(bag);
  const [id, setId] = useState(filteredData);

        useEffect(() => {
          axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/bag`,
            headers: {
                tokenauth: token,
            },
        })
            .then((res) => {
              setbag(res.data.result)
              setFilteredData(res.data.result);
            })
            .catch((err) => {
                console.log(err.response)
            })
        
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        const handleChange =  (e) => {
          let isChecked = e.target.checked
          let {value} = e.target
          let id = parseInt(value)
          if(isChecked){
            console.log(id)
            setId(id)
          }else{
            console.log('')
          }
          return id
        }


        function Delete () {

          axios({
              method: "DELETE",
              url: `${process.env.REACT_APP_API}/bag/rem/${id}`,
              headers: {
                  "content-type": "application/json",
                  tokenauth: token,
              },
          })
              .then((res) => {
                  console.log(res)
                  window.location.reload()
              })
              .catch((err) => {
              console.log(err)
              })
      }
        

        let totalPrice = bag.reduce(function (accumulator, item) {
          return accumulator + item.products.produk_harga ;
        }, 0);


    return (
      <body className="bag-body">
        <Header />
        <div id="main" className="container layout pt-5">
          <main className="row">
            <h3 id="bag-title">My Bag</h3>
            <br />
            <aside className="bag-summary">
              <div className="card">
                <div className="card-body">
                  <h5 id="textshopping" className="card-title font-weight-bold">
                    Shopping summary 
                  </h5>
                  <div className="price">
                    <p id="total" className="card-text text-secondary">
                      Total price
                    </p>
                    <p id="total" className="card-text font-weight-bold">
                      Rp. {totalPrice}
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <button id="shoppingsummary-red" className="btn">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            <div className="card w-75 m-1 p-2">
              <div className="d-flex justify-content-between px-3">
                <div>
                  <span className="d-flex">
                    <input
                    className="m-1 selectallitems-red"
                    type="checkbox"
                    />
                    <p className>Select all items</p>
                    <p className="text-secondary">(2 items selected)</p>
                  </span>
                </div>
                <p className="d-flex selectallitems-red" onClick={Delete}>Delete</p>
              </div>
            </div>
            <br />
            {filteredData.map((value, index) => {
                return (
            <div className="card row w-75 m-1 p-2 h-75">
              <div className="d-flex justify-content-between px-4 d-flex align-items-center">
                <input 
                id={value.bag_id}
                value={value.bag_id}
                onChange={e => handleChange(e)}
                className="listbag-red"
                type="checkbox"
                />
                <div className="d-flex justify-content-start">
                  <img
                    className="card-img w-25 p-3"
                    src={value.products.produk_foto}
                    alt=""
                  />
                  <span className="d-flex align-items-center mx-1 py-3 w-50 flex-column lh-5">
                    <p id="bag-name" className="card-text w-100 pt-5">
                    {value.products.produk_nama}
                    </p>
                    <p
                      id="store-name"
                      className="card-text text-secondary w-100 pt-1"
                    >
                      {value.products.produk_toko}
                    </p>
                  </span>
                </div>
                <span id="number">
                  <input type="number" min="1" onChange={value.bag_jumlah} className="w-50" />
                </span>
                <p id="number" className="card-text fw-bold">
                Rp.{value.products.produk_harga}
                </p>
              </div>
            </div>
            );
          })}
          </main>
        </div>
      </body>
    );
  }

export default withAuth(Bag)
