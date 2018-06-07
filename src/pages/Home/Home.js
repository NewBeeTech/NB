import React, { Component } from 'react';
import Header from '../../components/Home/Header';
import HeaderImg from '../../components/Home/HeaderImg';
import Nav from '../../components/Home/Nav';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <HeaderImg />
        <Nav selected="all" />
      </div>
    );
  }
}

export default Home;
