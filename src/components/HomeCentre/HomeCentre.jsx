import React from "react";
import { useState, useEffect } from "react";
import { SportSelect } from "../SportSelect/SportSelect";
import "./HomeCentre.css";

export const HomeCentre = (props) => {
  const { user } = props;
  const [allSports, setAllSports] = useState([]);
  return (
    <div className="HomeCentre">
      <SportSelect
        user={user}
        allSports={allSports}
        setAllSports={setAllSports}
      />
    </div>
  );
};
