import React from "react";
import { Form } from "react-router-dom";
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
				<button>Submit</button>
			</Form>
		</div>
	);
}
