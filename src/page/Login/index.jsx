import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, ImageContainer } from "./styles";
import * as theme from "../../styles/theme";

export const Login = () => {
	return (
		<ThemeProvider theme={theme.dark}>
			<Container>
				<ImageContainer />
			</Container>
		</ThemeProvider>
	);
};
