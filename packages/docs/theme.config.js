import Image from "next/image";
import Logo from "./components/Logo";

const config = {
	repository: "https://github.com/oszlanyikornel/crudel",
	docsRepository: "https://github.com/oszlanyikornel/crudel",
	branch: "master",
	path: "/",
	titleSuffix: " – Crudel",
	nextLinks: true,
	prevLinks: true,
	search: true,
	customSearch: null,
	darkMode: true,
	footer: true,
	footerText: `MIT ${new Date().getFullYear()} © Oszlányi Kornél.`,
	footerEditOnGitHubLink: false,
	logo: (
		<>
			<Logo width={40} height={40} />
			<span style={{ marginLeft: 20, fontWeight: 500, fontSize: 20 }}>
				Crudel
			</span>
		</>
	),
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Crudel: React CRUD hooks" />
			<meta name="og:title" content="Crudel: React CRUD hooks" />
			<link rel="icon" type="image/ico" href="favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</>
	),
};

export default config;
