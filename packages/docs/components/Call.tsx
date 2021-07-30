import React, { FC } from "react";

const Call: FC<{ emoji: string }> = ({ children, emoji }) => {
	return (
		<div
			style={{
				width: "100%",
				padding: "18px 30px",
				margin: "30px 0",
				backgroundColor: "rgba(64, 150, 254, 0.1)",
				borderRadius: 10,
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
			className="dark:white"
		>
			<div style={{ marginRight: 12 }}>{emoji}</div>
			<div>{children}</div>
		</div>
	);
};

export default Call;
