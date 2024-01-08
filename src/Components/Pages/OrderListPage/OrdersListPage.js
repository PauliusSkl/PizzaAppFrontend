import Layout from "../../Layout";
import { useFetchData } from "../../CustomHooks/useFetchData";
import React from "react";
import { useState } from "react";
import OrdersList from "./components/OrdersList";
import { TableContainer, Paper, TablePagination } from "@mui/material";

const OrdersListPAge = () => {
  const orders = useFetchData("/api/pizzas");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  orders.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));

  const displayedOrders = orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Layout xs="100%" sm="100%" md="100%" lg="100%"> 
      <TableContainer component={Paper}>
        <OrdersList orders={displayedOrders} />
        <TablePagination 
        component="div" 
        count={orders.length} 
        page={page} 
        onPageChange={(event, newPage) => setPage(newPage)} 
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
         />
      </TableContainer>
      </Layout>
  );
};

export default OrdersListPAge;
