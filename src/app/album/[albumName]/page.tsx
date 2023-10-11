"use client";

import Header from "@/components/Header";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";

const Page = () => {
	const { albumName: string } = useParams();
	const searchParams = useSearchParams();
	const src = searchParams.get("src");

	function getAlbum() {}

	return (
		<main className="grid md:mx-24 mx-8">
			<Header />
			{src}
		</main>
	);
};

export default Page;
