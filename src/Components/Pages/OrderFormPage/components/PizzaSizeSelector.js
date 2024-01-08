import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useFetchData } from "../../../CustomHooks/useFetchData";

const PizzaSizeSelection = ({ formData, setFormData }) => {
  const sizes = useFetchData("/api/pizzaSizes");

  const handleSizeChange = (event) => {
    setFormData({ ...formData, size: event.target.value });
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Pizza Size</FormLabel>
      <RadioGroup aria-label="pizza-size" name="pizza-size" row>
        <Grid container spacing={2} alignItems="center">
          {sizes.map((pizza, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <FormControlLabel value={pizza.id} control={<Radio checked={formData.size.toString() === pizza.id.toString()} onChange={handleSizeChange} />} label={pizza.size} />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default PizzaSizeSelection;
