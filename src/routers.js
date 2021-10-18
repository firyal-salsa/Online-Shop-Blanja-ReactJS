import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./views/home"
import Login from "./views/login"
import Bag from "./views/bag"
import Products from "./views/products"
import Inventory from "./views/inventory"
import SignUp from "./views/signup"
import ProfileSeller from "./views/profileSeller"
import ProfileCustomer from "./views/profileCustomer"
import ShippingAddress from "./views/shippingaddress"
import OrderCS from "./views/OrderCustomer"
import OrderSL from "./views/OrderSeller"

function Routers() {

    return (
        <BrowserRouter>
        <Switch>
        <Route path="/orderseller" component={OrderSL}></Route> 
        <Route path="/ordercustomer" component={OrderCS}></Route> 
        <Route path="/shippingaddress" component={ShippingAddress}></Route> 
        <Route path="/profilecustomer" component={ProfileCustomer}></Route> 
        <Route path="/profileseller" component={ProfileSeller}></Route>
        <Route path="/inventory" component={Inventory}></Route>
        <Route path="/products/:produk_nama" component={Products}></Route>
        <Route path="/product/:produk_id" component={Products}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/bag" component={Bag}></Route>
        <Route path="/" component={Home}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routers