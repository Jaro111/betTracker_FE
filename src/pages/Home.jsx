import React from "react";
import { HomeCentre } from "../components/HomeCentre/HomeCentre";

export const Home = (props) => {
  const { user } = props;
  return <HomeCentre user={user} />;
};
