import React from "react";
import SideBar from "../components/SideBar";

export default function Selectplan() {
	return (
		<>
			<SideBar
				stepNumber="stepNumber"
				first="step"
				second="step active"
				third="step"
				fourth="step"
			/>
			<div className="rightContent">
				<h1>Select your plan</h1>
				<p>You have option of monthly or yearly billing</p>
				<div className="selectPlanForm"></div>
			</div>
		</>
	);
}
