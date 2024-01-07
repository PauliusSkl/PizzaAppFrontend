import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import axios from "axios";
import PizzaSizeSelection from "../Components/PizzaSizeSelector";
import PizzaToppingsSelection from "../Components/PizzaToppingSelection";
import CurrentPriceDisplay from "../Components/CurrentPriceDisplay";
import PizzaImage from "./PizzaImage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Poppup from "../Components/Poppup";
import 'react-toastify/dist/ReactToastify.css';
const PizzaForm = () => {
  const [formData, setFormData] = useState({ size: "", toppingIds: [] });
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.size) {
        Poppup({message: "Please select a size", type: "error", duration: 2500});
        return;
    }
    await axios.post("https://king-prawn-app-dndfk.ondigitalocean.app/api/pizzas", formData);
    setFormData({ size: "", toppingIds: [] });
    setCurrentPrice(0);
    Poppup({message: "Order placed successfully", type: "success", duration: 1500});
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "50%",
        margin: "auto",
        padding: 3,
        backgroundColor: "background.paper",
        borderRadius: 1,
      }}
    >
      <PizzaImage />
      <Typography variant="h4" align="center" gutterBottom>
        Create Pizza
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PizzaSizeSelection formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item xs={12}>
          <PizzaToppingsSelection formData={formData} setFormData={setFormData} />
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
