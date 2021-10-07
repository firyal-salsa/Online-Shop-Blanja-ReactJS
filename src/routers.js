import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./views/home"
import Login from "./views/login"
import Bag from "./views/bag"
import Products from "./views/products"
import Inventory from "./views/inventory"
import SignUp from "./views/signup"

function Routers() {
    return (
        <BrowserRouter>
        <Switch>
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