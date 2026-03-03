import React from "react";
import { OddCard } from "../OddCard/OddCard";
import { OddMenu } from "../OddMenu/OddMenu";
import { ModalFilter } from "../ModalFilter/MOdalFilter";
import jsonData from "../../assets/flat_okazje.json";
import { fetchOddApi } from "../../common/fetchOdd";
import { useState, useEffect, useMemo } from "react";
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
  const [isModalFilterVisible, setIsModalFilterVisible] = useState(false);
  const [spread, setSpread] = useState(1);
  const [bookieList, setBookieList] = useState([]);
  const [committedSpread, setCommittedSpread] = useState(5);

  const clickFilter = () => {
    setIsModalFilterVisible(true);
  };

  const getOddData = async () => {
    // setOddData(jsonData.flatOpportunities);
    // ------- test ----------

    const data = await fetchOddApi(sport.key, "uk", "h2h,h2h_lay");
    console.log(data);
    setOddData(data.flatOpportunities);
    //  --- Odkreslic -- ver robocza;
  };

  useEffect(() => {
    getOddData();
    console.log("dupa");
  }, [sport.name]);

  return (
    <div className="HomeCentre">
      <div className="HomeCentre-Options-wrapper">
        S
        <SportSelect
          user={user}
          allSports={allSports}
          setAllSports={setAllSports}
          sport={sport}
          setSport={setSport}
        />
        <button onClick={clickFilter}>FILTER</button>
        {isModalFilterVisible && (
          <ModalFilter
            setIsModalFilterVisible={setIsModalFilterVisible}
            const
            spread={spread}
            setSpread={setSpread}
            bookieList={bookieList}
            setBookieList={setBookieList}
          />
        )}
      </div>

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
