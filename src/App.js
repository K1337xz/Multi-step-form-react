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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route basename="/multi-step-form-react">
			<Route path="/multi-step-form-react" element={<Mainpage />} />
			<Route
				path="/multi-step-form-react/select"
				element={<Selectplan />}
			/>
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
