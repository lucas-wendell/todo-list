import React, { useContext, useEffect, useRef } from "react";
import * as themes from "../../styles/theme";

import { useNavigate } from "react-router-dom";
import { Container, ImageContainer } from "./styles";

import { ThemeProvider } from "styled-components";
import { TodoListContainer } from "../../components/TodoListContainer";
import { ThemeContext } from "../../contexts/themeContext";

import Cookies from "js-cookie";
import { Modal } from "../../components/Modal";
import { TasksProvider } from "../../contexts/taskContext";

export const Home = () => {
	const navigate = useNavigate();
	const { theme } = useContext(ThemeContext);
	const userRef = useRef(Cookies.get("user"));

	useEffect(() => {
		if (userRef.current === "" || !userRef.current) {
			navigate("/login");
			return;
		}

		userRef.current = JSON.parse(Cookies.get("user"));
	});

	return (
		<ThemeProvider theme={themes[theme]}>
			<TasksProvider>
				<Modal />
				<Container>
					<TodoListContainer />
					<ImageContainer />
				</Container>
			</TasksProvider>
		</ThemeProvider>
	);
};
