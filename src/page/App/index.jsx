import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Container, ImageContainer } from "./styles";

import { ThemeProvider } from "styled-components";
import * as theme from "../../styles/theme";
import { TodoListContainer } from "../../components/TodoListContainer";

export const Home = () => {
	const navigate = useNavigate();
	const uid = localStorage.getItem("uid");

	useEffect(() => {
		if (uid === "" || !uid) {
			navigate("/login");
			return;
		}
	});

	return (
		<ThemeProvider theme={theme.dark}>
			<Container>
				<TodoListContainer />
				<ImageContainer />
			</Container>
		</ThemeProvider>
	);
};
