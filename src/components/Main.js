import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import fridge2 from "../images/fridge2.png";
import "../App.css";
function Main(props) {
  const [product, setProduct] = useState({
    name: "",
    type: "",
    expiryDate: "",
  });

  function onSubmit() {
    fetch("http://localhost:3000/fridge", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...product, id: uuidv4() }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct({ name: "", type: "", expiryDate: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className="container1">
        <h1 id="container-h1">
          Take your fist steps today to reduce food waste!
        </h1>
        <h2 id="container-h2">
          Join our movement now. Start by inserting your product name. Add the
          product type: vegetables, fruits, dairy and meat. The last step is to
          add the use by date. Don't forget to repeat the steps every time you
          buy a new product.
        </h2>
        <h2 id="container-h3">Ready to have a go?</h2>
      </div>
      <img src={fridge2} id="mainImg1" />
      &nbsp;&nbsp;&nbsp;
      <h1 id="h1">Insert product here</h1>
      <input
        id="input"
        name="product"
        type="text"
        value={product.name}
        onChange={(e) => {
          setProduct({ ...product, name: e.target.value });
        }}
      />
      <h1 id="h1">Product type</h1>
      <input
        id="input"
        type="text"
        value={product.type}
        onChange={(e) => {
          setProduct({ ...product, type: e.target.value });
        }}
      />
      <h1 id="h1">Use by date</h1>
      <input
        id="input"
        type="date"
        value={product.expiryDate}
        onChange={(e) => {
          setProduct({ ...product, expiryDate: e.target.value });
        }}
      />{" "}
      &nbsp;&nbsp;&nbsp;
      <div className="btn">
        <button id="btn-lg1" onClick={onSubmit}>
          Add Product
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button id="btn-lg2">Remove Product</button>
      </div>
      &nbsp;&nbsp;&nbsp;
    </>
  );
}

export default Main;
