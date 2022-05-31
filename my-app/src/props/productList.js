import React, { Component } from "react";
import ProductItem from "./productItem";
export default class ProductList extends Component {
  render() {
    return (
      <div className="row" style={{padding:15}}>
        <ProductItem shoesList={this.props} />
      </div>
    );
  }
}
