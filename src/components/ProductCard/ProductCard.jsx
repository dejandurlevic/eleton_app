/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ name, price, image, href }) => {
  return (
    <Link className="product-card" to={href}>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <p className="name">{name}</p>
      <p className="price">${price}</p>
      <div className="star-rating">
        <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
      </div>
    </Link>
  );
};

export default ProductCard;
