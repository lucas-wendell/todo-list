import React, { useContext } from "react";
import P from "prop-types";

import { Container, TitleContainer } from "./styles";
import { Circle } from "../Circle";

import { MdClose } from "react-icons/md";
import { TasksContext } from "../../taskContext";

export const Task = ({ isCompleted, title }) => {
	const { deleteTask, toggleTaskState } = useContext(TasksContext);

	return (
		<Container>
			<TitleContainer>
				<Circle isActive={isCompleted} onClick={toggleTaskState} />
				<p>{title}</p>
			</TitleContainer>
			<MdClose size="1.5rem" className="deleteIcon" onClick={deleteTask} />
		</Container>
	);
};

Task.propTypes = {
	isCompleted: P.bool,
	title: P.string,
};
