import React from "react";
import "./OddCard.css";

export const OddCard = (props) => {
  const { item } = props;
  return (
    <div
      className="OddCard-wrapper"
      style={{ border: item.spread > 0 ? "lightgreen" : "lightgrey" }}
    >
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
