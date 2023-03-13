import React from "react";

export default function Addonsinp(props) {
	return (
		<div className={props.addonsClass}>
			<label htmlFor={props.for} className="checkboxAddons">
				<input
					type="checkbox"
					onChange={props.toggleChange}
					id={props.for}
					checked={props.checked}
					className={props.classChecked}
				/>
				<span className="checkSpanAddons"></span>
			</label>
			<div className="addonContent">
				<h3>{props.addonName}</h3>
				<p>{props.addonDescribe}</p>
			</div>
			<span>{props.addonPrice}</span>
		</div>
	);
}
