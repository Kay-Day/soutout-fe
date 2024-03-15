import React from "react";
import "./App.css";
import "./responsive.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import PdfFileScreen from "./screens/PdfFileScreen";
import SinglePdf from "./screens/SinglePdf";
import PDF from "./components/PDF";
import SearchProduct from "./screens/SearchProduct";
import FavoriteScreen from "./screens/FavoriteScreen";
import ChangePass from "./screens/ChangePass";
import RestPass from "./screens/RestPass";

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/category/:item" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        {/* <Route path="/pdf/:id" component={SinglePdf} />
        <PrivateRouter path="/showpdf/:id" component={PDF} /> */}
        <PrivateRouter path="/search/:param" component={SearchProduct} />
        <Route path="/login" component={Login} />
        <Route path="/change-pass" component={ChangePass} />
        <Route path="/rest-pass/:id" component={RestPass} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/favorite/:id?" component={FavoriteScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
        {/*<Route path="/pdf" component={PdfFileScreen} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
