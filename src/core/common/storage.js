const setRate = (value) => {
  localStorage.setItem("rate", JSON.stringify(value));
};
const getRate = () => {
  return JSON.parse(localStorage.getItem("rate"));
};

export { setRate, getRate };
