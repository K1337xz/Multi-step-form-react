import React from "react";

export default function SideBar(props) {
	return (
		<div className="leftSideBar">
			<div className="sideBarContent">
				<div className="navWrapper">
					<div className="step">
						<div className={(props.stepNumber, props.active)}>
							<p>1</p>
						</div>
						<div className="stepContent">
							<p>Step 1</p>
							<p>Your Info</p>
						</div>
					</div>
					<div className="step">
						<div className={props.stepNumber}>
							<p>2</p>
						</div>
						<div className="stepContent">
							<p>Step 2</p>
							<p>Select plan</p>
						</div>
					</div>
					<div className="step">
						<div className={props.stepNumber}>
							<p>3</p>
						</div>
						<div className="stepContent">
							<p>Step 3</p>
							<p>Add-ons</p>
						</div>
					</div>
					<div className="step">
						<div className={props.stepNumber}>
							<p>4</p>
						</div>
						<div className="stepContent">
							<p>Step 4</p>
							<p>Your Info</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
