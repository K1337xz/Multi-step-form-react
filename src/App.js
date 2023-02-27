import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	BrowserRouter,
	Routes,
	Route,
	RouterProvider,
} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Selectplan from "./pages/Selectplan";
import SideBar from "./components/SideBar";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route basename="/multi-step-form-react">
			<Route exact path="/multi-step-form-react" element={<Mainpage />} />
			<Route
				path="/multi-step-form-react/select"
				element={<Selectplan />}
			/>
		</Route>
	)
);
export default function App() {
	return (
		<main className="container">
			<div className="cardWrapper">
				<SideBar />
				<RouterProvider router={router} />
			</div>
		</main>
	);
}
