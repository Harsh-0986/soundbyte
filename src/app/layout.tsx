import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "SoundByte",
	description:
		"Stream and download your favourite songs for free without any ads.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={"grid"}>
				{children}
				<footer className="bottom-2 absolute self-end text-xl text-white justify-self-center">
					Made with 💛 by{" "}
					<Link href="https://harshshah.codes">Harsh Shah</Link>
				</footer>
			</body>
		</html>
	);
}
