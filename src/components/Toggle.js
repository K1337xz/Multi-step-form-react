import { useState } from "react";

export const Toggle = ({ label, toggled, onClick }) => {
	const [isToggled, toggle] = useState(toggled);

	const callback = () => {
		toggle(!isToggled);
		onClick(!isToggled);
		/* 	console.log(isToggled); */
	};

	return (
		<label htmlFor="checkMonthly" className="customCheckbox">
			<input
				type="checkbox"
				defaultChecked={isToggled}
				onClick={callback}
				id="checkMonthly"
			/>
			<span className="checkSpan" />
		</label>
	);
};
