import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { foods } from "./data";
import Korzinka from "./pages/Korzinka";
import Menu from "./pages/Menu";
import Pay from "./pages/Pay";
import Detail from "./pages/Detail";
import Dostavka from "./pages/Dostavka";
import Chegirma from "./pages/Chegirma";

const App = () => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([...foods]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout cart={cart} setCart={setCart} />}>
        <Route
          index
          element={
            <Home data={data} setData={setData} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/korzinka"
          element={
            <Korzinka
              data={data}
              setData={setData}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <Menu data={data} setData={setData} cart={cart} setCart={setCart} />
          }
        />
        <Route path="/pay" element={<Pay />} />
        <Route path="/foods/:id" element={<Detail setCart={setCart} cart={cart} data={data} />} />
        <Route path="/dostavka" element={<Dostavka data={data} />} />
        <Route path="/aktsiya" element={<Chegirma data={data} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
