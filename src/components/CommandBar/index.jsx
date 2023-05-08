import React, { useContext, useEffect, useRef } from "react";

import { Container, FiltersContainer } from "./styles";
import { TasksContext } from "../../taskContext";

export const CommandBar = () => {
	const activeParagraph = useRef(null);
	const { filterTasks } = useContext(TasksContext);

	useEffect(() => {
		activeParagraph.current.classList.add("active");
	});

	const turnParagraphActive = (target) => {
		activeParagraph.current.classList.remove("active");
		activeParagraph.current = target;
		activeParagraph.current.classList.add("active");
	};

	const handleClick = ({ target }) => {
		const filterValue = target.getAttribute("data-name");
		if (!filterValue || target.classList.contains("active")) return;

		turnParagraphActive(target);
		filterTasks(filterValue);
	};

	return (
		<Container>
			<p>5 items left</p>
			<FiltersContainer onClick={handleClick}>
				<p ref={activeParagraph} className="filtersParagraph" data-name="all">
					All
				</p>
				<p className="filtersParagraph" data-name="active">
					Active
				</p>
				<p className="filtersParagraph " data-name="completed">
					Completed
				</p>
			</FiltersContainer>
			<p className="filtersParagraph">Clear Completed</p>
		</Container>
	);
};
