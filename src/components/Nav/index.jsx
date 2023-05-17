/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";

import { Container } from "./styles";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../themeContext";
import { UserComponent } from "../UserComponent";
import Cookie from "js-cookie";

export const Nav = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const user = Cookie.get("user") ? JSON.parse(Cookie.get("user")) : {};
	const { photoURL, displayName, email } = user;

	return (
		<Container>
			<UserComponent
				name={displayName}
				profilePicture={photoURL}
				email={email}
			/>

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
