import { useState } from "react";

export const Toggle = ({ label, toggled, onClick }) => {
	const [isToggled, toggle] = useState(toggled);

	const callback = () => {
		toggle(!isToggled);
		onClick(!isToggled);
		/* 	console.log(isToggled); */
	};

	return (
		<label>
			<input
				type="checkbox"
				defaultChecked={isToggled}
				onClick={callback}
			/>
			<span />
		</label>
	);
};
