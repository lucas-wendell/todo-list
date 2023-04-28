import React from "react";
import P from "prop-types";
import { Button } from "./styles";

export const SubmitButton = ({ children }) => {
	return <Button>{children}</Button>;
};

SubmitButton.propTypes = {
	children: P.node.isRequired,
};
