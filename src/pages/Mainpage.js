import React from "react";

import { Link } from "react-router-dom";
export default function Mainpage(props) {
	const [formData, setFromData] = React.useState({
		firstName: "",
		emailAddres: "",
		phoneNumber: "",
		isValid: true,
	});

	function nextStep(e) {
		e.preventDefault();
	}

	function inputValues(e) {
		setFromData((prevFromData) => {
			return {
				...prevFromData,
				[e.target.name]: e.target.value,
			};
		});
	}
	return (
		<div className="rightContent">
			<h1>Personal info</h1>
			<p>Please provide your name,email address, and phone number</p>
			<div className="form">
				<form
					onSubmit={(e) => {
						nextStep(e);
					}}
				>
					<label htmlFor="name">
						Name:
						<span className="error">{}</span>
						<input
							type="text"
							placeholder="e.g Stephen King"
							name="firstName"
							onChange={inputValues}
							value={formData.firstName}
						/>
					</label>
					<label htmlFor="email">
						Email address
						<span className="error"></span>
						<input
							type="email"
							placeholder="e.g stephenking@lorem.com"
							name="emailAddres"
							onChange={inputValues}
							value={formData.emailAddres}
						/>
					</label>
					<label htmlFor="phoneNumber">
						Phone Number:
						<span className="error"></span>
						<input
							type="number"
							placeholder="e.g +1 234 567 890"
							name="phoneNumber"
							onChange={inputValues}
							value={formData.phoneNumber}
						/>
					</label>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
