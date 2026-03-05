import { checkCredits } from "../../common/fetchOdd";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [credits, setCredits] = useState("");

  const creditCheck = async () => {
    const data = await checkCredits();
    setCredits(data.credits["x-requests-remaining"]);
  };
  return (
    <div className="Navbar">
      <button style={{ fontSize: "12px" }} onClick={creditCheck}>
        CREDIT LEFT CHECK
      </button>
      <p className="Navbar-credit-number">{credits}</p>
    </div>
  );
};
