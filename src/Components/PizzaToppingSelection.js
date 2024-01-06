import {
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const PizzaToppingsSelection = ({
  toppings,
  formData,
  handleToppingChange,
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Toppings</FormLabel>
      <Grid container spacing={2}>
        {toppings.map((topping, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FormControlLabel
              control={<Checkbox />}
              label={topping.name}
              value={topping.id}
              onChange={handleToppingChange}
              checked={formData.toppingIds.includes(topping.id)}
            />
          </Grid>
        ))}
      </Grid>
    </FormControl>
  );
};

export default PizzaToppingsSelection;
