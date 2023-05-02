import React from "react";

import { Label, Input } from "./styles";

export const TaskInput = () => {
	return (
		<Label>
			<div className="circle"></div>
			<Input placeholder="Type your task title here!" />
		</Label>
	);
};
