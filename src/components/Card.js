import React, { useState, useEffect } from "react";
import "../css/custom.css";

const Card = ({
  name,
  image,
  price,
  originalPrice,
  sale,
  addCartItems,
  removeCartItems,
  id,
  products,
}) => {
  const [state, setState] = useState(true);
  function updateState() {
    setState((s) => !s);
  }

  useEffect(() => {
    if (products.includes(id)) {
      setState(false);
    } else {
      setState(true);
    }
  }, [id, products, state]);

  return (
    <>
      <div className="col mb-5" id={id}>
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          {sale ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : null}

          {/* <!-- Product image--> */}
          <img className="card-img-top" src={image} alt={name} />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{name}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
                <i className="bi bi-star-fill rating"></i>
              </div>
              {/* <!-- Product price--> */}
              {originalPrice ? (
                <span className="text-muted text-decoration-line-through">
                  {originalPrice}
                </span>
              ) : null}{" "}
              {price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                className="btn btn-outline-dark mt-auto"
                href="#!"
                onClick={() => {
                  state ? addCartItems(id) : removeCartItems(id);
                  updateState();
                }}
              >
                {state ? "Add to cart" : "Remove item"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
