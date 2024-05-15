import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Alquiler, Campeonatos, Eventos, Home } from "../pages";
import { Login } from "../components/Login";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/campeonatos", element: <Campeonatos /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/alquiler", element: <Alquiler /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
