import React, { useContext } from "react";
import { uid } from "uid";

import { Label, Input } from "./styles";
import { Circle } from "../Circle";

import { TasksContext } from "../../contexts/taskContext";

export const TaskInput = () => {
	const { addTask } = useContext(TasksContext);

	const handleOnKeyDown = (event) => {
		const keyName = event.key.toLowerCase();
		if (keyName === "enter" && event.target.value) {
			const newTask = {
				id: uid(16),
				title: event.target.value,
				isCompleted: false,
			};
			addTask(newTask);
			event.target.value = "";
		}
	};

	return (
		<Label>
			<Circle />
			<Input
				placeholder="Type your task title here!"
				onKeyDown={handleOnKeyDown}
			/>
		</Label>
	);
};
