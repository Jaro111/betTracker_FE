export const getFilteredOdds = (data, excludedBookmakers, mySpread) => {
  if (!excludedBookmakers || excludedBookmakers.length === 0) {
    const myData = data.filter((item) => item.back >= mySpread);
    // const sorted = myData.sort((a, b) => a.spread - b.spread);
    return myData;
  } else {
    const excludedSet = new Set(excludedBookmakers);
    const myData = data.filter(
      (item) => excludedSet.has(item.bookmaker) && item.back >= mySpread,
    );
    // const sorted = myData.sort((a, b) => b.spread - a.spread);
    return myData;
  }
};
