import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import PizzaImage from "../Components/PizzaImage";
import axios from "axios";
import PizzaSizeSelection from "../Components/PizzaSizeSelector";
import PizzaToppingsSelection from "../Components/PizzaToppingSelection";
import CurrentPriceDisplay from "../Components/CurrentPriceDisplay";
import { Button, Box, Typography } from "@mui/material";
import { useFetchData } from "../CustomHooks/useFetchData";

const OrderPage = () => {
  const [formData, setFormData] = useState({ size: "", toppingIds: [] });
  const [currentPrice, setCurrentPrice] = useState(0);

  const sizes = useFetchData("/api/pizzaSizes");
  const toppings = useFetchData("/api/toppings");

  useEffect(() => {
    fetchCurrentPrice();
  }, [formData]);

  const fetchCurrentPrice = async () => {
    if (formData.size != "") {
      const response = await axios.post(
        "https://king-prawn-app-dndfk.ondigitalocean.app/api/pizzas/current-price",
        formData
      );
      setCurrentPrice(response.data.currentPrice);
    }
  };

  const handleSizeChange = (event) => {
    setFormData({ ...formData, size: event.target.value });
  };

  const handleToppingChange = (event) => {
    const toppingId = parseInt(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked) {
      setFormData({
        ...formData,
        toppingIds: [...formData.toppingIds, toppingId],
      });
    } else {
      setFormData({
        ...formData,
        toppingIds: formData.toppingIds.filter((id) => id !== toppingId),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.size) {
      alert("Please select a pizza size before submitting");
      return;
    }
    const response = await axios.post(
      "https://king-prawn-app-dndfk.ondigitalocean.app/api/pizzas",
      formData
    );
    setFormData({ size: "", toppingIds: [] });
    setCurrentPrice(0);
  };

  return (
    <Container
      sx={{
        marginY: 5,
      }}
    >
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
            <PizzaSizeSelection
              sizes={sizes}
              formData={formData}
              handleSizeChange={handleSizeChange}
            />
          </Grid>
          <Grid item xs={12}>
            <PizzaToppingsSelection
              toppings={toppings}
              formData={formData}
              handleToppingChange={handleToppingChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CurrentPriceDisplay currentPrice={currentPrice} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OrderPage;
