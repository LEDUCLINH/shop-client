import React, { Component, useContext } from "react";
import { CartContext } from "../contexts/cart";
import { Link } from "react-router-dom";
import Comback from "../images/comeback.jpg";

export default function CartHook(props) {
  console.log(localStorage.getItem("length"));
  return (
    <div className="container " id="addCart">
      {localStorage.getItem("products") ? (
        <div className="row">
          <div className="col-md-8">
            {" "}
            <div className="col-12">
              <CartContext.Consumer>
                {({ cartItems }) =>
                  cartItems.map(function (product, index) {
                    return (
                      <div className="row product__cart" key={index}>
                        <div className="col-md-2">
                          <img src={product.product__img} alt="imge" />
                        </div>
                        <div className="col-md-5">
                          <p className="production__name">
                            {product.product__name}
                          </p>
                        </div>

                        <div className="col-md-2">
                          <p className="production__price">
                            {product.product__price}
                          </p>
                        </div>
                        <div className="col-md-3 ">
                          <p>
                            <CartContext.Consumer>
                              {({ removeToCart }) => (
                                <button onClick={() => removeToCart(product)}>
                                  -
                                </button>
                              )}
                            </CartContext.Consumer>
                            <input
                              type="text"
                              value={product.units}
                              id="number__product"
                            />
                            {/* <button onClick={that.decrease}>+</button>        */}
                            <CartContext.Consumer>
                              {({ addToCart }) => (
                                <button onClick={() => addToCart(product)}>
                                  +
                                </button>
                              )}
                            </CartContext.Consumer>
                          </p>
                          {/* <button type="button" class="btn ">-</button>
                       <button type="button" class="btn">1</button> 
                        <button type="button" class="btn">+</button> */}
                        </div>
                      </div>
                    );
                  })
                }
              </CartContext.Consumer>
            </div>
          </div>
          <div className="col-md-4" id="pay">
            <div className="col-12">
              <p className="row">
                <span className="col-md-6">Tạm tính</span>
                <CartContext.Consumer>
                  {({ cost }) => <span className="col-md-6">${cost}</span>}
                </CartContext.Consumer>
              </p>
              <p className="row">
                <span className="col-md-6">Thành tiền</span>
                <CartContext.Consumer>
                  {({ cost }) => (
                    <span className="col-md-6 intoMoney">${cost}</span>
                  )}
                </CartContext.Consumer>
              </p>
              <div className="row">
                <Link
                  id="ready__pay"
                  to="/"
                  className="btn btn-primary col-md-12"
                >
                  Tiến hành đặt hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="noCart">
          <h2> You no chose any product ^^!</h2>
          <img src={Comback} alt="img" />
          <Link to="/shoppage">Comback Shopping</Link>
        </div>
      )}
    </div>
  );
}

export default CartHook;
