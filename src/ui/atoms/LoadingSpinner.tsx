export const LoadingSpinner = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="m-auto block bg-white"
			width="214px"
			height="214px"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx="50"
				cy="50"
				fill="none"
				stroke="#7be7e9"
				strokeWidth="3"
				r="8"
				strokeDasharray="37.69911184307752 14.566370614359172"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="1.4925373134328357s"
					values="0 50 50;360 50 50"
					keyTimes="0;1"
				></animateTransform>
			</circle>
		</svg>
	);
};
