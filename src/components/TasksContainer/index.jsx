import React from "react";

import { Container } from "./styles";
import { CommandBar } from "../CommandBar";
import { Task } from "../Task";

export const TasksContainer = () => {
	return (
		<Container>
			<Task />
			<Task />
			<CommandBar />
		</Container>
	);
};
