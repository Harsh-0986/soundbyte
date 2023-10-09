import React from "react";
import Image from "next/image";
import Link from "next/link";

interface props {
	link: string;
	src: string;
	image: string;
	name: string;
}

const Card = (props: props) => {
	const { link, src, image, name } = props;
	return (
		<Link
			className="cursor-pointer"
			href={{
				pathname: src,
				query: { src: link },
			}}
			passHref
		>
			<div className="flex flex-col items-center justify-center gap-4 h-[25rem] min-w-[16rem] w-64 text-truncate">
				<Image src={image} alt={name} height={300} width={300} />
				<span className="text-xl font-semibold hover:text-slate-300">
					{name
						.replaceAll("&amp;", "&")
						.replaceAll("&quot;", '"')
						.slice(0, 20)}
					{name.length > 20 && "..."}
				</span>
			</div>
		</Link>
	);
};

export default Card;
