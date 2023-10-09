import React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "./Card";

interface props {
	prefix?: string;
	data: any[];
}

const Carousel = (props: props) => {
	const { data } = props;
	let { prefix } = props;

	if (!prefix) prefix = "";

	return (
		<div className=" px-4 rounded-md overflow-x-scroll flex gap-2">
			{data.map((bit) => {
				return (
					<Card
						key={bit.id}
						link={bit.url}
						src={prefix + "/" + bit.name}
						image={bit.image[bit.image.length - 1].link}
						name={bit.name}
					/>
				);
				{
					/* <div key={bit.id} className="w-[200px] h-[300px]">
						<Link
							href={{
								pathname: prefix + "/" + bit.name,
								query: { src: bit.url },
							}}
							className="flex items-center justify-center flex-col"
							passHref
						>
							<Image
								height={300}
								width={300}
								src={bit?.image[bit.image.length - 1]?.link}
								alt={bit.name}
							/>
							<span className="mt-4 cursor-pointer text-slate-300 hover:text-slate-500 block text-center font-bold text-2xl">
								{bit.name.replaceAll("&amp;", "&").slice(0, 20)}
								{bit.name.length > 20 && "..."}
							</span>
						</Link>
						</div> 
						*/
				}
			})}
		</div>
	);
};

export default Carousel;
