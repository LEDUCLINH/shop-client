import React, { Component } from "react";
import { CartContext } from "../contexts/cart";
import axios from "axios";
import { Link } from "react-router-dom";
import { WhisperSpinner } from "react-spinners-kit";
import querySearch from "stringquery";
import { FormControl } from "react-bootstrap";
export class Shoppage extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      pager: {},
      pageOfItems: [],
      loading: true,
      products: "",
      filter: "",
      total: false,
      all: true,
      size: 1,
    };
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  loadPage() {
    // get page of items from api
    const params = querySearch(this.props.location.search);
    const page = parseInt(params.page) || 1;
    let token = localStorage.getItem("token");
    if (!this.state.filter) {
      if (page !== this.state.pager.currentPage) {
        axios
          .get(`https://shopmobi.herokuapp.com/shoppage/search?page=${page}`, {
            headers: {
              authorization: token,
            },
          })
          .then((res) => {
            this.setState({
              pager: res.data.pager,
              pageOfItems: res.data.pageOfItems,
              loading: false,
              products: res.data.products,
            });
          })
          .catch((err) => {
            console.log(err.response.data.message);
            if (err.response.data.message === "jwt expired") {
              let refreshToken = localStorage.getItem("refreshToken");
              axios
                .post("https://shopmobi.herokuapp.com/login/refreshToken", {
                  refreshToken,
                })
                .then((res) => {
                  localStorage.setItem("token", res.data.token);
                })
                .catch((err) => {
                  console.log("123");
                });
            } else {
              this.props.history.push("/errlogin");
            }
          });
      }
    } else {
      if (page !== this.state.pager.currentPage) {
        axios
          .get(
            `https://shopmobi.herokuapp.com/shoppage/search?page=${page}&${this.state.filter}`,
            {
              headers: {
                authorization: token,
              },
            }
          )
          .then((res) => {
            this.setState({
              pager: res.data.pager,
              pageOfItems: res.data.pageOfItems,
              loading: false,
              products: res.data.products,
            });
          })
          .catch((err) => {
            // this.props.history.push('/errlogin');
          });
      }
    }
  }
  componentDidMount() {
    this.props.history.push("shoppage?page=1");
    this.loadPage();
  }

  componentDidUpdate(a, b) {
    this.loadPage();
  }
  onMouseDown(e) {
    this.setState({
      size: 3,
    });
  }
  onBlur(e) {
    this.setState({
      size: 1,
    });
  }
  onChangeCheck(e) {
    this.setState({
      total: true,
      filter: e.target.value,
      all: false,
      size: 1,
    });
    this.props.history.push(`/shoppage?page=1&${e.target.value}`);
    const params = querySearch(this.props.location.search);
    const page = parseInt(params.page) || 1;
    let token = localStorage.getItem("token");
    axios
      .get(
        `https://shopmobi.herokuapp.com/shoppage/search?page=${page}&${e.target.value}`,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        this.setState({
          pager: res.data.pager,
          pageOfItems: res.data.pageOfItems,
          loading: false,
          products: res.data.products,
        });
      })
      .catch((err) => {});
  }
  render() {
    const { pager, pageOfItems } = this.state;

    return (
      <React.Fragment>
        {!this.state.loading ? (
          <div className="container" id="/shoppage">
            {/* <select
              size={this.state.size}
              onMouseDown={this.onMouseDown}
              id="classess__product"
              onChange={this.onChangeCheck}
              onBlur={this.onBlur}
            >
              <option value="">ALL</option>
              <option value="name=Iphone">Iphone</option>
              <option value="name=Samsung">Samsung</option>
              <option value="name=Oppo">Oppo</option>
            </select> */}
            <FormControl
              as="select"
              id="classess__product"
              onChange={this.onChangeCheck}
            >
              <option value="">ALL</option>
              <option value="name=Iphone">Iphone</option>
              <option value="name=Samsung">Samsung</option>
              <option value="name=Oppo">Oppo</option>
            </FormControl>
            <div className="row">
              {pageOfItems.map((product) => (
                <div
                  className="production__item production__shopper col-md-3"
                  key={product._id}
                >
                  <div className="col-12">
                    <div className="production__body">
                      <img src={product.product__img} alt="imge" />
                      <div className="production__overlay"></div>
                      <CartContext.Consumer>
                        {({ addToCart }) => (
                          <button
                            onClick={() => addToCart(product)}
                            className="production__button"
                            id="production__button--add"
                          >
                            ADD to cart
                          </button>
                        )}
                      </CartContext.Consumer>

                      <Link
                        className="production__button"
                        to="/product__details"
                        id="production__button--detail"
                      >
                        see details test
                      </Link>
                    </div>
                    <div className="production__bottom">
                      <p className="production__name">
                        {product.product__name}
                      </p>
                      <p className="production__price">
                        {product.product__price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <nav aria-label="Page navigation example">
              {pager.pages && pager.pages.length && (
                <ul className="pagination">
                  <li
                    className={`page-item first-item ${
                      pager.currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <Link to={{ search: `?page=1` }} className="page-link">
                      First
                    </Link>
                  </li>
                  <li
                    className={`page-item previous-item ${
                      pager.currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <Link
                      to={{ search: `?page=${pager.currentPage - 1}` }}
                      className="page-link"
                    >
                      Previous
                    </Link>
                  </li>
                  {pager.pages.map((page) => (
                    <li
                      key={page}
                      className={`page-item number-item ${
                        pager.currentPage === page ? "active" : ""
                      }`}
                    >
                      <Link
                        to={{
                          search: `?page=${page}${
                            this.state.filter && `&${this.state.filter}`
                          }`,
                        }}
                        className="page-link"
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                  <li
                    className={`page-item next-item ${
                      pager.currentPage === pager.totalPages ? "disabled" : ""
                    }`}
                  >
                    <Link
                      to={{ search: `?page=${pager.currentPage + 1}` }}
                      className="page-link"
                    >
                      Next
                    </Link>
                  </li>
                  <li
                    className={`page-item last-item ${
                      pager.currentPage === pager.totalPages ? "disabled" : ""
                    }`}
                  >
                    <Link
                      to={{ search: `?page=${pager.totalPages}` }}
                      className="page-link"
                    >
                      Last
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        ) : (
          <div id="loading">
            {" "}
            <WhisperSpinner size={100} />
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default Shoppage;
