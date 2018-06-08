import './style.css';
import React, { Component } from 'react';
import logo from '@/assets/images/logo.svg';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="Header-nav">
          <img className="Header-logo" src={logo} alt="logo" />
          <ul className="Header-nav-ul">
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/about-us">关于我们</Link>
            </li>
            <li>
              <Link to="/mg-desgin">MG设计</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
