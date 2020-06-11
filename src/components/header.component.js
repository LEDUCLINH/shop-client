import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart";
import UserLogIn from "../components/usercomponent/user.login";
import Register from "../components/usercomponent/user.signin";
import Logo from "../images/logo2.png";
const Header = () => {
  return (
    <React.Fragment>
      {/* <ul classNameName="nav header">
            <li classNameName="nav-item">
                <Link classNameName="nav-link active" to="/">My Account</Link>
            </li>
            <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/">Wishlist</Link>
            </li>
            <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/">My Cart</Link>
            </li>
            <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/">Checkout</Link>
            </li>
            <li classNameName="nav-item">
                <Link classNameName="nav-link" to="/">Login</Link>
            </li>
            <li classNameName="nav-item" id="cart">
                <Link classNameName="nav-link"  to="/"><i className="fa fa-cart-plus" aria-hidden="true"></i></Link>
            </li>
        </ul> */}
      <nav className="navbar" id="header">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="img" />
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div id="login__cart">
          {/* <Register /> */}
          <UserLogIn />
          <Link to="/cart" id="cart">
            <i className="fa fa-cart-plus" aria-hidden="true">
              <CartContext.Consumer>
                {({ length }) => <span>{length}</span>}
              </CartContext.Consumer>
            </i>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
