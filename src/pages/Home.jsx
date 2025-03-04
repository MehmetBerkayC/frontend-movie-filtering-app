import { React, useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

export default function Home() {
	const [searchQuery, setsearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// const moviess = [
	// 	{ id: 2, title: "The Godfather", release_date: "1972", url: "" },
	// 	{ id: 3, title: "Pulp Fiction", release_date: "1994", url: "" },
	// 	{
	// 		id: 4,
	// 		title: "Eternal Sunshine of the Spotless Mind",
	// 		release_date: "2004",
	// 		url: "",
	// 	},
	// 	{ id: 5, title: "Inception", release_date: "2010", url: "" },
	// 	{
	// 		id: 1,
	// 		title: "The Shawshank Redemption",
	// 		release_date: 1994,
	// 		url: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
	// 	},
	// 	{ id: 6, title: "Jonatham Wicky", release_date: "2015", url: "" },
	// ];

	const handleSearch = async (event) => {
		event.preventDefault();
		if (!searchQuery.trim()) return; // removes spaces -> to not count spaces like "   Rambo"
		if (loading) return;

		setLoading(true);
		try {
			const searchResults = await searchMovies(searchQuery);
			setMovies(searchResults);
			setError(null);
		} catch (error) {
			console.log(error);
			setError("Failed to search movies...");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const loadPopularMovies = async () => {
			try {
				setLoading(true);
				const popularMovies = await getPopularMovies();
				// console.log(popularMovies);
				setMovies(popularMovies);
			} catch (error) {
				setError("Failed to get popular movies: ", error);
			} finally {
				setLoading(false);
			}
		};

		loadPopularMovies();
	}, []);

	return (
		<div className="Home">
			<form onSubmit={handleSearch} className="search-form">
				<input
					className="search-input"
					type="text"
					placeholder="Search for a movie."
					value={searchQuery}
					onChange={(e) => setsearchQuery(e.target.value)}
				></input>
				<button type="submit" className="search-button">
					Search
				</button>
			</form>
			{error && <div className="error-message">{error}</div>}
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="movies-grid">
					{movies.map((movie) => {
						if (
							movie.title
								.toLowerCase()
								.includes(searchQuery.toLowerCase())
						)
							return <MovieCard key={movie.id} movie={movie} />;
					})}
				</div>
			)}
		</div>
	);
}
