import React from "react";

import { Label, Input } from "./styles";
import { Circle } from "../Circle";

export const TaskInput = () => {
	return (
		<Label>
			<Circle />
			<Input placeholder="Type your task title here!" />
		</Label>
	);
};
