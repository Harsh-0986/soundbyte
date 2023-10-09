import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Featured from "@/components/Featured";

export default function Home() {
	return (
		<main className="overflow mx-8 md:mx-24">
			<Header />
			{/*			<SearchBar /> */}
			<Featured />
		</main>
	);
}
