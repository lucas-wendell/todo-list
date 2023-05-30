import React from "react";

import { Container } from "./styles";
import { Nav } from "../Nav";
import { TaskInput } from "../TaskInput";

export const Header = () => {
	return (
		<Container>
			<Nav />
			<TaskInput />
		</Container>
	);
};
