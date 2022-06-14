import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar.js";
import OurMission from "./components/OurMission";
import Tips from "./components/Tips.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import { Route, Routes } from "react-router-dom";

//data
import product from "./db.json";
import { Component } from "react";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mission" element={<OurMission />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </div>

        <Footer id="footer" year={new Date().getFullYear()} />
      </div>
    </>
  );
}
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product,
    };
  }
  updateClicked(id) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.product[id].clicked = true;
    this.setState(stateCopy);
  }

  render() {
    return (
      <div>
        <Main
          product={this.state.product}
          updateClicked={this.updateClicked.bind(this)}
        />
      </div>
    );
  }
}

export default App;
