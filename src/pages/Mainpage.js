import React from "react";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Mainpage() {
	function heh() {
		console.log("sj");
	}
	return (
		<div className="rightContent">
			<h1>Personal info</h1>
			<p>Please provide your name,email address, and phone number</p>
			<div className="form">
				<Form
					method=""
					action="/multi-step-form-react/select"
					onSubmit={heh}
				>
					<label htmlFor="name">
						<input type="name" placeholder="e.g Stephen King" />
					</label>
					<button>Submit</button>
				</Form>
			</div>
		</div>
	);
}
