import React from "react";

import { Container } from "./styles";
import { BsFillSunFill } from "react-icons/bs";

export const Nav = () => {
	return (
		<Container>
			<h1 className="heading">TODO</h1>
			<BsFillSunFill size="1.5rem" />
		</Container>
	);
};
