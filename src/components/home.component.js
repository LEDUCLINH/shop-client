import React, { Component } from "react";

import Slide from "./homecomponents/slide.home";
import Promotions from "./homecomponents/promottion.home";
import { Productions } from "./homecomponents/productions.home";
import Companys from "./homecomponents/companys.home";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slide />
        <Promotions />
        <Productions />
        <Companys />
      </React.Fragment>
    );
  }
}

export default Home;
