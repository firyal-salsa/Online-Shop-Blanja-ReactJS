import React, {useState} from 'react'
import "./style/style.scoped.css"
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

function AsideSeller() {
  const { data } = useSelector((state) => state.users)

        return (
            <aside className="layout">
                <div className="d-flex p-5">
                    <img className="rounded-circle asideseller-width" src={data.data.result[0].foto} alt="" />
                    <div className="pt-4" id="asideseller-name">
                    <h5 className="fw-bold">{data.data.result[0].name}</h5>
                    <i class="bi bi-pencil-fill">Ubah profile</i>
                    </div>
                </div>
                <div className="ps-5">
                <div className="accordion accordion-flush">
                    <h2>
                      <Link to="/profilecustomer" className="button" type="button">
                        <i className="bi bi-person rounded-circle bg-purple p-2 text-light"></i>
                         My Account
                      </Link>
                    </h2>
                    <h2>
                      <Link to="/shippingaddress" className="button" type="button">
                      <i class="bi bi-geo-alt p-2 bg-orange rounded-circle text-light"></i>
                        Shipping Address
                      </Link>
                    </h2>
                    <h2 className="accordion-header" id="flush-headingThree">
                      <Link to="/ordercustomer" className="button" type="button">
                        <i class="bi bi-calendar p-2 rounded-circle bg-danger text-light"></i>
                        My Order
                      </Link>
                    </h2>
                </div>
                </div>

            </aside>
        )
    }

export default AsideSeller
