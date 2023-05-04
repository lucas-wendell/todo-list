import React from "react";

import { Container, TitleContainer } from "./styles";
import { Circle } from "../Circle";

import { MdClose } from "react-icons/md";

export const Task = () => {
	return (
		<Container>
			<TitleContainer>
				<Circle isActive={true} />
				<p>Lorem ipsum dolor sit.</p>
			</TitleContainer>
			<MdClose size="1.5rem" className="deleteIcon" />
		</Container>
	);
};
