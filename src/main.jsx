import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./page/App";
import { GlobalStyles } from "./styles/global-styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./page/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<GlobalStyles />
	</React.StrictMode>
);
