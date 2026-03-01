import React from "react";
import "../OddCard/OddCard.css";

export const OddMenu = (props) => {
  const { item } = props;
  return (
    <div className="OddCard-wrapper">
      <div className="oddCard-bookmaker-wrapper">
        <p className="oddCard-Menu-content">BOOKMAKER</p>
      </div>
      <div className="oddCard-exchange-wrapper">
        <p className="oddCard-Menu-content">EXCHANGE</p>
      </div>
      <div className="oddCard-date-wrapper">
        <p className="oddCard-Menu-content">DATE</p>
      </div>
      <div className="oddCard-match-wrapper">
        <p className="oddCard-Menu-content">GAME</p>
      </div>

      <div className="oddCard-bet-wrapper">
        <p className="oddCard-Menu-content">BET</p>
      </div>

      <div className="oddCard-back-wrapper">
        <p className="oddCard-Menu-content">BACK</p>
      </div>
      <div className="oddCard-lay-wrapper">
        <p className="oddCard-Menu-content">LAY</p>
      </div>

      <div className="oddCard-spread-wrapper">
        <p className="oddCard-Menu-content">SPREAD</p>
      </div>
    </div>
  );
};
