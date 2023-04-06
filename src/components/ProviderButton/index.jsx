import React from "react";
import P from "prop-types";
import { Button } from "./styles";

export const ProviderButton = ({ children }) => {
	return <Button>{children}</Button>;
};

ProviderButton.propTypes = {
	children: P.node,
};
