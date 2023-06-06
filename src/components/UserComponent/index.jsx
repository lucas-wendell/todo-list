import React, { useContext, useState } from "react";
import P from "prop-types";

import { Container, ProfileContainer, TextContainer } from "./styles";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";

import { AuthContext } from "../../contexts/authContext";

export const UserComponent = ({ name, profilePicture, email }) => {
	const { logOut } = useContext(AuthContext);
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(() => true);
	};

	return (
		<Container>
			<ProfileContainer>
				<div className="buttonDiv">
					<button onClick={logOut} title="Log Out" aria-label="Log Out">
						<AiOutlineLogout size="2rem" />
					</button>
				</div>
				{imageError ? (
					<AiOutlineUser size="2rem" className="onErrorIcon" />
				) : (
					<img
						src={profilePicture}
						alt="user-profile"
						onError={handleImageError}
					/>
				)}
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
