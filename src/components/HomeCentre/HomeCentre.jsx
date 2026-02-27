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
  const [allSports, setAllSports] = useState(null);
  const [sport, setSport] = useState({
    country: "England",
    sport: "Football",
    name: "Premier League",
    key: "soccer_epl",
  });
  const [oddData, setOddData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();

  const getOddData = async () => {
    const data = await fetchOddApi(sport.key, "uk", "h2h,h2h_lay");
    setOddData(data.flatOpportunities);
  };

  useEffect(() => {
    getOddData();
    // setOddData(jsonData);
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
          return (
            <div
              key={index}
              style={{
                border:
                  selectedIndex === index
                    ? "2px solid #ff0404"
                    : "1px solid #f5f5f5",
                cursor: "pointer",
              }}
              onClick={() => setSelectedIndex(index)}
            >
              <OddCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
