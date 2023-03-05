import React from "react";
import SideBar from "../components/SideBar";

export default function Addons() {
	return (
		<>
			<SideBar
				stepNumber="stepNumber"
				first="step"
				second="step"
				third="step active"
				fourth="step"
			/>
			<div className="rightContent">
				<h1>Pick add-ons</h1>
				<p>Add-ons help enhance your gaming experience</p>
			</div>
		</>
	);
}
