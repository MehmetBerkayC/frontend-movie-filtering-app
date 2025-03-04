import { createContext, useState, useContext, useEffect, useRef } from "react";

const MovieContext = createContext(null);

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
	const [favourites, setFavourites] = useState([]);
	const isFirstRender = useRef(true);

	const addToFavourites = (movie) => {
		setFavourites((prev) => [...prev, movie]);
	};

	const removeFromFavourites = (movieId) => {
		// Do not include movies that id's match -> filter out
		setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
	};

	const isFavourite = (movieId) => {
		return favourites.some((movie) => movie.id === movieId);
	};

	// These are the functions that any child will be able to use
	const value = {
		favourites,
		addToFavourites,
		removeFromFavourites,
		isFavourite,
	};

	useEffect(() => {
		const storedFavourites = localStorage.getItem("favouriteMovies");
		if (storedFavourites) {
			setFavourites(JSON.parse(storedFavourites));
		}
		// console.log("Fetching local storage:", JSON.parse(storedFavourites));
	}, []);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return; // Don't save to local storage on the first render.
		}

		localStorage.setItem("favouriteMovies", JSON.stringify(favourites));
		// console.log("Saved to local storage"); // This is just for debugging purposes. In a real-world application, you would want to log this information in a more secure manner.
	}, [favourites]);

	return (
		<MovieContext.Provider value={value}>{children}</MovieContext.Provider>
	);
};
