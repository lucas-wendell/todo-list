import React, { useContext, useEffect, useRef } from "react";
import P from "prop-types";

import { Container } from "./styles";
import { TasksContext } from "../../contexts/taskContext";

export const FilterButton = ({ type = "primary" }) => {
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
		<Container onClick={handleClick} type={type}>
			<p ref={activeParagraph} className="filtersParagraph" data-name="all">
				All
			</p>
			<p className="filtersParagraph" data-name="active">
				Active
			</p>
			<p className="filtersParagraph " data-name="completed">
				Completed
			</p>
		</Container>
	);
};

FilterButton.propTypes = {
	type: P.string,
};
