import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const App = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout cart={cart} setCart={setCart} />}>
        <Route index element={<Home cart={cart} setCart={setCart} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
