import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import ProductDetailsScreen from "./Screens/ProductDetailsScreen";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/sign-in" element={<LoginScreen />} />
      <Route path="/sign-up" element={<RegisterScreen />} />
      <Route path="/products" element={<ProductsScreen />} />
      <Route path="/product/:id" element={<ProductDetailsScreen />} />
      <Route />
    </Routes>
  );
}

export default App;
