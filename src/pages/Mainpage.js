import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mainpage(props) {
	const navigate = useNavigate();
	const [formError, setFormErrors] = React.useState({});
	const [formData, setFromData] = React.useState({
		firstName: "",
		emailAddres: "",
		phoneNumber: "",
		isValid: false,
	});

	function nextStep(event) {
		event.preventDefault();
		formValidation();
	}

	function inputValues(e) {
		setFromData((prevFromData) => {
			return {
				...prevFromData,
				[e.target.name]: e.target.value,
			};
		});
	}
	function formValidation() {
		let err = {};
		const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		if (formData.firstName === "") {
			err.nameError = "This field is required";
		}
		if (formData.emailAddres === "") {
			err.emailError = `This field is required`;
		} else if (!formData.emailAddres.match(regEx)) {
			err.emailError = `Valid email format`;
		}
		if (formData.phoneNumber === "") {
			err.phoneError = "This field is required";
		}
		setFormErrors({ ...err });

		if (
			formData.firstName.length > 0 &&
			formData.emailAddres.length > 0 &&
			formData.phoneNumber > 0 &&
			formData.emailAddres.match(regEx)
		) {
			navigate("/multi-step-form-react/select");
		}
	}

	return (
		<div className="rightContent">
			<h1>Personal info</h1>
			<p>Please provide your name,email address, and phone number</p>
			<div className="form">
				<form
					onSubmit={(event) => {
						nextStep(event);
					}}
				>
					<label htmlFor="name">
						Name:
						<span className="error">{formError.nameError}</span>
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
						<span className="error">{formError.emailError}</span>
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
						<span className="error">{formError.phoneError}</span>
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
