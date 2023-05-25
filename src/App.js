import React from "react";
import Header from "./components/Head/Header";
import "./App.css";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio"; 
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

const App=()=> {
  return (
  <>
  <Header/>
  <Home/>
  <Features/>
  <Portfolio/>
  <Testimonials/>
  <Contact/>
  <Footer/>
  </>)
}

export default App;
