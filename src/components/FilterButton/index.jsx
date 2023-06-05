import React, { useContext, useEffect, useRef } from "react";
import P from "prop-types";

import { Container } from "./styles";
import { TasksContext } from "../../contexts/taskContext";

const unmarkParagraphs = (paragraphs, filterValue) => {
	paragraphs.forEach((paragraph) => {
		if (paragraph.getAttribute("data-name") !== filterValue) {
			paragraph.classList.remove("active");
		}
	});
};

const filterParagraphs = (paragraphs, filterBy) =>
	paragraphs.filter(
		(paragraph) => paragraph.getAttribute("data-name") === filterBy
	);

export const FilterButton = ({ type = "primary" }) => {
	const ParagraphsContainer = useRef(null);
	const { filterTasks, filterBy } = useContext(TasksContext);

	useEffect(() => {
		const { current: container } = ParagraphsContainer;
		const paragraphs = [...container.querySelectorAll("p")];
		const [defaultParagraph] = filterParagraphs(paragraphs, "all");

		defaultParagraph.classList.add("active");
	}, []);

	useEffect(() => {
		const { current: container } = ParagraphsContainer;
		const paragraphs = [...container.querySelectorAll("p")];
		const [defaultParagraph] = filterParagraphs(paragraphs, filterBy);

		unmarkParagraphs(paragraphs, filterBy);
		defaultParagraph.classList.add("active");
	}, [filterBy]);

	const turnParagraphActive = (filterValue) => {
		const { current: container } = ParagraphsContainer;
		const paragraphs = [...container.querySelectorAll("p")];
		const [paragraphToBeActive] = filterParagraphs(paragraphs, filterValue);

		unmarkParagraphs(paragraphs, filterValue);
		paragraphToBeActive.classList.add("active");
	};

	const handleClick = ({ target }) => {
		const filterValue = target.getAttribute("data-name");
		if (!filterValue || target.classList.contains("active")) return;

		turnParagraphActive(filterValue);
		filterTasks(filterValue);
	};

	return (
		<Container onClick={handleClick} type={type} ref={ParagraphsContainer}>
			<p className="filtersParagraph" data-name="all">
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
