// src/Slider.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import hoodie1 from './assets/hoodie1.jpg'; // Правильный путь к изображению
import hoodie2 from './assets/hoodie2.jpg';
import hoodie3 from './assets/hoodie3.jpg';
import './Slider.css';

const Slider = () => {
  return (
    <Carousel className='car'>
      <Carousel.Item>
        <img className="d-block w-100" src={hoodie1} alt="Первый слайд" />
        <Carousel.Caption>
          <h3>Толстовка Синяя</h3>
          <p>Лучшее качество и стиль!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hoodie2} alt="Второй слайд" />
        <Carousel.Caption>
          <h3>Толстовка Красная</h3>
          <p>Выразите себя с цветами!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hoodie3} alt="Третий слайд" />
        <Carousel.Caption>
          <h3>Толстовка Зеленая</h3>
          <p>Уют и комфорт для вас!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;