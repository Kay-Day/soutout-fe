import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "./../components/Header";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>Lựa chọn hình thức thanh toán</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="checkbox"
                checked={paymentMethod === "Paypal" ? true : false}
                onChange={(e) => setPaymentMethod("Paypal")}
              />
              <label className="form-check-label">
                Thanh toán bằng Paypal hoặc thẻ tín dụng / thẻ ghi nợ
              </label>
            </div>
            <div className="radio-container">
              <input
                className="form-check-input"
                type="checkbox"
                checked={paymentMethod === "Credit" ? true : false}
                onChange={(e) => setPaymentMethod("Credit")}
              />
              <label className="form-check-label">
                Thanh toán khi nhận hàng
              </label>
            </div>
          </div>

          <button type="submit">Tiếp tục</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
