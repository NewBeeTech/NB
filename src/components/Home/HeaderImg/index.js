import './style.css';
import React, { Component } from 'react';
import headImg from '../../../assets/images/head-img.png';
import logo from '../../../assets/images/head-img-logo.svg';


class Header extends Component {
  render() {
    return (
      <div className="Header-img" style={{backgroundImage: `url(${headImg})`, backgroundSize: 'cover'}}>
        <img className="Header-img-logo" src={logo} alt="logo" />
        <div className="Header-img-en">NewBee Studio</div>
        <div className="Header-img-studio"><span>新蜂工作</span>室</div>
        <div className="Header-img-slogan"><span>互联网产品一站式服</span>务</div>
      </div>
    );
  }
}

export default Header;
