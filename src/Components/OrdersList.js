import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";

const OrdersList = ({ orders }) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (a[sortField] < b[sortField]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortField] > b[sortField]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell onClick={() => handleSort("creationDate")} sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" } }}>
            Order Date
          </TableCell>
          <TableCell onClick={() => handleSort("size")} sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" } }}>
            Size
          </TableCell>
          <TableCell onClick={() => handleSort("toppings")} sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" } }}>
            Toppings
          </TableCell>
          <TableCell onClick={() => handleSort("totalPrice")} sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f5f5f5" } }}>
            Total Price
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{new Date(order.creationDate).toLocaleString()}</TableCell>

            <TableCell>{order.size}</TableCell>
            <TableCell>{order.toppings.length > 0 ? order.toppings.join(", ") : "—"}</TableCell>
            <TableCell>{order.totalPrice} €</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersList;
