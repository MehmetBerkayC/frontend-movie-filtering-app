const Base_URL = import.meta.env.VITE_BASE_URL;
const Api_Key = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async () => {
	// console.log(Base_URL, Api_Key);
	const response = await fetch(
		`${Base_URL}/movie/popular?api_key=${Api_Key}`
	);
	const data = await response.json();
	return data.results;
};

export const searchMovies = async (query) => {
	const response = await fetch(
		`${Base_URL}/search/movie?api_key=${Api_Key}&query=${encodeURIComponent(
			query
		)}`
	);
	const data = await response.json();
	return data.results;
};
