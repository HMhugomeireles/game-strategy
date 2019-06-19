import React, { Component } from 'react'
import { Layout } from '../styles/styles';

import Canvas from './Canvas';
import SideBar from './SideBar';
import Footer from './footer';


export default class Page extends Component {

  render() {
    return (
      <Layout>
        <Canvas />
        <SideBar />
        <Footer />
      </Layout>
    )
  }
}



