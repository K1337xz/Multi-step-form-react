import React from "react";

export default function Plancard(props) {
	function toggleClick(e) {
		const allElements = document.querySelectorAll(".card");
		for (let i = 0; i < allElements.length; i++) {
			if (allElements[i].classList.contains("active")) {
				allElements[i].classList.remove("active");
			}
			e.currentTarget.classList.add("active");
		}
	}
	return (
		<div
			className="card"
			onClick={(e) => {
				toggleClick(e);
			}}
			id={props.id}
		>
			<div className="cardImage">
				<img src={props.src} className="image" alt={props.altText} />
			</div>
			<div className="cardContent">
				<h2>{props.cardName}</h2>
				<p>{props.cardPrice}</p>
			</div>
		</div>
	);
}
