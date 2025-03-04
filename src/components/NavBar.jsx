import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function NavBar() {
	return (
		<div className="navbar">
			<div className="navbar-brand">
				<Link to={"/"}>favours</Link>
			</div>
			<div className="navbar-links">
				<Link to={"/"} className="nav-link">
					Home
				</Link>
				<Link to={"/favourites"} className="nav-link">
					Favourites
				</Link>
			</div>
		</div>
	);
}
