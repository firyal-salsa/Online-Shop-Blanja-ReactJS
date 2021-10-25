import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Home from "./views/home"
import Login from "./views/login"
import Bag from "./views/bag"
import Products from "./views/products"
import Inventory from "./views/inventory"
import SignUp from "./views/signup"
import ProfileSeller from "./views/profileSeller"
import ProfileCustomer from "./views/profileCustomer"
import ShippingAddress from "./views/shippingaddress"
import { useSelector } from 'react-redux';

function Routers() {
    const { isAuth } = useSelector((state) => state.users)
    const { data } = useSelector((state) => state.users)
    const seller = data.data.result[0].hasOwnProperty('store_name')

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/shippingaddress">
                    {isAuth && seller ? <ShippingAddress /> : <Redirect to="/login" />}
                </Route> 
                <Route exact path="/profilecustomer">
                    {isAuth != seller ? <ProfileCustomer /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/profileseller">
                    {isAuth && seller ? <ProfileSeller /> : <Redirect to="/login" />}
                </Route>
                <Route path="/inventory">
                    {isAuth && seller ? <Inventory /> : <Redirect to="/login" />}
                </Route>
                <Route path="/bag">
                    {isAuth != seller? <Bag /> : <Redirect to="/login" />}
                </Route>
                <Route path="/products/:produk_nama" component={Products} />
                <Route path="/signup">
                    {!isAuth? <SignUp /> : <Redirect to="/" />}
                </Route>
                <Route path="/login">
                    {!isAuth? <Login /> : <Redirect to="/" />}
                </Route>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers