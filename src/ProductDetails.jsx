import React from 'react';

function ProductDetails({ product, onClose }) {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Размер: {product.size}</p>
      <p>Цена: {product.price} ₽</p>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default ProductDetails;