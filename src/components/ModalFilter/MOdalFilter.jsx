import React from "react";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import "./ModalFilter.css";

export const ModalFilter = (props) => {
  const {
    back,
    setBack,
    bookieList,
    setIsModalFilterVisible,
    allBookiesChecked,
    setAllBookiesChecked,
    filterBookies,
    setFilterBookies,
    change,
    setChange,
  } = props;

  const tempArray = [...filterBookies]; //kopia
  // Tick selected bookie
  const tickBoxBookie = (e) => {
    if (allBookiesChecked === false && e.target.checked === true) {
      tempArray.push(e.target.value); // Na klikniecie dodaje do listy jezeli allBook = false i checkbox zaznaczony
      setFilterBookies(tempArray);
      // Warunek jak by allBookiesChecked === null i nie bylo w pamili clokalnej
    } else if (!allBookiesChecked && e.target.checked === false) {
      // Sprawdza czy nie ma juz buka na liscie
      const tempArray = filterBookies.filter((item) => item !== e.target.value);
      setFilterBookies(tempArray);
    }
  };
  // Tick all bokies
  const tickBoxAll = (e) => {
    // Jak zaznaczymy all to wywala wszystko z pamieci lokalnej i czysci listy
    setAllBookiesChecked(e.target.checked);
    if (e.target.checked === true) {
      localStorage.removeItem("checkedBookies");
      setFilterBookies([]);
      setAllBookiesChecked(e.target.checked);
    }
  };
  // Function to check condition of item true or false
  const itemBoolCheck = (item) => {
    if (allBookiesChecked) {
      return true;
    } else if (!allBookiesChecked && !filterBookies.includes(item)) {
      return false;
    } else return true;
  };
  // Potwierdzenie wybranych filtrow i zapis w pamieci lokalnej
  const saveChangesModal = () => {
    localStorage.setItem("checkedBookies", JSON.stringify(tempArray));
    localStorage.setItem(
      "allBookiesChecked",
      JSON.stringify(allBookiesChecked),
    );
    localStorage.setItem("chosenSpread", JSON.stringify(back));
    setIsModalFilterVisible(false);
    // Tak aby udatowalo liste na stronie glownej
    setChange(change + 1);
  };
  // Close modal
  useEffect(() => {}, [allBookiesChecked, back]);

  return (
    <div className="ModalFilter">
      {/* <div className="ModalFilter-closeIcon-wrapper">
        <IoIosClose
          className="ModalFilter-closeIcon"
          onClick={() => setIsModalFilterVisible(false)}
        />
      </div> */}
      <div className="ModalFilter-Content-wrapper">
        {/* ----------------- SLIDER ----------------- */}
        <div className="ModalFilter-Slider-wrapper">
          <input
            className="ModalFilter-spreadSlider"
            type="range"
            style={{
              accentColor: "lightgreen",
            }}
            min={1}
            max={10}
            step={0.2}
            value={back}
            onChange={(e) => {
              setBack(e.target.value);
            }}
          />
          <div className="ModalFilter-spreadSlider-content-wrapper">
            <p className="ModalFilter-spreadSlider-content">Back:</p>
            <p
              className="ModalFilter-spreadSlider-content"
              style={{ color: "red", fontWeight: "600" }}
            >
              {back}
            </p>
          </div>
        </div>
        {/* ----------------- CHECKBOX ALL ----------------- */}
        <div className="ModalFilter-bookCheckbox-wrapper">
          <div className="ModalFilter-title-bookies-conetnt-wrapper">
            <p className="ModalFilter-title-bookies-content">Bookie list</p>{" "}
            <input
              className="ModalFilter-title-bookies-checkbox"
              type="checkbox"
              onChange={(e) => {
                tickBoxAll(e);
              }}
              checked={allBookiesChecked}
            />{" "}
          </div>
          {/* ----------------- CHECKBOX LIST ----------------- */}
          {bookieList
            ? bookieList.map((item, index) => {
                return (
                  <div className="ModalFilter-bookieLIst-wrapper" key={index}>
                    <input
                      type="checkbox"
                      value={item}
                      onChange={(e) => {
                        tickBoxBookie(e);
                      }}
                      checked={itemBoolCheck(item)}
                    />
                    <label>{item}</label>
                  </div>
                );
              })
            : null}
        </div>

        <button className="ModalFilter-saveButton" onClick={saveChangesModal}>
          Save
        </button>
      </div>
    </div>
  );
};
