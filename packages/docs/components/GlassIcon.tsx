import React, { FC } from "react";

const GlassIcon: FC<{ w: number; h: number }> = ({ w, h }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={w}
			height={h}
			viewBox="0 0 123 103"
			fill="none"
		>
			<path
				fill="url(#Iconly/Glass/Graph__paint0_linear)"
				d="M86.667 47.833c0 22.553-18.281 40.834-40.834 40.834C23.281 88.667 5 70.386 5 47.833 5 25.285 23.281 7 45.833 7c22.553 0 40.834 18.285 40.834 40.833z"
			></path>
			<g filter="url(#Iconly/Glass/Graph__filter0_f)" opacity="0.5">
				<path
					fill="#E46800"
					d="M63.802 41.691c0 12.151-9.85 22-22 22s-22-9.849-22-22c0-12.148 9.85-22 22-22s22 9.852 22 22z"
				></path>
			</g>
			<g filter="url(#Iconly/Glass/Graph__filter1_b)">
				<path
					fill="#FFCBB9"
					fillOpacity="0.35"
					d="M19.999 60.835C19.999 38.282 38.28 20 60.832 20c22.553 0 40.834 18.281 40.834 40.834 0 22.548-18.281 40.833-40.834 40.833C38.28 101.668 20 83.383 20 60.835z"
				></path>
				<path
					stroke="url(#Iconly/Glass/Graph__paint1_linear)"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M60.832 19.501c-22.828 0-41.333 18.505-41.333 41.334 0 22.824 18.505 41.333 41.333 41.333 22.829 0 41.334-18.51 41.334-41.333 0-22.829-18.505-41.334-41.334-41.334z"
				></path>
			</g>
			<g filter="url(#Iconly/Glass/Graph__filter2_bd)">
				<path
					fill="url(#Iconly/Glass/Graph__paint2_linear)"
					d="M67.395 13.81a4.424 4.424 0 00-3.195.75 4.043 4.043 0 00-1.68 2.7l-.066.636-1.272 38.893a4.482 4.482 0 001.193 3.53 4.922 4.922 0 003.523 1.553l40.611 1.57a4.333 4.333 0 003.056-1.075 3.962 3.962 0 001.339-2.838 1.23 1.23 0 00.042-.41c-1.295-23.076-19.61-42.132-43.55-45.31z"
				></path>
			</g>
			<g filter="url(#Iconly/Glass/Graph__filter3_bd)">
				<circle
					cx="60"
					cy="62"
					r="7"
					fill="url(#Iconly/Glass/Graph__paint3_linear)"
				></circle>
				<circle
					cx="60"
					cy="62"
					r="6.8"
					stroke="url(#Iconly/Glass/Graph__paint4_linear)"
					strokeWidth="0.4"
				></circle>
			</g>
			<defs>
				<linearGradient
					id="Iconly/Glass/Graph__paint0_linear"
					x1="45.833"
					x2="45.833"
					y1="7"
					y2="88.667"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FFB37F"></stop>
					<stop offset="1" stopColor="#FF7B0D"></stop>
				</linearGradient>
				<linearGradient
					id="Iconly/Glass/Graph__paint1_linear"
					x1="101.904"
					x2="15.449"
					y1="102.223"
					y2="29"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity="0.4"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="Iconly/Glass/Graph__paint2_linear"
					x1="110.54"
					x2="22.627"
					y1="26.968"
					y2="14.391"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity="0.2"></stop>
					<stop offset="1" stopColor="#fff"></stop>
				</linearGradient>
				<linearGradient
					id="Iconly/Glass/Graph__paint3_linear"
					x1="66.007"
					x2="42.33"
					y1="57.528"
					y2="56.677"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0.2"></stop>
				</linearGradient>
				<linearGradient
					id="Iconly/Glass/Graph__paint4_linear"
					x1="55.228"
					x2="64.159"
					y1="56.631"
					y2="67.692"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#fff" stopOpacity="0.25"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<filter
					id="Iconly/Glass/Graph__filter0_f"
					width="82"
					height="82"
					x="0.802"
					y="0.691"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						result="effect1_foregroundBlur"
						stdDeviation="9.5"
					></feGaussianBlur>
				</filter>
				<filter
					id="Iconly/Glass/Graph__filter1_b"
					width="131.667"
					height="131.667"
					x="-5.001"
					y="-4.999"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feGaussianBlur
						in="BackgroundImage"
						stdDeviation="12"
					></feGaussianBlur>
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur"
					></feComposite>
					<feBlend
						in="SourceGraphic"
						in2="effect1_backgroundBlur"
						result="shape"
					></feBlend>
				</filter>
				<filter
					id="Iconly/Glass/Graph__filter2_bd"
					width="87.132"
					height="83.119"
					x="42.999"
					y="-1.656"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feGaussianBlur
						in="BackgroundImage"
						stdDeviation="7.5"
					></feGaussianBlur>
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur"
					></feComposite>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dx="-3" dy="5"></feOffset>
					<feGaussianBlur stdDeviation="5"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 0.52549 0 0 0 0 0.137255 0 0 0 0.3 0"></feColorMatrix>
					<feBlend
						in2="effect1_backgroundBlur"
						result="effect2_dropShadow"
					></feBlend>
					<feBlend
						in="SourceGraphic"
						in2="effect2_dropShadow"
						result="shape"
					></feBlend>
				</filter>
				<filter
					id="Iconly/Glass/Graph__filter3_bd"
					width="44"
					height="44"
					x="38"
					y="40"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
					<feGaussianBlur
						in="BackgroundImage"
						stdDeviation="7.5"
					></feGaussianBlur>
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur"
					></feComposite>
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					></feColorMatrix>
					<feOffset dx="5" dy="5"></feOffset>
					<feGaussianBlur stdDeviation="5"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 0.52549 0 0 0 0 0.137255 0 0 0 0.5 0"></feColorMatrix>
					<feBlend
						in2="effect1_backgroundBlur"
						result="effect2_dropShadow"
					></feBlend>
					<feBlend
						in="SourceGraphic"
						in2="effect2_dropShadow"
						result="shape"
					></feBlend>
				</filter>
			</defs>
		</svg>
	);
};

export default GlassIcon;
