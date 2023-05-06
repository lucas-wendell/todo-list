import React, { useContext } from "react";

import { Container } from "./styles";
import { CommandBar } from "../CommandBar";
import { Task } from "../Task";
import { TasksContext } from "../../taskContext";

export const TasksContainer = () => {
	const { tasks } = useContext(TasksContext);

	return (
		<Container>
			{tasks.map((task) => (
				<Task
					key={task.id}
					title={task.title}
					isCompleted={task.isCompleted}
					id={task.id}
				/>
			))}
			<CommandBar />
		</Container>
	);
};
