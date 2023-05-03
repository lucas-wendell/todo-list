import React from "react";

import { Container, FiltersContainer } from "./styles";

export const CommandBar = () => {
	return (
		<Container>
			<p>5 items left</p>
			<FiltersContainer>
				<p className="filtersParagraph active">All</p>
				<p className="filtersParagraph">Active</p>
				<p className="filtersParagraph ">Completed</p>
			</FiltersContainer>
			<p className="filtersParagraph">Clear Completed</p>
		</Container>
	);
};
