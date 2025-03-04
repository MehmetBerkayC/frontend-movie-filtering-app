import React from "react";

export default function FavouriteStats(props) {
	const { favourites } = props;
	// console.log(favourites);
	return (
		<div className="favourite-stats">
			<div>
				<p>Favourited Movies Count: {favourites.length}</p>
			</div>
		</div>
	);
}
