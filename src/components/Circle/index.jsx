import React from "react";
import P from "prop-types";

import { Container } from "./styles";
import { BsCheck } from "react-icons/bs";

export const Circle = ({ isActive = false, onClick }) => {
	const onClickFunction = onClick ? onClick : () => {};

	return (
		<Container isActive={isActive} onClick={onClickFunction}>
			{isActive && <BsCheck size="1.2rem" />}
		</Container>
	);
};

Circle.propTypes = {
	isActive: P.bool,
	onClick: P.func,
};
