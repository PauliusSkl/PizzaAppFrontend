import React from "react";
import PizzaStock from "../Images/PizzaStock.png";

const PizzaImage = () => {
  return <img src={PizzaStock} alt="Pizza" style={{ width: "100%", objectFit: "contain", maxHeight: "250px" }} />;
};

export default PizzaImage;
