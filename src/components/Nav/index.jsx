/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import Cookie from "js-cookie";

import { Container } from "./styles";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { UserComponent } from "../UserComponent";
import { AiOutlineLogout } from "react-icons/ai";

import { ThemeContext } from "../../contexts/themeContext";
import { AuthContext } from "../../contexts/authContext";

export const Nav = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { logOut } = useContext(AuthContext);

	const user = Cookie.get("user") ? JSON.parse(Cookie.get("user")) : {};
	const { photoURL, displayName, email } = user;

	return (
		<Container>
			<UserComponent
				name={displayName}
				profilePicture={photoURL}
				email={email}
			/>

			<div className="iconContainer">
				<button
					onClick={logOut}
					title="Log Out"
					aria-label="Log Out"
					className="logOutButton"
				>
					<AiOutlineLogout size="1.5rem" />
				</button>
				<button
					onClick={toggleTheme}
					title="Toggle Theme"
					aria-label="Toggle Theme"
				>
					{theme === "dark" ? (
						<BsFillSunFill size="1.5rem" />
					) : (
						<BsFillMoonFill size="1.5rem" />
					)}
				</button>
			</div>
		</Container>
	);
};
