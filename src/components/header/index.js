import React, { PureComponent } from "react";
import { Styledheader } from "./index.styled";
import logo from "../../assets/icons/logo.svg";
import cartLogo from "../../assets/icons/Empty Cart.svg";

export default class Header extends PureComponent {
  render() {
    return (
      <Styledheader>
        <nav className="links">
          <ul>
            <li>
              <a href="/">women</a>
            </li>
            <li>
              <a href="/">men</a>
            </li>
            <li>
              <a href="/">kids</a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="options">
          <div className="changeCurrency">
            <div className="currencyLogo">
              <p>$</p>
              <p>&#709;</p>
            </div>
          </div>

          <div className="cart">
            <img src={cartLogo} alt="cart" />
          </div>
        </div>
      </Styledheader>
    );
  }
}
