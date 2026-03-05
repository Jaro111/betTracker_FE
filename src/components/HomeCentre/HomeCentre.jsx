import React from "react";
import { getFilteredOdds } from "../../common/filterFunction";
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
  const [bookieList, setBookieList] = useState([]);
  const [allBookiesChecked, setAllBookiesChecked] = useState(true);
  // var to Modal
  const [back, setBack] = useState(1); // Its not spread- its back
  const [filterBookies, setFilterBookies] = useState([]);
  //
  const [change, setChange] = useState(0);

  const clickFilter = () => {
    setIsModalFilterVisible(true);
    // Sprawdzam w pamieci lokalnej czy jest jakis filtr bukmacherow zaznaczony w modal filter
    const checkSpread = JSON.parse(localStorage.getItem("chosenSpread")) || "1";
    setBack(checkSpread);
    const allBookieCheck = JSON.parse(
      localStorage.getItem("allBookiesChecked"),
    );
    // Warunki jak bysmy zostawili all bookie puste. To zaznaczy wszystko
    if (
      allBookieCheck === null ||
      ((allBookieCheck === false || allBookieCheck === true) &&
        filterBookies.length === 0)
    ) {
      setAllBookiesChecked(true);
      localStorage.setItem("allBookiesChecked", JSON.stringify(true));
    } else setAllBookiesChecked(false);
  };

  const getOddData = async () => {
    const excludedBookies =
      JSON.parse(localStorage.getItem("checkedBookies")) || [];
    const checkSpread = JSON.parse(localStorage.getItem("chosenSpread")) || "1";
    //
    const data = await fetchOddApi(sport.key, "uk", "h2h,h2h_lay");
    console.log("data");
    console.log(data);
    const filteredData = getFilteredOdds(
      // jsonData.flatOpportunities, // <---Test
      data.flatOpportunities, // <---Robocza
      excludedBookies,
      Number(checkSpread),
    );
    setBookieList(data.uniqueBookmakers); // <---Robocza
    // setBookieList(jsonData.bookmakers); // <---Test
    setOddData(filteredData);
    setFilterBookies(excludedBookies);
  };

  useEffect(() => {
    getOddData();
  }, [sport.name, change]);

  return (
    <div className="HomeCentre">
      <div className="HomeCentre-Options-wrapper">
        <SportSelect
          user={user}
          allSports={allSports}
          setAllSports={setAllSports}
          sport={sport}
          setSport={setSport}
        />
        <button className="HomeCentre-filter-btn" onClick={clickFilter}>
          FILTER
        </button>
        {isModalFilterVisible && (
          <ModalFilter
            setIsModalFilterVisible={setIsModalFilterVisible}
            const
            back={back}
            setBack={setBack}
            bookieList={bookieList}
            allBookiesChecked={allBookiesChecked}
            setAllBookiesChecked={setAllBookiesChecked}
            filterBookies={filterBookies}
            setFilterBookies={setFilterBookies}
            change={change}
            setChange={setChange}
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
                    ? "2px solid #04ff19"
                    : "1px solid #cfcfcf",
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
