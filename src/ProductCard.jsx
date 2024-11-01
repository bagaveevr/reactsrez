import React from 'react';

function ProductCard({ product, onDetails, onOrder }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Размер: {product.size}</p>
      <p className="price">Цена: {product.price} ₽</p>
      <button onClick={onDetails}>Подробнее</button>
      {product.quantity > 0 ? (
        <button onClick={onOrder}>В корзину</button>
      ) : (
        <button onClick={onOrder}>Заказать</button>
      )}
    </div>
  );
}

export default ProductCard;