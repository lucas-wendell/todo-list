import P from "prop-types";
import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import actions from "./actions";

export const TasksContext = createContext({ teste: "teste" });

export const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, TasksContext);
	const value = {
		state,
		teste: () => {
			dispatch({ type: actions.TESTE });
		},
	};

	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};

TasksProvider.propTypes = {
	children: P.node,
};
