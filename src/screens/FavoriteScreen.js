import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "./../Redux/Actions/cartActions";

const FavoriteScreen = ({ match, location, history }) => {
  const dispatch = useDispatch();
  window.scrollTo(0, 0);
    const [listStore , setListStore] = useState(JSON.parse(localStorage.getItem("favorite")) || [])

  const checkOutHandler = () => {
    const listFavorite = JSON.parse(localStorage.getItem("favorite"));

    listFavorite.map((item) => {
      dispatch(addToCart(item.id, item.quantity, "buy"));
    });
    localStorage.setItem("favorite",JSON.stringify([]));
    history.push("/login?redirect=shipping");
  };

  const removeFromCartHandle = (id) => {
    const listFavorite = JSON.parse(localStorage.getItem("favorite"));
      const list = listFavorite.filter((item) => item.id !== id);
      setListStore(list);
    JSON.parse(localStorage.setItem("favorite", JSON.stringify(list)));
  };

  const showPrice = (price) => {
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {listStore?.length === 0 || !listStore ? (
          <div className=" alert alert-info text-center mt-3">
            Hiện tại chưa có sản phẩm trong giỏ hàng
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              Mua hàng ngay....
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Danh sách sản phẩm yêu thích của bạn
              <Link className="text-success mx-2" to="/cart">
                ({listStore?.length})
              </Link>
            </div>
            {/* cartiterm */}
            {listStore?.map((item) => (
              <div className="cart-iterm row">
                <div
                  onClick={() => removeFromCartHandle(item.id)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.id}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>Đơn giá</h6>
                  <h4 style={{ fontSize: "16px" }}>{showPrice(item.price)}</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            {/* <div className="total">
              <span className="sub">Tổng mua:</span>
              <span className="total-price">{showPrice(total)}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-4 ">
                <button class="">Mua hàng thêm</button>
              </Link>
              {total > 0 && (
               
              )}
            </div> */}
            <div className="cart-buttons d-flex align-items-center row">
              <div className="col-md-4 d-flex justify-content-md-end mt-3 mt-md-0">
                <button onClick={checkOutHandler}>Đặt hàng ngay</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FavoriteScreen;
