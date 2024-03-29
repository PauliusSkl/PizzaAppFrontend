import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import axios from "axios";
import PizzaSizeSelection from "./PizzaSizeSelector";
import PizzaToppingsSelection from "./PizzaToppingSelection";
import CurrentPriceDisplay from "./CurrentPriceDisplay";
import PizzaImage from "./PizzaImage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Poppup from "../../../Poppup";
import "react-toastify/dist/ReactToastify.css";
import Divider from "@mui/material/Divider";
const PizzaForm = () => {
  
  const [formData, setFormData] = useState({ size: "", toppingIds: [] });
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.size) {
      Poppup({ message: "Please select a size", type: "error", duration: 2500 });
      return;
    }

    await axios.post("https://king-prawn-app-dndfk.ondigitalocean.app/api/pizzas", formData);

    setFormData({ size: "", toppingIds: [] });
    setCurrentPrice(0);
    Poppup({ message: "Order placed successfully", type: "success", duration: 1500 });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "100%",
        width: "100%",
        margin: "auto",
        padding: 3,
        backgroundColor: "background.paper",
        borderRadius: 1,
      }}
    >
      <PizzaImage />
      <Divider sx={"margin: 5px"} />
      <Typography variant="h4" align="center" gutterBottom>
        Create Pizza
      </Typography>
      <Divider sx={"margin-bottom: 5px;"} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PizzaSizeSelection formData={formData} setFormData={setFormData} />
          <Divider sx={"margin-top: 5px;"} />
        </Grid>
        <Grid item xs={12}>
          <PizzaToppingsSelection formData={formData} setFormData={setFormData} />
          <Divider sx={"margin-top: 5px;"} />
        </Grid>
        <Grid item xs={12}>
          <CurrentPriceDisplay formData={formData} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Place Order
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default PizzaForm;
