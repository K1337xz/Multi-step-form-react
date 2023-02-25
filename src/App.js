import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	BrowserRouter,
	Routes,
	Route,
	Link,
	RouterProvider,
} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Selectplan from "./pages/Selectplan";
import { firstPageAction } from "./components/FirstPageForm";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<Mainpage />} />
		</Route>
	)
);
export default function App() {
	return (
		<main>
			<RouterProvider router={router} />
		</main>
	);
}
