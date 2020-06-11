import React, { Component } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {},
      register: false,
      notification: "",
      avatar: null,
      nameAvatar: "",
      image: "",
      show: false,
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeAvatar = this.onChangeAvatar.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.Ref = React.createRef();
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  preViewAvatar(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        res(reader.result);
      };

      reader.onerror = (err) => {
        rej(err);
      };
    });
  }

  onChangeAvatar(e) {
    const file = e.target.files[0];
    this.preViewAvatar(file)
      .then((image) => {
        this.setState({
          avatar: file,
          nameAvatar: file.name,
          image,
        });
      })
      .catch((err) => console.log(err));
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", this.state.avatar);
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    axios
      .post("https://shopmobi.herokuapp.com/user/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        this.setState({
          name: "",
          email: "",
          password: "",
          register: true,
          notification: res.data.notification,
          show: false,
        });
      })
      .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.setState({
            errors: error.response.data,
            password: "",
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
  handleClose() {
    this.setState({
      show: false,
    });
  }
  handleShow() {
    this.setState({
      show: true,
    });
  }

  render() {
    const errors = this.state.errors.errors; //one a array of some object
    var errName = "";
    var errEmail = "";
    var errPassword = "";
    for (let index in errors)
      switch (errors[index].param) {
        case "name":
          errName = errors[index].msg;
          break;
        case "email":
          errEmail = errors[index].msg;
          break;
        case "password":
          errPassword = errors[index].msg;
          break;
        default:
          break;
      }
    return (
      <React.Fragment>
        {!(this.state.register || localStorage.getItem("login")) && (
          <div>
            <a
              href="#"
              id="resgister"
              data-toggle="modal"
              data-target="#exampleModal1"
            >
              <i className="fa fa-user" aria-hidden="true">
                <span onClick={this.handleShow}>Register</span>
              </i>
            </a>
           <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form
                  encType="multipart/form-data"
                >
                  <div className="form-group">
                    <label htmlFor="username" className="col-form-label">
                      UserName
                    </label>
                    {errName && <p id="errRegister">{errName}</p>}
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="username"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userpassword" className="col-form-label">
                      Password
                    </label>
                    {errPassword && <p id="errRegister">{errPassword}</p>}
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="userpassword"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="useremail" className="col-form-label">
                      Email
                    </label>
                    {errEmail && <p id="errRegister">{errEmail}</p>}
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="useremail"
                      required
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="file"
                      name="avatar"
                      style={{ marginBottom: 10, display: "none" }}
                      onChange={this.onChangeAvatar}
                      title="Chọn ảnh đại diện"
                      style={{ display: "none" }}
                      id="img"
                      accept="image/png, image/jpeg"
                      ref={this.Ref}
                    />
                    <Button
                      type="button"
                      onClick={() => this.Ref.current.click()}
                    >
                      Click me to upload image
                    </Button>
                    {this.state.image && (
                      <img
                        src={this.state.image}
                        style={{
                          width: "100px",
                          height: "100px",
                          marginLeft: "50px",
                        }}
                        alt="avatar"
                      />
                    )}
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  id="register__submit"
                  variant="primary"
                  onClick={this.onSubmit}
                >
                  Register
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Register;
