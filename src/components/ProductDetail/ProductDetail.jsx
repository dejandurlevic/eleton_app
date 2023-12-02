import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div className="product-detail">
      <div className="image-gallery">
        <div className="big-image">
          <img src={activeImage} alt="Main image" />
        </div>
        <div className="additional-images">
          {product?.images?.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
      <div className="details">
        <h2>{product?.title}</h2>
        <p className="amount">${product?.price}</p>
        <p>Reviews: {product?.rating}</p>
        <p>
          <span>Avalibality:</span>
          {product?.stock}
        </p>
        {product?.stock && (
          <p>Hurry up! only {product?.stock} products left in stock!</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
