import Link from "../../node_modules/next/link";

const Header = () => {
	return (
		<header className="md:my-8 my-4">
			<Link href={"/"}>
				<span className="cursor-pointer text-xl font-semibold">
					SoundByte
				</span>
			</Link>
		</header>
	);
};

export default Header;
