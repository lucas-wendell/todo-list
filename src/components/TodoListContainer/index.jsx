import React from "react";
import { Container } from "./styles";

import { Header } from "../Header";
import { TasksContainer } from "../TasksContainer";

export const TodoListContainer = () => {
	return (
		<Container>
			<Header />
			<TasksContainer />
		</Container>
	);
};
