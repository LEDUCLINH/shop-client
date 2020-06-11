import React from "react";
import Err from "../images/err.jpg";

function ErrLogin() {
  return (
    <React.Fragment>
      <div className="container" style={{ textAlign: "center", padding: 50 }}>
        <h1 style={{ opacity: 0.8, paddingBottom: 30 }}>Bạn chưa đăng nhập</h1>
        <img src={Err} alt="img" style={{ width: 400, height: 200 }} />
      </div>
    </React.Fragment>
  );
}

export default ErrLogin;
