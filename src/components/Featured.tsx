"use client";

import { useEffect, useState } from "react";
import Carousel from "./Carousel";

interface Featured {
	songs: FeaturedSong[];
	albums: FeaturedAlbum[];
}

interface FeaturedAlbum {
	artists: [
		{
			id: string;
			name: string;
			url: string;
			image: { quality: string; link: string };
		}
	];
	explicitContent: string;
	featuredArtists: [];
	id: string;
	image: [{ quality: string; link: string }];
	language: string;
	name: string;
	playCount: string;
	primaryArtists: [];
	releaseDate: string;
	songCount: string;
	type: string;
	url: string;
	year: string;
}

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
	const [featured, setFeatured] = useState<Featured | void | null>(null);

	useEffect(() => {
		async function setSongs() {
			const data = await getFeatured();
			console.log(data);
			setFeatured(data);
		}

		setSongs();
	}, []);

	async function getFeatured() {
		const url = `https://saavn.me/modules?language=hindi,english`;

		const response = await fetch(url);
		const data = await response.json();
		return data.data.trending;

		// fetch(url)
		//	.then((response) => response.json())
		//	.then((data) => {
		//		return data.data.trending.songs;
		//	});
	}

	if (!featured) return <div>Loading...</div>;

	return (
		<section>
			{/* <h3 className="text-4xl font-semibold mx-auto my-4 w-full md:w-[60%]">
				Trending Songs
				</h3> */}
			<Carousel data={featured.songs} />
			<hr className="w-full font-semibold mx-auto my-6 bg-slate-500" />
			<Carousel data={featured.albums} prefix={"/album"} />
		</section>
	);
};

export default Featured;
