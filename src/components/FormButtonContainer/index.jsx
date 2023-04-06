import React from "react";

import {
	ButtonContainer,
	Container,
	Heading,
	Paragraph,
	TextContainer,
} from "./styles";
import { ProviderButton } from "../ProviderButton";
import { DetailForm } from "../DetailForm";
// import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const FormButtonContainer = () => {
	return (
		<Container>
			<TextContainer>
				<Heading>agent login</Heading>
				<Paragraph>
					Hey, Enter your details to get sign in to your account
				</Paragraph>
			</TextContainer>
			<ButtonContainer>
				<ProviderButton>
					<FcGoogle />
					Google
				</ProviderButton>
				<ProviderButton>
					<FaGithub />
					Github
				</ProviderButton>
				<ProviderButton>
					<FaTwitter />
					Twitter
				</ProviderButton>
			</ButtonContainer>
			<DetailForm />
		</Container>
	);
};
