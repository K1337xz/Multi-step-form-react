import React from "react";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
export default function FirstPageForm() {
	function heh() {
		console.log("el");
	}
	return (
		<div className="formWrapper">
			<Form method="post" action="/select" onSubmit={heh}>
				<label htmlFor="name">
					<input type="name" placeholder="e.g Stephen King" />
				</label>
			</Form>
			<div>
				<Link to="/select">13123</Link>
			</div>
		</div>
	);
}
