import Container from "@mui/material/Container";
import PizzaForm from "../Components/PizzaForm";
import Paper from "@mui/material/Paper";

const OrderPage = () => {
  return (
    <Container
      sx={{
        marginY: 3,
        width: {
          xs: "90%", 
          sm: "70%", 
          md: "50%", 
          lg: "35%",
        },
        maxheight: "100vh",
      }}
    >
      <Paper elevation={3}>
      
          <PizzaForm />
      </Paper>
    </Container>
  );
};

export default OrderPage;
