import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const PizzaSizeSelection = ({ sizes, formData, handleSizeChange }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Pizza Size</FormLabel>
      <RadioGroup aria-label="pizza-size" name="pizza-size" row>
        <Grid container spacing={2} alignItems="center">
          {sizes.map((pizza, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <FormControlLabel
                value={pizza.id}
                control={
                  <Radio
                    checked={formData.size.toString() === pizza.id.toString()}
                    onChange={handleSizeChange}
                  />
                }
                label={pizza.size}
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default PizzaSizeSelection;
