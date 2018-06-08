import React, { Component } from 'react';
import Header from '@/components/Header';
import HeaderImg from '@/components/HeaderImg';
import Nav from '@/components/Nav';
import Project from '@/components/Project';

class Home extends Component {
  renderList () {
    const view = []
    this.props.list.map((item, index) => {
      return view.push(
        <Project info={item} key={index} />
      )
    })
    return view
  }
  render() {
    console.log();
    return (
      <div className="Home">
        <div className="Home-header">
          <Header />
          <HeaderImg />
          <Nav selected="all" />
        </div>
        <div className="Home-project-list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default Home;
