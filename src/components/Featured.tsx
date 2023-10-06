"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedSong {
	album: { id: string; name: string; url: string };
	duration: string;
	explicitContent: string;
	featuredArtists: [string];
	id: string;
	image: [{ quality: string; link: string }];
	label: string;
	language: string;
	name: string;
	playCount: string;
	primaryArtists: [
		id: string,
		name: string,
		url: string,
		role: string,
		type: string,
		image: [{ quality: string; link: string }]
	];
	releaseDate: string;
	type: string;
	url: string;
	year: string;
}

const Featured = () => {
	const [featuredSongs, setFeaturedSongs] = useState<
		FeaturedSong[] | void | null
	>(null);

	useEffect(() => {
		async function setSongs() {
			const data = await getFeaturedSongs();
			console.log(data);
			setFeaturedSongs(data);
		}

		setSongs();
	}, []);

	async function getFeaturedSongs(): FeaturedSong[] | void {
		const url = `https://saavn.me/modules?language=hindi,english`;

		const response = await fetch(url);
		const data = await response.json();
		return data.data.trending.songs;

		// fetch(url)
		//	.then((response) => response.json())
		//	.then((data) => {
		//		return data.data.trending.songs;
		//	});
	}

	if (!featuredSongs) return <div>Loading...</div>;

	return (
		<>
			{" "}
			<h3 className="text-4xl font-semibold my-4">Featured Songs</h3>
			<hr className="w-full font-semibold" />
			<section className="md:flex grid grid-cols-2 self-center items-center justify-center gap-2 mt-2">
				{featuredSongs.map((song) => {
					return (
						<div
							key={song.id}
							className="flex items-center justify-center flex-col"
						>
							<Link
								href={{
									pathname: "/" + song.name, // Replace with path of your page component
									query: { src: song.url },
								}}
								passHref
							>
								<Image
									height={250}
									width={250}
									src={
										song?.image[song.image.length - 1]?.link
									}
									alt={song.name}
								/>
								<span className="mt-4 cursor-pointer text-slate-300 hover:text-slate-500 block text-center font-bold text-2xl">
									{song.name
										.replaceAll("&amp;", "&")
										.slice(0, 20)}
									{song.name.length > 20 && "..."}
								</span>
							</Link>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Featured;
