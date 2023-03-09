import React from "react";
import SideBar from "../components/SideBar";
import Plancard from "../components/Plancard";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { Toggle } from "../components/Toggle";
import { useNavigate } from "react-router-dom";

export default function Selectplan() {
	const navigate = useNavigate();
	const [checked, setChecked] = React.useState(false);
	const [formData, setFromData] = React.useState({});

	function logState(state) {
		setChecked((state) => !state);
		console.log(formData);
	}

	function goBackButton() {
		navigate("/multi-step-form-react");
	}
	function nextStp() {
		navigate("/multi-step-form-react/addons");
	}

	React.useEffect(() => {
		const items = JSON.parse(localStorage.getItem("name"));
		items.monthly = checked;
		localStorage.setItem("name", JSON.stringify(items));
	}, [checked]);
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
						cardPrice={!checked ? "$9/mo" : "$90/yr"}
						freeMonths={!checked ? "" : "2 months free"}
						id="arcade"
					/>
					<Plancard
						src={advanced}
						cardName="Advanced"
						cardPrice={!checked ? "$12/mo" : "$120/yr"}
						freeMonths={!checked ? "" : "2 months free"}
						id="advanced"
					/>
					<Plancard
						src={pro}
						cardName="Pro"
						cardPrice={!checked ? "$15/mo" : "$150/yr"}
						freeMonths={!checked ? "" : "2 months free"}
						id="pro"
					/>
				</div>
				<div className="lowerCheckbox">
					<p className="monthly">Monthly</p>
					<Toggle label="Toggle me" onClick={logState} />
					<p className="yearly">Yearly</p>
				</div>
				<div className="lowerButtons">
					<button onClick={goBackButton}>Go back!</button>
					<button className="nextStp" onClick={nextStp}>
						Next Step
					</button>
				</div>
			</div>
		</>
	);
}
