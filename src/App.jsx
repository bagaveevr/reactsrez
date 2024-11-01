import React, { useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import ModalOrder from './ModalOrder';
import { products } from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'Все' || product.category === selectedCategory)
    )
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  return (
    <div className="app-container">
      <Header />
      <Slider />
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="centr">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="Все">Все категории</option>
          <option value="Классические">Классические</option>
          <option value="Оверсайз">Оверсайз</option>
          <option value="С принтом">С принтом</option>
          <option value="Утепленные">Утепленные</option>
          <option value="Спортивные">Спортивные</option>
        </select>
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Сортировка по цене ({sortOrder === 'asc' ? 'возрастание' : 'убывание'})
        </button>
      </div>

      <div className="product-catalog">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDetails={() => setSelectedProduct(product)}
            onOrder={() => setShowModal(true)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

{showModal && (
  <ModalOrder show={showModal} onClose={() => setShowModal(false)} />
)}

    </div>
  );
}

export default App;