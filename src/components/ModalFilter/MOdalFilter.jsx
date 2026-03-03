import React from "react";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import "./ModalFilter.css";

export const ModalFilter = (props) => {
  const {
    spread,
    setSpread,
    bookieList,
    setBookieList,
    setIsModalFilterVisible,
  } = props;

  return (
    <div className="ModalFilter">
      <div className="ModalFilter-closeIcon-wrapper">
        <IoIosClose
          className="ModalFilter-closeIcon"
          onClick={() => setIsModalFilterVisible(false)}
        />
      </div>
      <div className="ModalFilter-Content-wrapper">
        <div className="ModalFilter-Slider-wrapper">
          <p>{spread}</p>
          <input
            className="ModalFilter-spreadSlider"
            type="range"
            min={1}
            max={10}
            step={0.1}
            value={spread}
            onChange={(e) => {
              setSpread(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="ModalFilter-bookCheckbox-wrapper">
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Bike</label>
        </div>
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Bike</label>
        </div>
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Bike</label>
        </div>{" "}
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Bike</label>
        </div>
      </div>
    </div>
  );
};
