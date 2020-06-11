import React, { Component } from "react";
import axios from "axios";
import Register from "./user.signin";
import { Redirect } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"
export class userLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem("name") || "",
      password: "",
      notification: {},
      login: false,
      logout: false,
      avatar: localStorage.getItem("avatar") || "",
      show: false
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitLogOut = this.onSubmitLogOut.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const userLogIn = {
      name: this.state.name,
      password: this.state.password,
    };
    axios
      .post("https://shopmobi.herokuapp.com/login", userLogIn)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        localStorage.setItem("name", this.state.name);
        this.setState({
          notification: res.data,
          login: true,
          avatar: res.data.avatar,
        });
        localStorage.setItem("login", res.data.token);
        localStorage.setItem("avatar", res.data.avatar);
      })
      .catch((error) => {
        this.setState({
          name: "",
          password: "",
        });
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.setState({
            notification: error.response.data,
          });
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }
  handleShow() {
    this.setState({
      show: true
    })
  }
  handleClose() {
    this.setState({
      show: false
    })
  }
  onSubmitLogOut(e) {
    // axios.post('https://shopmobi.herokuapp.com/logout')
    // .then(res =>{
    //     this.setState({
    //         login:false,
    //         logout:true,
    //     })
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("login");
    localStorage.removeItem("name");
    localStorage.removeItem("avatar");
    // })
    // .catch(err =>{
    //     console.log(err)
    // })
    // console.log("OK");
  }
  componentDidMount() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token").length > 10
    ) {
      this.setState({
        login: true,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.login && (
          <div>
            <Register />
          </div>
        )}
        <div>
          {!localStorage.getItem("token") ? (
            <div>
              <a
                href="/"
                id="login"
                data-target="#exampleModal"
                data-toggle="modal"
              >
                <i className="fa fa-user" aria-hidden="true">
                  <span id="show" onClick={this.handleShow}>LogIn</span>
                </i>
              </a>
              <div
                className="modal fade mymodal"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Login
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label htmlFor="username" className="col-form-label">
                            UserName
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required
                            onChange={this.onChangeName}
                            value={this.state.name}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="userpassword"
                            className="col-form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            required
                            onChange={this.onChangePassword}
                            value={this.state.password}
                          />
                        </div>
                        <button
                          type="submit"
                          id="login_modal"
                          className="btn btn-primary"
                        >
                          LogIn
                        </button>
                        <span id="notification">
                          {this.state.notification.notification}
                        </span>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <a href="/forget" style={{ fontSize: 16, color: "blue" }}>
                        Forget password?
                      </a>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <React.Fragment>
              {this.state.logout && <Redirect to="/" />}
            </React.Fragment>
          )}
          {this.state.avatar && (
            <form onSubmit={this.onSubmitLogOut}>
              <button id="logout">
                <img
                  id="avatar"
                  alt="img"
                  style={{ height: 30, width: 30 }}
                  src={this.state.avatar}
                />
                <span>{this.state.name}</span>
              </button>
            </form>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default userLogIn;
