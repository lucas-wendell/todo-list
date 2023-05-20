import React, { useContext } from "react";
import P from "prop-types";

import { Container, TitleContainer } from "./styles";
import { Circle } from "../Circle";

import { MdClose } from "react-icons/md";
import { TasksContext } from "../../contexts/taskContext";

export const Task = ({ isCompleted, title, id }) => {
	const { deleteTask, toggleTaskState } = useContext(TasksContext);

	return (
		<Container>
			<TitleContainer>
				<Circle isActive={isCompleted} onClick={() => toggleTaskState(id)} />
				<p>{title}</p>
			</TitleContainer>
			<MdClose
				size="1.5rem"
				className="deleteIcon"
				onClick={() => deleteTask(id)}
			/>
		</Container>
	);
};

Task.propTypes = {
	isCompleted: P.bool,
	title: P.string,
	id: P.string,
};
