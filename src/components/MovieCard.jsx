import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
export default function MovieCard(props) {
	const { movie } = props; // destructuring the movie prop from the props object

	const { isFavourite, addToFavourites, removeFromFavourites } =
		useMovieContext();

	const favourite = isFavourite(movie.id);

	const onFavouriteClicked = (event) => {
		// Do not auto-refresh the page when event is fired/action
		event.preventDefault();
		if (favourite) {
			removeFromFavourites(movie.id);
		} else {
			addToFavourites(movie);
		}
	};

	/* 🤍 */
	// Rendering the movie card with movie data and a favourite button
	return (
		<div className="movie-card">
			<div className="movie-poster">
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className="movie-overlay">
					<p className="movie-description">{movie.overview}</p>
					<button
						className={`favourite-btn ${
							favourite ? "active " : ""
						}`}
						onClick={onFavouriteClicked}
					>
						<i className="fa-solid fa-heart"></i>
					</button>
				</div>
			</div>
			<div className="movie-info">
				<h3>{movie.title}</h3>
				<p>{movie.release_date?.split("-")[0]}</p>
			</div>
		</div>
	);
}
