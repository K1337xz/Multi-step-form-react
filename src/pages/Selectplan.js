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
	const [activeCard, setActiveCard] = React.useState({
		arcade: false,
		advanced: false,
		pro: false,
		monthly: false,
	});

	function logState(state) {
		setChecked((state) => !state);
		console.log(state);
	}

	function goBackButton() {
		navigate("/multi-step-form-react");
	}
	function nextStp() {
		navigate("/multi-step-form-react/addons");
	}

	React.useEffect(() => {
		const items = JSON.parse(localStorage.getItem("name"));
		if (items.selectedPlan === "arcade") {
			setActiveCard((prev) => {
				return {
					...prev,
					arcade: !prev.arcade,
				};
			});
		}
		if (items.selectedPlan === "advanced") {
			setActiveCard((prev) => {
				return {
					...prev,
					advanced: !prev.advanced,
				};
			});
		}
		if (items.selectedPlan === "pro") {
			setActiveCard((prev) => {
				return {
					...prev,
					pro: !prev.pro,
				};
			});
		}
	}, []);

	React.useEffect(() => {
		const items = JSON.parse(localStorage.getItem("name"));
		items.monthly = checked;
		if (items.monthly) {
			if (items.selectedPlan === "arcade") {
				items.planPrice = 90;
				localStorage.setItem("name", JSON.stringify(items));
			}
			if (items.selectedPlan === "advanced") {
				items.planPrice = 120;
				localStorage.setItem("name", JSON.stringify(items));
			}
			if (items.selectedPlan === "pro") {
				items.planPrice = 150;
				localStorage.setItem("name", JSON.stringify(items));
			}
		}
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
						cardClass={activeCard.arcade ? "card active" : "card"}
					/>
					<Plancard
						src={advanced}
						cardName="Advanced"
						cardPrice={!checked ? "$12/mo" : "$120/yr"}
						freeMonths={!checked ? "" : "2 months free"}
						id="advanced"
						cardClass={activeCard.advanced ? "card active" : "card"}
					/>
					<Plancard
						src={pro}
						cardName="Pro"
						cardPrice={!checked ? "$15/mo" : "$150/yr"}
						freeMonths={!checked ? "" : "2 months free"}
						id="pro"
						cardClass={activeCard.pro ? "card active" : "card"}
					/>
				</div>
				<div className="lowerCheckbox">
					<p className="monthly">Monthly</p>
					<Toggle label="Toggle me" onClick={logState} />
					<p className="yearly">Yearly</p>
				</div>
				<div className="lowerButtons">
					<button className="prevStp" onClick={goBackButton}>
						Go back!
					</button>
					<button className="nextStp" onClick={nextStp}>
						Next Step
					</button>
				</div>
			</div>
		</>
	);
}
