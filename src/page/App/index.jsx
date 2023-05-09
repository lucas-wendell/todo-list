import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Container, ImageContainer } from "./styles";

import { ThemeProvider } from "styled-components";
import * as themes from "../../styles/theme";
import { TodoListContainer } from "../../components/TodoListContainer";
import { TasksProvider } from "../../taskContext";
import { ThemeContext } from "../../themeContext";

export const Home = () => {
	const navigate = useNavigate();
	const { theme } = useContext(ThemeContext);
	const uid = localStorage.getItem("uid");

	useEffect(() => {
		if (uid === "" || !uid) {
			navigate("/login");
			return;
		}
	});

	return (
		<ThemeProvider theme={themes[theme]}>
			<TasksProvider>
				<Container>
					<TodoListContainer />
					<ImageContainer />
				</Container>
			</TasksProvider>
		</ThemeProvider>
	);
};
