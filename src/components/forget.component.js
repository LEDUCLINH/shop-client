import React, { Component } from "react";
import axios from "axios";

export class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      validator: false,
      codeReceive: "",
      codeSend: "",
      passwordBoolean: false,
      password: "",
      err: "",
      errCode: "",
      changePassword: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmitCode = this.onSubmitCode.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
  }
  // email
  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    await axios
      .post("https://shopmobi.herokuapp.com/login/forget", {
        email: this.state.email,
      })
      .then((res) => {
        this.setState({
          validator: true,
          codeReceive: res.data.validate,
        });
      })
      .catch((err) => {
        this.setState({
          err: err.response.data.err,
        });
      });
  }
  //    validator
  onChangeCode(e) {
    this.setState({
      codeSend: e.target.value,
    });
  }
  onSubmitCode(e) {
    e.preventDefault();
    if (parseInt(this.state.codeSend) === this.state.codeReceive)
      this.setState({
        passwordBoolean: true,
      });
    else {
      this.setState({
        errCode: "Mã không hợp lệ",
      });
    }
  }
  // password
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  async onSubmitPassword(e) {
    e.preventDefault();
    const user = {
      password: this.state.password,
      email: this.state.email,
    };
    axios
      .post("https://shopmobi.herokuapp.com/user/updatepass", user)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        this.setState({
          changePassword: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.changePassword ? (
          !this.state.passwordBoolean ? (
            !this.state.validator ? (
              <form>
                <div className="form-group container" id="forget">
                  <lable htmlFor="forget__email" className="col-form-label">
                    Xác nhận email
                  </lable>
                  {this.state.err && <p id="err__forget">{this.state.err}</p>}
                  <input
                    id="forget__email"
                    type="email"
                    name="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChange}
                    style={{ width: 300 }}
                  />
                  <button className="btn btn-primary" onClick={this.onSubmit}>
                    Xác nhận
                  </button>{" "}
                </div>
              </form>
            ) : (
              <form>
                <div className="form-group container" id="forget">
                  <label htmlFor="forget__code" className="col-form-label">
                    Nhập mã
                  </label>
                  {this.state.errCode && (
                    <p id="err__forget">{this.state.errCode}</p>
                  )}
                  <input
                    id="forget__code"
                    type="text"
                    className="form-control"
                    value={this.state.codeSend}
                    onChange={this.onChangeCode}
                    style={{ width: 300 }}
                  />
                  <button onClick={this.onSubmitCode}>validator</button>
                </div>
              </form>
            )
          ) : (
            <form>
              {" "}
              <div className="form-group container" id="forget">
                <label htmlFor="forget__password" className="col-form-label">
                  Nhập mật khẩu mới
                </label>
                <input
                  id="forget__password"
                  type="text"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  style={{ width: 300 }}
                />
                <button onClick={this.onSubmitPassword}>OK</button>
              </div>
            </form>
          )
        ) : (
          <div className="container" id="forget">
            <a href="/" className="btn btn-primary">
              Comback Homepage
            </a>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Forget;
