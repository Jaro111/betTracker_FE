import React from "react";
import { ModalCalc } from "../ModalCalc/ModalCalc";
import { AiFillCalculator } from "react-icons/ai";
import { useState } from "react";
import "./OddCard.css";
import { SiSelenium } from "react-icons/si";

export const OddCard = (props) => {
  //
  const { item, index } = props;
  const [isModalCalcVisible, setIsModalCalcVisible] = useState(false);
  const [backOdds, setBackOdds] = useState(0);
  const [layOdds, setLayOdds] = useState(0);
  const [layCommission, setLayCommissionn] = useState(0);

  //
  const calcClick = (item) => {
    setIsModalCalcVisible(true);
    setBackOdds(item.back);
    setLayOdds(item.lay);
    if (item.exchange === "Betfair") {
      setLayCommissionn(2);
    } else {
      setLayCommissionn(0);
    }
  };

  //
  return (
    <div className="OddCard-wrapper">
      <div className="oddCard-bookmaker-wrapper">
        <p className="oddCard-content">{item.bookmaker}</p>
      </div>
      <div className="oddCard-date-wrapper">
        <p className="oddCard-content">{item.dateTime}</p>
      </div>
      <div className="oddCard-match-wrapper">
        <p className="oddCard-content">{item.match}</p>
      </div>

      <div className="oddCard-bet-wrapper">
        <p className="oddCard-content"> {item.bet}</p>
        <AiFillCalculator
          onClick={() => calcClick(item)}
          className="oddCard-icon-calc"
        />
        {isModalCalcVisible && (
          <ModalCalc
            setIsModalCalcVisible={setIsModalCalcVisible}
            item={item}
            backOdds={backOdds}
            setBackOdds={setBackOdds}
            layOdds={layOdds}
            setLayOdds={setLayOdds}
            layCommission={layCommission}
            setLayCommissionn={setLayCommissionn}
          />
        )}
      </div>

      <div
        className="oddCard-back-wrapper"
        style={{ backgroundColor: "blue", color: "white", fontWeight: "700" }}
      >
        <p className="oddCard-content">{item.back}</p>
      </div>
      <div
        className="oddCard-lay-wrapper"
        style={{ backgroundColor: "pink", color: "black", fontWeight: "700" }}
      >
        <p className="oddCard-content">{item.lay}</p>
      </div>
      <div
        className="oddCard-exchange-wrapper"
        style={{
          backgroundColor:
            item.exchange === "Betfair" ? "rgb(72, 136, 255)" : "Black",
          color: "white",
        }}
      >
        <p className="oddCard-content">{item.exchange}</p>
      </div>
      <div
        className="oddCard-spread-wrapper"
        style={{ backgroundColor: item.spread > 0 ? "lightgreen" : "white" }}
      >
        <p className="oddCard-content">{item.spread}</p>
      </div>
    </div>
  );
};
