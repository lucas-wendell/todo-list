/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useContext } from "react";

import { Container } from "./styles";
import { TasksContext } from "../../contexts/taskContext";
import { FilterButton } from "../FilterButton";

export const CommandBar = () => {
	const { tasksLeft, clearCompletedTasks } = useContext(TasksContext);

	const handleOnClearComponentIsClicked = () => {
		clearCompletedTasks();
	};

	return (
		<>
			<Container>
				<p>{tasksLeft} items left</p>
				<FilterButton />
				<p className="clearParagraph" onClick={handleOnClearComponentIsClicked}>
					Clear Completed
				</p>
			</Container>
		</>
	);
};
