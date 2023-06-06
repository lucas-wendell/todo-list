import React from "react";
import * as theme from "../../styles/theme";

import { ThemeProvider } from "styled-components";
import { Container, ImageContainer } from "../styles";
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
