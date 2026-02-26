export const fetchOddApi = async (sport, regions, markets) => {
  const response = await fetch("http://localhost:5000/fetchOdds", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sport: sport,
      regions: regions,
      markets: markets,
    }),
  });

  const data = await response.json();
  return data;
};
