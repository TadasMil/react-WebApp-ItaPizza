import React, { Component } from "react";
import ProductsTitle from "../products/ProductsTitle";
import AboutPresentation from "./AboutPresentation";
import AboutWhyUsList from "./AboutWhyUsList";
import AboutOurTeam from "./AboutOurTeam";
import { AboutFaq } from "./AboutFaq";
import Footer from "../../footer/Footer";
import { AboutClients } from "./AboutClients";

export default class About extends Component {
  render() {
    return (
      <>
        <ProductsTitle name="Apie mus" />
        <AboutPresentation />
        <AboutWhyUsList />
        <AboutFaq />
        <AboutOurTeam />
        <AboutClients />
        <Footer />
      </>
    );
  }
}
