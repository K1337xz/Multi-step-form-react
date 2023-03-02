import React from "react";
import SideBar from "../components/SideBar";
import Plancard from "../components/Plancard";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { Toggle } from "../components/Toggle";

export default function Selectplan() {
	const logState = (state) => {
		console.log(state);
	};
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
				<div className="selectPlanForm">
					<Plancard
						src={arcade}
						cardName="Arcade"
						cardPrice="$9/mo"
						id="arcade"
					/>
					<Plancard
						src={advanced}
						cardName="Advanced"
						cardPrice="$12/mo"
						id="advanced"
					/>
					<Plancard
						src={pro}
						cardName="Pro"
						cardPrice="$15/mo"
						id="pro"
					/>
				</div>
				<div className="lowerCheckbox">
					<p className="monthly">Monthly</p>
					<Toggle
						label="Toggle me"
						toggled={false}
						onClick={logState}
					/>
					<p className="yearly">Yearly</p>
				</div>
				<div className="lowerButtons">
					<button>Go back!</button>
					<button className="nextStp">Next Step</button>
				</div>
			</div>
		</>
	);
}
