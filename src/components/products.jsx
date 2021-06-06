import React, { Component } from "react";
import formatCurrency from "../utils";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  openModal = async (product) => {
    await this.setState({ product: product });
  };

  closeModal = async () => {
    await this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade button cascade>
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a
                    href={"#" + product._id}
                    onClick={() => this.openModal(product)}
                  >
                    <img src={product.image_url} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div> {formatCurrency(product.price)} </div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>

        {product && (
          <Modal isOpen={true}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image_url} alt={product.title}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>
                    <strong>{product.description}</strong>
                  </p>
                  <p>
                    Available Sizes:
                    {product.availableSizes.map((size, index) => (
                      <span key={index + size}>
                        {"  "}
                        <button className="button">{size}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)} </div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
