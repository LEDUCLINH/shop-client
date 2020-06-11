import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="footer">
          <div className="footer__top container">
            <div className="row">
              <div className="col-md-3 footer__item">
                <h2 className="footer__item--name">
                  u<span>Stora</span>
                </h2>
                <p className="footer__item--infomation">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis sunt id doloribus vero quam laborum quas alias
                  dolores blanditiis iusto consequatur, modi aliquid eveniet
                  eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
                  debitis, quisquam. Laborum commodi veritatis magni at?
                </p>
                <div
                  className="btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="First group"
                  >
                    <a className="footer__icon" href="#1">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <a className="footer__icon" href="#1">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Third group"
                  >
                    <a className="footer__icon" href="#1">
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Third group"
                  >
                    <a className="footer__icon" href="#1">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 footer__item">
                <h2 className="footer__item--name">User Navigation</h2>
                <ul id="list__user">
                  <li>
                    <Link to="/">My accout</Link>
                  </li>
                  <li>
                    <Link to="/">Order history</Link>
                  </li>
                  <li>
                    <Link to="/">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/">Vendor contac</Link>
                  </li>
                  <li>
                    <Link to="/">Front page</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer__item">
                <h2 className="footer__item--name">Categories</h2>
                <ul id="list__user">
                  <li>
                    <Link to="/">Mobile Phone</Link>
                  </li>
                  <li>
                    <Link to="/">Home accesseries</Link>
                  </li>
                  <li>
                    <Link to="/">LED TV</Link>
                  </li>
                  <li>
                    <Link to="/">Computer</Link>
                  </li>
                  <li>
                    <Link to="/">Gadets</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 footer__item">
                <h2 className="footer__item--name">Newsletter</h2>
                <p className="footer__item--infomation">
                  Sign up to our newsletter and get exclusive deals you wont
                  find anywhere else straight to your inbox!
                </p>
                <form id="footer__form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <button
                    id="footer__subscire"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Subscrice
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer__bottom"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
