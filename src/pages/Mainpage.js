import React from "react";

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
				<form action="/select" onSubmit={heh} method="get">
					<label htmlFor="name">
						Name:
						<input
							type="text"
							placeholder="e.g Stephen King"
							name="name"
						/>
					</label>
					<label htmlFor="email">
						Email address
						<input
							type="email"
							placeholder="e.g stephenking@lorem.com"
							name="emailAddres"
						/>
					</label>
					<label htmlFor="phoneNumber">
						Phone Number:
						<input
							type="number"
							placeholder="e.g +1 234 567 890"
							name="phoneNumber"
						/>
					</label>
					<button>Submit</button>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
