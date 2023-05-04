import React from "react";
import P from "prop-types";

import { Container } from "./styles";
import { BsCheck } from "react-icons/bs";

export const Circle = ({ isActive = false }) => {
	return (
		<Container isActive={isActive}>
			{isActive && <BsCheck size="1.2rem" />}
		</Container>
	);
};

Circle.propTypes = {
	isActive: P.bool,
};
