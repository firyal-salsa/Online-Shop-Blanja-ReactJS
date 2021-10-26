import Cards from "../cards"
import "./style.scoped.css"
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductCategory(props) {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);

    useEffect(() => {
        axios(
               `${process.env.REACT_APP_API}/product`
          )
          .then((response) => {
            console.log(response.data.result);
            setAllData(response.data.result);
            setFilteredData(response.data.result);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    const result = filteredData.filter(word => word.kategori_nama === props.Category);

    return (
        <section className="cards mx-5">
            {result.map((value, index) => {
                return (
                  <Cards
                  produk_nama={value.produk_nama}
                  produk_harga={value.produk_harga}
                  produk_foto={value.produk_foto}
                  produk_terjual={value.produk_terjual}
                  produk_toko={value.produk_toko}
                />
                );
              })}
            </section>
    )
}

export default ProductCategory