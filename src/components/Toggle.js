import { React } from "react";

export const Toggle = ({ label, toggled, onClick }) => {
	const [isToggled, toggle] = React.useState(toggled);

	const callback = () => {
		toggle(!isToggled);
		onClick(!isToggled);
	};

	return (
		<label>
			<input
				type="checkbox"
				defaultChecked={isToggled}
				onClick={callback}
			/>
			<span />
			<strong>{label}</strong>
		</label>
	);
};
