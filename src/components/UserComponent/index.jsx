import React, { useContext } from "react";
import P from "prop-types";

import { Container, ProfileContainer, TextContainer } from "./styles";
import { AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../../authContext";

export const UserComponent = ({ name, profilePicture, email }) => {
	const { logOut } = useContext(AuthContext);
	return (
		<Container>
			<ProfileContainer>
				<div className="buttonDiv">
					<button onClick={logOut} title="Log Out" aria-label="Log Out">
						<AiOutlineLogout size="2rem" />
					</button>
				</div>
				<img src={profilePicture} alt="user-profile" />
			</ProfileContainer>
			<TextContainer>
				<h1>{name}</h1>
				<p>{email}</p>
			</TextContainer>
		</Container>
	);
};

UserComponent.propTypes = {
	name: P.string,
	profilePicture: P.string,
	email: P.string,
};
