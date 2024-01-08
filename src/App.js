import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Components/AppBar";

import OrderPage from "./Components/Pages/OrderFormPage/OrderPage";
import OrderListPage from "./Components/Pages/OrderListPage/OrdersListPage";
function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<OrderPage />} />
          <Route path="/orders" exact element={<OrderListPage />} />
          {<Route path="*" element={<OrderPage />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
