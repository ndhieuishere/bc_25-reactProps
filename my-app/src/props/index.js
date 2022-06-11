import React, { Component } from "react";
import ProductList from "./productList";
import data from "./data.json";
import Modal from "./modal";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { shoesList: data,  };
  }

  getDetailProduct = (item) => {
    // console.log(item);
    // const productNew = {
    //   image: item.image,
    //   name: item.name,
    //   alias: item.alias,
    //   price: item.price,
    //   description: item.description,
    //   shortDescription: item.shortDescription,
    //   quantity: item.quantity,
    // };
    this.setState({
      shoesList: item,
    });
  };

  render() {
    return (
      <>
        <h3
          style={{
            textAlign: "center",
            marginBottom: 50,
            color: "grey",
            padding: 15,
          }}
        >
          Shoes Shop
        </h3>

        <div
          className="container"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <ProductList
            shoesList={data}
            getDetailProduct={this.getDetailProduct}
          />
        </div>
        <div>
          <Modal detailProduct={this.state.shoesList} />
        </div>
      </>
    );
  }
}
