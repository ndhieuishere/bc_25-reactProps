import React, { Component } from "react";



export default class ProductItem extends Component {
 
  renderShoes = () => {

    const shoesNew = this.props.shoesList.shoesList.map((item) => {
      return (
        <div className="col-md-4" style={{ padding: 15 }}>
          <div className="card">
            <img className="card-img-top" src={item.image} alt />
            <div className="card-body">
         

              <h4 className="card-title" style={{ fontSize: 20 }}>
                {item.name}
              </h4>
              <p className="card-text">{item.price}$</p>
              <button className="btn btn-dark">
                Add To Cart <i className="fas fa-cart-arrow-down"></i>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
                style={{ marginLeft: 50 }}
                onClick={() => {
                  this.props.getDetailProduct(item);
                }}
              >
                Chi tiết sp
              </button>
            </div>
          </div>
        </div>
      );
    });
    return shoesNew;
  };

  render() {
    return this.renderShoes();
  }
}
