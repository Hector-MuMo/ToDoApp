const randomColor = () => {
  const ArrColors = ["#c846cf", "#fc3d89", "#ffe661", "#E49630", "#CEDA54", ""];
  let randomIndex = Math.floor(Math.random() * 6);

  //return ArrColors[randomIndex];
  return ArrColors[randomIndex];
};

export default randomColor;
