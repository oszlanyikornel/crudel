import { useRouter } from "next/router";

import styles from "./features.module.css";
import Image from "next/image";
import { FC } from "react";

const Feature: FC<{ text: string; icon: any }> = ({ text, icon }) => (
	<div className={styles.feature}>
		<div>{icon}</div>
		<h4 style={{ marginLeft: 20 }}>{text}</h4>
	</div>
);

const Features = () => {
	const mult = 1;
	return (
		<div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
			<p
				className="text-2xl mb-16 text-gray-600 md:!text-2xl sub"
				style={{ marginBottom: 54 }}
			>
				React CRUD hooks built on top of swr.
			</p>
			<div className={styles.features}>
				<div>
					<Feature
						text="Lightweight"
						icon={
							<embed
								className={styles.glassIcon}
								height={37 * mult}
								width={38 * mult}
								src="/Graph.svg"
							/>
						}
					/>
					<Feature
						text="Simple"
						icon={
							<embed
								className={styles.glassIcon}
								height={37 * mult}
								width={38 * mult}
								src="/Tick.svg"
							/>
						}
					/>
				</div>
				<div>
					<Feature
						text="Fetching"
						icon={
							<embed
								className={styles.glassIcon}
								height={37 * mult}
								width={38 * mult}
								src="/Arrow.svg"
							/>
						}
					/>
					<Feature
						text="Manipulation"
						icon={
							<embed
								className={styles.glassIcon}
								height={37 * mult}
								width={38 * mult}
								src="/Edit.svg"
							/>
						}
					/>
				</div>
				<div>
					<Feature
						text="Customizable"
						icon={
							<embed
								className={styles.glassIcon}
								height={37 * mult}
								width={38 * mult}
								src="/Setting.svg"
							/>
						}
					/>
					<Feature
						text="TypeSafe"
						icon={
							<embed
								className={styles.glassIcon}
								height={37 * mult}
								width={38 * mult}
								src="/Shield.svg"
							/>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Features;
