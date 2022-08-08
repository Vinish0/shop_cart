import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { removeCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const removeFromCart = (cartId) => {
    dispatch(removeCart(cartId));
  };

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="container d-flex flex-column justify-content-center align-items-center vh">
          <div><h5 className="">
            Cart is empty
          </h5></div>
          <div>
          <NavLink className="btn btn-sm btn-dark text-decoration-none" to="/products">
            Back to Shopping
          </NavLink>
        </div>
          </div>
      ) : (
        <>
          {cartItems.map((item) => {
            return (
              <div className="container">
                <div className="row border mb-2">
                  <div className="col-md-2">
                    <img src={item.image} className="w-100 p-2" alt="product" />
                  </div>
                  <div className="col-md-6 p-2 d-flex justify-content-center">
                    <div>
                      <h5>{item.item}</h5>
                      <p className="text-decoration-line-through text-muted">
                        {item.realPrice}
                      </p>
                      <p>{item.offerPrice}</p>
                    </div>
                  </div>
                  <div className="col-md-2 offset-md-2 d-flex justify-content-center align-items-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-dark"
                    >
                      Remove Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Cart;
