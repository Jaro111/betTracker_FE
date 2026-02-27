const url = import.meta.env.VITE_URL;

export const fetchOddApi = async (sport, regions, markets) => {
  const response = await fetch(`${url}/fetchOdds`, {
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
