import { getSports } from "../../utils/fetch";
import { useEffect, useState } from "react";
import "./SportSelect.css";

export const SportSelect = (props) => {
  const { user, allSports, setAllSports, setSport, sport } = props;

  const fetchSports = async () => {
    const data = await getSports(user.token);
    setAllSports(data.sports);
  };
  const selectSport = (e) => {
    setSport(allSports[e.target.value]);
  };
  useEffect(() => {
    fetchSports();
  }, []);
  return (
    <div className="SportSelect">
      <form className="SportSelect-select-form">
        <label className="SportSelect-label">Sport:</label>
        <select
          onChange={(e) => selectSport(e)}
          className="SportSelect-select"
          name="sports"
        >
          {allSports.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>

        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  );
};
