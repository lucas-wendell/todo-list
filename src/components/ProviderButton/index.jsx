import React from "react";
import P from "prop-types";
import { Button } from "./styles";

export const ProviderButton = ({ children, onClick }) => {
	return <Button onClick={onClick}>{children}</Button>;
};

ProviderButton.propTypes = {
	children: P.node,
	onClick: P.func,
};
