import React from "react";

import { Label, Input } from "./styles";
import { Circle } from "../Circle";

export const TaskInput = () => {
	const handleOnKeyDown = (event) => {
		const keyName = event.key.toLowerCase();
		if (keyName === "enter" && event.target.value) {
			console.log("opaaaaa");
			console.log(event.target.value);
		}
	};

	return (
		<Label>
			<Circle />
			<Input
				placeholder="Type your task title here!"
				onKeyDown={handleOnKeyDown}
			/>
		</Label>
	);
};
