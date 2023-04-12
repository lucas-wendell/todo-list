import React, { useContext } from "react";
import {
	ButtonContainer,
	Container,
	Heading,
	Paragraph,
	TextContainer,
} from "./styles";

import { ProviderButton } from "../ProviderButton";
import { DetailForm } from "../DetailForm";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../authContext";

export const FormButtonContainer = () => {
	const { logInWithGitHub, logInWithGoogle, logInWithTwitter } =
		useContext(AuthContext);

	return (
		<Container>
			<TextContainer>
				<Heading>agent login</Heading>
				<Paragraph>
					Hey, Enter your details to get sign in to your account
				</Paragraph>
			</TextContainer>
			<ButtonContainer>
				<ProviderButton onClick={logInWithGoogle}>
					<FcGoogle />
					Google
				</ProviderButton>
				<ProviderButton onClick={logInWithGitHub}>
					<FaGithub />
					Github
				</ProviderButton>
				<ProviderButton onClick={logInWithTwitter}>
					<FaTwitter />
					Twitter
				</ProviderButton>
			</ButtonContainer>
			<DetailForm />
		</Container>
	);
};
