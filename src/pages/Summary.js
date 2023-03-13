import React from "react";
import Finishpage from "../components/Finishpage";
import SideBar from "../components/SideBar";

export default function Summary() {
	const [formData, setFormData] = React.useState({
		plan: "",
		billing: "",
		onlinePlan: false,
		largerPlan: false,
		profilePlan: false,
	});
	React.useEffect(() => {
		const items = JSON.parse(localStorage.getItem("name"));
		const addons = JSON.parse(localStorage.getItem("addons"));
		setFormData((prev) => {
			return {
				plan: items.selectedPlan,
				billing: items.monthly,
				planPrice: items.planPrice,
				onlinePlan: addons.online,
				largerPlan: addons.storage,
				profilePlan: addons.profile,
				onlinePrice: addons.onlinePrice,
				profilePrice: addons.profilePrice,
				storagePrice: addons.storagePrice,
			};
		});
	}, []);
	console.log(formData);
	return (
		<>
			<SideBar
				stepNumber="stepNumber"
				first="step"
				second="step"
				third="step"
				fourth="step active"
			/>
			<div className="rightContent">
				<h1>Finish up</h1>
				<p>Double check everything looks OK before confirming</p>
				<Finishpage
					selectedPlan={formData.plan}
					bilingPlan={formData.billing ? "Yearly" : "Monthly"}
					price={formData.planPrice}
					bill={formData.billing ? "yr" : "mo"}
					online={formData.onlinePlan ? "Online service" : ""}
					onlinePrice={
						formData.onlinePlan
							? `+$${formData.onlinePrice}/${
									formData.billing ? "yr" : "mo"
							  }`
							: ""
					}
					storagePrice={
						formData.largerPlan
							? `+$${formData.storagePrice}/${
									formData.billing ? "yr" : "mo"
							  }`
							: ""
					}
					profilePrice={
						formData.profilePlan
							? `+$${formData.profilePrice}/${
									formData.billing ? "yr" : "mo"
							  }`
							: ""
					}
					storage={formData.largerPlan ? "Larger storage" : ""}
					profile={formData.profilePlan ? "Customizable profile" : ""}
				/>
			</div>
		</>
	);
}
