import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Features from "./Components/Features";
import Gallery from "./Components/Gallery";
import Trainers from "./Components/Trainers";
import Subscription from "./Components/Subscription";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Gallery />
      <Trainers />
      <Subscription />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
