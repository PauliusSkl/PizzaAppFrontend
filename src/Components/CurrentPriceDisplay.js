import { Typography } from "@mui/material";

const CurrentPriceDisplay = ({ currentPrice }) => {
  return (
    <Typography variant="h6">
      Price: $<span id="price">{currentPrice}</span>
    </Typography>
  );
};

export default CurrentPriceDisplay;
