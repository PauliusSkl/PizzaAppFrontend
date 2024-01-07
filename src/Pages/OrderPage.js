import Container from "@mui/material/Container";
import PizzaForm from "../Components/PizzaForm";
const OrderPage = () => {
  return (
    <Container
      sx={{
        marginY: 5,
      }}
    >
      <PizzaForm />
    </Container>
  );
};

export default OrderPage;
