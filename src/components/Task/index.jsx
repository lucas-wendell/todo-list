import React, { useContext } from "react";

import { Container, TitleContainer } from "./styles";
import { Circle } from "../Circle";

import { MdClose } from "react-icons/md";
import { TasksContext } from "../../taskContext";

export const Task = () => {
	const { teste } = useContext(TasksContext);

	return (
		<Container>
			<TitleContainer>
				<Circle isActive={true} />
				<p>Lorem ipsum dolor sit.</p>
			</TitleContainer>
			<MdClose size="1.5rem" className="deleteIcon" onClick={teste} />
		</Container>
	);
};
