import React, { Component } from "react";
import Slide1 from "../../images/h4-slide.png";
import Slide2 from "../../images/h4-slide2.png";
import Slide3 from "../../images/h4-slide3.png";
import Slide4 from "../../images/h4-slide4.png";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="bd-example container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators mt-2">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Slide1}
                className="d-block w-100 h-100 ml-5"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>
                  by one, get one <strong>50% off</strong>
                </h3>
                <h5>school supplies & backpacks.*</h5>
                <Link to="#">
                  <span>Next</span>
                  <span>Shop now</span>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Slide2} className="d-block w-75 h-75 ml-5" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h3>
                  by one, get one <strong>50% off</strong>
                </h3>
                <h5>school supplies & backpacks.*</h5>
                <Link to="#">
                  <span>Next</span>
                  <span>Shop now</span>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Slide3} className="d-block w-75 h-75 ml-5" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h3>
                  by one, get one <strong>50% off</strong>
                </h3>
                <h5>school supplies & backpacks.*</h5>
                <Link to="#">
                  <span>Next</span>
                  <span>Shop now</span>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Slide4} className="d-block w-75 h-75 ml-5" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h3>
                  by one, get one <strong>50% off</strong>
                </h3>
                <h5>school supplies & backpacks.*</h5>
                <Link to="#">
                  <span>Next</span>
                  <span>Shop now</span>
                </Link>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
