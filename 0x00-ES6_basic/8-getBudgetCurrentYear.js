function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const annum = getCurrentYear();
  const budget = {
    [`income-${annum}`]: income,
    [`gdp-${annum}`]: gdp,
    [`capita-${annum}`]: capita,
  };
  return budget;
}
