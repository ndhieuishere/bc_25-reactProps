import React, { Component } from "react";
import ProductList from "./productList";
import data from "./data.json";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { shoesList: data };
  }

  render() {
    return (
      <>
        <h3 style={{ textAlign: "center", marginBottom: 50, color: "grey",padding:15 }}>
          Shoes Shop
        </h3>

        <div
          className="container"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <ProductList shoesList={data} />
        </div>
      </>
    );
  }
}
