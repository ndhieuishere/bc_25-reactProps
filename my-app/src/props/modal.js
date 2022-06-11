import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { detailProduct } = this.props;
    return (
      <div className="modal" id="myModal">
        <div className="modal-dialog mw-100">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Thông tin sản phẩm</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <row className="d-flex">
                <div className="col-md-4">
                  <img src={detailProduct.image} alt="" />
                </div>
                <div className="col-md-8">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>name</td>
                        <td>{detailProduct.name}</td>
                      </tr>
                      <tr>
                        <td>alias</td>
                        <td>{detailProduct.alias}</td>
                      </tr>
                      <tr>
                        <td>price</td>
                        <td>{detailProduct.price}</td>
                      </tr>
                      <tr>
                        <td>description</td>
                        <td>{detailProduct.description}</td>
                      </tr>
                      <tr>
                        <td>quantity</td>
                        <td>{detailProduct.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </row>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
