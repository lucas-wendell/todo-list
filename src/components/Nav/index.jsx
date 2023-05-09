/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";

import { Container } from "./styles";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../themeContext";

export const Nav = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<Container>
			<h1 className="heading">TODO</h1>
			<div className="iconContainer" onClick={toggleTheme}>
				{theme === "dark" ? (
					<BsFillSunFill size="1.5rem" />
				) : (
					<BsFillMoonFill size="1.5rem" />
				)}
			</div>
		</Container>
	);
};
