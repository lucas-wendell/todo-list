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
					<span>SPANS</span>Ola mundo 1
				</ProviderButton>
				<ProviderButton>Ola mundo 2</ProviderButton>
			</ButtonContainer>
			<DetailForm />
		</Container>
	);
};
