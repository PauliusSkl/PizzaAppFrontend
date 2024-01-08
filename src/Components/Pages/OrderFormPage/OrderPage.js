import PizzaForm from "./components/PizzaForm";
import Paper from "@mui/material/Paper";
import Layout from "../../Layout";

const OrderPage = () => {
  return (
    <Layout xs="90%" sm="70%" md="50%" lg="35%">
      <Paper elevation={3}>
        <PizzaForm />
      </Paper>
    </Layout>
  );
};

export default OrderPage;
