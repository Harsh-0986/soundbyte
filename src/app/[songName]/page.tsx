"use client";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
	const [songData, setSongData] = useState({ downloadUrl: [{ link: "" }] });
	const params: { songName: string } = useParams();
	const query = params.songName.trim().replaceAll("%20", "+");

	useEffect(() => {
		fetch(`https://saavn.me/search/songs?query=${query}&page=1&limit=2`)
			.then((response) => response.json())
			.then((data) => setSongData(data.data.results[0]));

		console.log(songData);
	}, [query]);

	return (
		<main className="grid md:mx-24 mx-8">
			<Header />
			<SearchBar />
			<video
				controls
				src={
					songData?.downloadUrl[songData?.downloadUrl.length - 1].link
				}
			/>
		</main>
	);
}
