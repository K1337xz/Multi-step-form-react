import React from "react";
import { Link } from "react-router-dom";
import Mainpage from "../pages/Mainpage";

export default function Finishpage(props) {
	return (
		<div className="finshWrapper">
			<div className="finishContent">
				<div className="topfinishContent">
					<div className="leftfinisContent">
						<h3>
							{props.selectedPlan}
							<span>({props.bilingPlan})</span>
						</h3>
						<span className="change">
							<Link to="/multi-step-form-react/">Change</Link>
						</span>
					</div>
					<p className="price">{props.price}</p>
				</div>
				<div className="services">
					<p>
						{props.online}
						<span>{props.onlinePrice}</span>
					</p>
					<p>
						{props.storage}
						<span>{props.storagePrice}</span>
					</p>
					<p>
						{props.profile}
						<span>{props.profilePrice}</span>
					</p>
				</div>
			</div>
			<div className="bottomFinishContent">
				<p>Total {props.totalBIlling}</p>
				<span className="totalPrice">{props.totalPrice}</span>
			</div>
		</div>
	);
}
