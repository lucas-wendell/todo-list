import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, ImageContainer } from "./styles";
import * as theme from "../../styles/theme";
import { LoginForm } from "../../components/LoginForm";

export const Login = () => {
	return (
		<ThemeProvider theme={theme.dark}>
			<Container>
				<LoginForm />
				<ImageContainer />
			</Container>
		</ThemeProvider>
	);
};
