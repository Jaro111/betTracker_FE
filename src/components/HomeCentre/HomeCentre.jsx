import React from "react";
import { OddCard } from "../OddCard/OddCard";
import { OddMenu } from "../OddMenu/OddMenu";
import jsonData from "../../assets/flat_okazje.json";
import { fetchOddApi } from "../../common/fetchOdd";
import { useState, useEffect } from "react";
import { SportSelect } from "../SportSelect/SportSelect";
import "./HomeCentre.css";

export const HomeCentre = (props) => {
  const { user } = props;
  const [allSports, setAllSports] = useState([]);
  const [sport, setSport] = useState({
    country: "England",
    sport: "Football",
    name: "Premier League",
    key: "soccer_epl",
  });
  const [oddData, setOddData] = useState([]);

  const getOddData = async () => {
    const data = await fetchOddApi(sport.key, "uk", "h2h,h2h_lay");
    setOddData(data.flatOpportunities);
  };

  useEffect(() => {
    getOddData();
  }, [sport.name]);
  return (
    <div className="HomeCentre">
      <SportSelect
        user={user}
        allSports={allSports}
        setAllSports={setAllSports}
        sport={sport}
        setSport={setSport}
      />
      <div className="HomeCentre-Odd-wraper">
        <OddMenu />
        {oddData.map((item, index) => {
          return <OddCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
