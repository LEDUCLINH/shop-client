import React, { Component } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart";

export class Productions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://shopmobi.herokuapp.com/products")
      .then((res) => {
        this.setState({
          products: res.data.splice(0, 6),
        });
      })
      .catch((err) => {});
  }
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    return (
      <div className="container latestproduct">
        <h1 id="latestproduct__title">latest Product</h1>
        <Slider {...settings}>
          {this.state.products.map((product, index) => (
            <div className="production__item" key={index}>
              <div className="production__body">
                <img src={product.product__img} alt="imge" />
                <div className="production__overlay"></div>
                <CartContext.Consumer>
                  {({ addToCart }) => (
                    <button
                      onClick={() => addToCart(product)}
                      className="production__button"
                      to="/"
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
                  see details
                </Link>
              </div>
              <div className="production__bottom">
                <p className="production__name">{product.product__name}</p>
                <p className="production__price">{product.product__price}</p>
              </div>
            </div>
          ))}
          {/* <Production>
                        <div className="production__body">
                            <img src={Production1} alt="imge" />
                            <div className="production__overlay" ></div>
                            <Link className="production__button" to="/" id="production__button--add">ADD to cart</Link>
                            <Link className="production__button" to="/product__details" id="production__button--detail">see details</Link>
                        </div>
                        <div className="production__bottom">
                            <p className="production__name">Nokia Lumia 1320</p>
                            <p className="production__price">$899.00</p>
                        </div>
                    </Production>
                    <Production>
                        <div className="production__body">
                            <img src={Production2} alt="imge" />
                            <div className="production__overlay" ></div>
                            <Link className="production__button" to="/" id="production__button--add">ADD to cart</Link>
                            <Link className="production__button" to="/" id="production__button--detail">see details</Link>
                        </div>
                        <div className="production__bottom">
                            <p className="production__name">Nokia Lumia 1320</p>
                            <p className="production__price">$899.00</p>
                        </div>
                    </Production>
                    <Production>
                        <div className="production__body">
                            <img src={Production3} alt="imge" />
                            <div className="production__overlay" ></div>
                            <Link className="production__button" to="/" id="production__button--add">ADD to cart</Link>
                            <Link className="production__button" to="/" id="production__button--detail">see details</Link>
                        </div>
                        <div className="production__bottom">
                            <p className="production__name">Nokia Lumia 1320</p>
                            <p className="production__price">$899.00</p>
                        </div>
                    </Production>
                    <Production>
                        <div className="production__body">
                            <img src={Production4} alt="imge" />
                            <div className="production__overlay" ></div>
                            <Link className="production__button" to="/" id="production__button--add">ADD to cart</Link>
                            <Link className="production__button" to="/" id="production__button--detail">see details</Link>
                        </div>
                        <div className="production__bottom">
                            <p className="production__name">Nokia Lumia 1320</p>
                            <p className="production__price">$899.00</p>
                        </div>
                    </Production>
                    <Production>
                        <div className="production__body">
                            <img src={Production5} alt="imge" />
                            <div className="production__overlay" ></div>
                            <Link className="production__button" to="/" id="production__button--add">ADD to cart</Link>
                            <Link className="production__button" to="/" id="production__button--detail">see details</Link>
                        </div>
                        <div className="production__bottom">
                            <p className="production__name">Nokia Lumia 1320</p>
                            <p className="production__price">$899.00</p>
                        </div>
                    </Production>
                    <Production>
                        <div className="production__body">
                            <img src={Production6} alt="imge" />
                            <div className="production__overlay" ></div>
                            <Link className="production__button" to="/" id="production__button--add">ADD to cart</Link>
                            <Link className="production__button" to="/" id="production__button--detail">see details</Link>
                        </div>
                        <div className="production__bottom">
                            <p className="production__name">Nokia Lumia 1320</p>
                            <p className="production__price">$899.00</p>
                        </div>
                    </Production> */}
        </Slider>
      </div>
    );
  }
}

export default { Productions };
