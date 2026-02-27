export const matchedBetCalculator = (
  mode,
  backStake,
  backOdds,
  layOdds,
  backComm = 0,
  layComm = 0,
) => {
  const exCF = 1 - layComm / 100;

  let layStake = 0;
  let liability = 0;
  let overall = 0;

  switch (mode) {
    case "FREE_BET_SR": // Twój screen
      layStake = (backStake * backOdds) / layOdds;
      liability = layStake * (layOdds - 1);
      overall = backStake * backOdds - liability;
      break;

    case "NORMAL":
      layStake = (backStake * backOdds) / (layOdds * exCF);
      liability = layStake * (layOdds - 1);
      overall = backStake * (backOdds - 1) * (1 - backComm / 100) - liability;
      break;

    case "FREE_BET_SNR":
      layStake = (backStake * (backOdds - 1)) / ((layOdds - 1) * exCF);
      liability = layStake * (layOdds - 1);
      overall = backStake * (backOdds - 1) * (1 - backComm / 100) - liability;
      break;

    case "RISK_FREE":
      layStake = (backStake * (backOdds - 1)) / exCF;
      liability = layStake * (layOdds - 1);
      overall = backStake * (backOdds - 1) * (1 - backComm / 100) - liability;
      break;

    default:
      throw new Error("Nieznany tryb");
  }

  return {
    layStake: Number(layStake.toFixed(2)),
    liability: Number(liability.toFixed(2)),
    overallPosition: Number(overall.toFixed(2)),
  };
};
