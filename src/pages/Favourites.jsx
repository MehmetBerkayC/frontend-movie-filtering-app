import React from "react";
import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import FavouriteStats from "../components/FavouriteStats";

export default function Favourites() {
	const { favourites } = useMovieContext();

	if (favourites) {
		return (
			<div className="favourites-filled">
				<div className="favourites-label">
					<h2 className="favourites">Your Favourite Movies</h2>
					<FavouriteStats favourites={favourites} />
				</div>
				<div className="movies-grid">
					{favourites.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className="favourites-empty">
				<h2>No Favourites Yet</h2>
				<p>Add some movies to your favourites to see here...</p>
			</div>
		);
	}
}
