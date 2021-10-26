import "./style/style.scoped.css";
import React, { useState, useEffect } from "react";
import Cards from "../../components/cards";
import axios from "axios";
import Logo from "../../components/logo";
import Navbar from "../../components/navbar";
import NavbarAuth from "../../components/navbaricons";
import CarouselNews from "../../components/carouselnews";
import CarouselCategory from "../../components/carouselcategory";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

function Home() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const history = useHistory();
  const { isAuth } = useSelector((state) => state.users)

  
  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    result = allData.filter((data) => {
      return data.produk_nama.search(value) !== -1;
    });
    setFilteredData(result);
  };

  
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

  const handleDetail = (produk_nama) => {
    history.push(`/products/${produk_nama}`);
  }
  

  return (
    <body className="home-body">
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
                onChange={(event) => handleSearch(event)}
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
              >
                <i className="bi-funnel" />
              </button>
            </div>
          </div>
        </div>
        <div id="header-navbar-home">
          {!isAuth ? <Navbar /> : <NavbarAuth />}
        </div>
      </nav>
      <div className="container pt-5 mx-5">
        <CarouselNews />
        <CarouselCategory />
        <main>
          <section>
            <h3 className="font-weight-bold">New</h3>
            <p className="text-secondary">You’ve never seen it before!</p>
            <section className="cards mx-5">
              {filteredData.map((value, index) => {
                return (
                  <Cards
                  produk_nama={value.produk_nama}
                  produk_harga={value.produk_harga}
                  produk_foto={value.produk_foto}
                  produk_terjual={value.produk_terjual}
                  produk_toko={value.produk_toko}
                  goDetail={handleDetail}
                />
                );
              })}
            </section>
          </section>
          <section>
            <h3 className="font-weight-bold">Popular</h3>
            <p className="text-secondary">
              Find clothes that are trending recently
            </p>
            <section className="cards mx-5">
            {filteredData.map((value, index) => {
                return (
                  <Cards
                  produk_nama={value.produk_nama}
                  produk_harga={value.produk_harga}
                  produk_foto={value.produk_foto}
                  produk_terjual={value.produk_terjual}
                  produk_toko={value.produk_toko}
                  goDetail={handleDetail}
                />
                );
              })}
            </section>
          </section>
        </main>
      </div>
    </body>
  );
}

export default Home;
