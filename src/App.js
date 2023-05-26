import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/pages/login/login";
import { Add } from "./components/pages/add/add";
import { Edit } from "./components/pages/edit/edit";
import { Product } from "./components/pages/product/product";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="edit" element={<Edit />} />
        <Route path="add" element={<Add />} />
        <Route path="product" element={<Product />} />
        <Route exact path="/" element={<Navigate to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
