
import React, { useState } from "react";
import Modal from "./Modal";

const Planets = ({ name, image, distance, temperature, moons, funfact }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="planet-card" onClick={() => setShowModal(true)}>
      <div className="img-container">
        <img
          className="planet-image"
          width={100}
          src={image}
          alt={`${name} image`}
        />
      </div>
      <div>
        <p className="planet-name">{name}</p>
      </div>
      <div>
        <button className="button-85" onClick={() => setShowModal(true)}>
          Explore 🚀
        </button>
      </div>

      <Modal show={showModal} onclose={() => setShowModal(false)}>
        <h2>{name}</h2>
        <img src={image} alt={`${name} image`} className="modal-planet-image" />
        <p>
          <strong>☀️ Distance:</strong> {distance}
        </p>
        <p>
          <strong>🌡️ Temperature:</strong> {temperature}
        </p>
        <p>
          <strong>🌑 Moons:</strong> {moons}
        </p>
        <p>
          <strong>🚀 Fun Fact:</strong> {funfact}
        </p>
        <button className="close-btn" onClick={() => setShowModal(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Planets;
