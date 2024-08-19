import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  AllTodos,
  CompletedTodos,
  NotCompletedTodos,
} from "./components/index.js";

import { store } from "./app/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<AllTodos />} />
      <Route path="completedtodos" element={<CompletedTodos />} />
      <Route path="notcompletedtodos" element={<NotCompletedTodos />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
