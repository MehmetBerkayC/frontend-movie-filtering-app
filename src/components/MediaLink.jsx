import React from "react";

export default function MediaLink(props) {
	const { icon = "", href, content = "", target = "_blank" } = props;
	return (
		<a target={target} href={href}>
			{icon} {" " + content}
		</a>
	);
}
