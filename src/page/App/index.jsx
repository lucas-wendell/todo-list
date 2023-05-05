import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Container, ImageContainer } from "./styles";

import { ThemeProvider } from "styled-components";
import * as theme from "../../styles/theme";
import { TodoListContainer } from "../../components/TodoListContainer";
import { TasksProvider } from "../../taskContext";

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
			<TasksProvider>
				<Container>
					<TodoListContainer />
					<ImageContainer />
				</Container>
			</TasksProvider>
		</ThemeProvider>
	);
};
