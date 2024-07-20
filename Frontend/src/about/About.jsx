import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About_Compo from "../components/About_Compo";
import Footer from "../components/Footer";

function about() {
    return (
      <>
        <Navbar />
        <About_Compo/>
        <Footer />
      </>
    );
}

export default about;
