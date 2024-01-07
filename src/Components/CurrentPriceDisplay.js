import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const CurrentPriceDisplay = ({ formData, currentPrice, setCurrentPrice }) => {
  useEffect(() => {
    const fetchCurrentPrice = async () => {
      if (formData.size !== "") {
        const response = await axios.post("https://king-prawn-app-dndfk.ondigitalocean.app/api/pizzas/current-price", formData);
        setCurrentPrice(response.data.currentPrice);
      }
    };

    fetchCurrentPrice();
  }, [formData, setCurrentPrice]);

  return (
    <Typography variant="h6">
      Price: $<span id="price">{currentPrice}</span>
    </Typography>
  );
};

export default CurrentPriceDisplay;
