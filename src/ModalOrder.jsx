import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalOrder = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Оформление заказа</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" placeholder="Имя" className="form-control mb-3" />
        <input type="tel" placeholder="Номер телефона" className="form-control" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Закрыть</Button>
        <Button variant="primary" onClick={() => { onClose(); }}>Заказать</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOrder;
