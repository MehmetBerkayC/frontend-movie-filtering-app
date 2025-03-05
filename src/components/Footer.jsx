import React from "react";
import MediaLink from "./MediaLink";
import "../css/Footer.css";

export default function Footer() {
	return (
		<footer className="footer-content">
			<p>Made to practice.</p>
			<div className="media-links-container">
				<MediaLink
					href="https://mehmetberkaycoruk.netlify.app"
					content="MehmetBerkayC"
					icon={<i class="fa-solid fa-globe"></i>}
				/>
				<MediaLink
					href="https://github.com/MehmetBerkayC"
					content="Github"
					icon={<i class="fa-brands fa-github"></i>}
				/>
			</div>
		</footer>
	);
}
