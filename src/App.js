import "./App.css";
import OrderPage from "./Pages/OrderPage";
import OrderListPage from "./Pages/OrdersListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Components/AppBar";
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
