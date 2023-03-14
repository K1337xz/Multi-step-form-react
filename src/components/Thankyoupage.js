import React from "react";
import thanku from "../assets/images/icon-thank-you.svg";

export default function Thankyoupage() {
	return (
		<div className="rightContent">
			<div className="final">
				<div className="topImg">
					<img className="img" alt="thank-you-image" src={thanku} />
				</div>
				<div className="finalContent">
					<h1>Thank you!</h1>
					<p>
						Thanks for confirming your subscirption! We hope you
						have fun using our platform. If you need support, please
						feel free to email us at support@loremipsuum.com
					</p>
				</div>
			</div>
		</div>
	);
}
