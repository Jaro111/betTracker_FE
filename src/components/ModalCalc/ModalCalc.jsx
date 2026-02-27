import React from "react";
import { matchedBetCalculator } from "../../common/calcFunction";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import "./ModalCalc.css";

export const ModalCalc = (props) => {
  //

  const {
    setIsModalCalcVisible,
    item,
    backOdds,
    layOdds,
    layCommission,
    setBackOdds,
    setLayOdds,
    setLayCommissionn,
  } = props;
  const [mode, setMode] = useState("NORMAL");
  const [backStake, setBackStake] = useState(10);
  const [backCommission, setBackCommission] = useState(0);
  const [lay, setLay] = useState(0);
  const [liability, setLiability] = useState(0);
  const [position, setPosition] = useState(0);

  const modeSelect = (e) => {
    // console.log(e.target.value);
    setMode(e.target.value);
  };

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };
  const calculateFunc = () => {
    const data = matchedBetCalculator(
      mode,
      backStake,
      backOdds,
      layOdds,
      layCommission,
      backCommission,
    );
    console.log(data);
    setLay(data.layStake);
    setLiability(data.liability);
    setPosition(data.overallPosition);
  };

  return (
    <div className="ModalCalc">
      <div className="ModalCalc-closeIcon-wrapper">
        <IoIosClose
          className="ModalCalc-closeIcon"
          onClick={() => setIsModalCalcVisible(false)}
        />
      </div>
      <div className="ModalCalc-content-wrapper">
        <div className="ModalCalc-details-content-wrapper">
          <p>
            Game:{" "}
            <span className="ModalCalc-details-content-span-game-wrapper">
              {" "}
              {item.match}
            </span>
          </p>
          <p>
            {" "}
            Bet:
            <span className="ModalCalc-details-content-span-bet-wrapper">
              {" "}
              {item.bet}
            </span>
          </p>
        </div>
        <div className="ModalCalc-odd-calc-wrapper">
          <select onChange={(e) => modeSelect(e)}>
            <option value="NORMAL">NORMAL</option>
            {/* <option value="FREE_BET_SNR">FREE BET (SNR)</option> */}
            <option value="FREE_BET_SR">FREE BET (SR)</option>
            {/* <option value="RISK_FREE">RISK FREE</option> */}
          </select>
          {/* STAKE */}
          <div className="ModalCalc-odd-calc-stake">
            <label>Back stake:</label>
            <input
              className="ModalCalc-odd-calc-input"
              value={backStake}
              onChange={(e) => changeHandler(e, setBackStake, backStake)}
            ></input>
          </div>
          {/* BACK ODDS */}
          <div className="ModalCalc-odd-back-stake">
            <label>Back Odds:</label>
            <input
              className="ModalCalc-odd-calc-input"
              value={backOdds}
              onChange={(e) => changeHandler(e, setBackOdds, backOdds)}
            ></input>
            {/* BACK COMMISION */}
            <label>Back Commission:</label>
            <input
              className="ModalCalc-odd-calc-input"
              value={backCommission}
              onChange={(e) =>
                changeHandler(e, setBackCommission, backCommission)
              }
            ></input>
          </div>
          {/* LAY ODDS */}
          <div className="ModalCalc-odd-lay-stake">
            <label>Lay Odds:</label>
            <input
              className="ModalCalc-odd-calc-input"
              value={layOdds}
              onChange={(e) => changeHandler(e, setLayOdds, layOdds)}
            ></input>
            {/* LAY COMMISION */}
            <label>Lay Commission:</label>
            <input
              className="ModalCalc-odd-calc-input"
              value={layCommission}
              onChange={(e) =>
                changeHandler(e, setLayCommissionn, layCommission)
              }
            ></input>
          </div>
        </div>
        {/* CALC */}
        <button className="ModalCalc-odd-btn-calculate" onClick={calculateFunc}>
          CALCULATE
        </button>

        {/* RESULT */}
        {lay > 0 ? (
          <div className="ModalCalc-odd-result-wrapper">
            <p className="ModalCalc-odd-result-content">
              {" "}
              At odds of{" "}
              <span className="ModalCalc-odd-result-content-span">
                {layOdds}
              </span>{" "}
              you could lay{" "}
              <span className="ModalCalc-odd-result-content-span">£{lay} </span>
              Liability will be{" "}
              <span className="ModalCalc-odd-result-content-span">
                £{liability}
              </span>
            </p>
            <p className="ModalCalc-odd-result-content">
              Your overall position will be{" "}
              <span className="ModalCalc-odd-result-content-span">
                {position}
              </span>{" "}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
