import P from "prop-types";
import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import actions from "./actions";
import { uid } from "uid";

const initialState = {
	tasks: [
		{
			id: uid(16),
			title: "teste",
			isCompleted: false,
		},
		{
			id: uid(16),
			title: "teste 2",
			isCompleted: true,
		},
		{
			id: uid(16),
			title: "teste 3",
			isCompleted: false,
		},
	],
};

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {
		tasks: state.tasks,
		teste: () => {
			dispatch({ type: actions.TESTE });
		},
		deleteTask: (id) => {
			dispatch({ type: actions.DELETE_TASK, payload: id });
		},
		addTask: (newTask) => {
			dispatch({ type: actions.ADD_TASK, payload: newTask });
		},
		toggleTaskState: (id) => {
			dispatch({ type: actions.TOGGLE_COMPLETED_STATE_TASK, payload: id });
		},
	};

	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};

TasksProvider.propTypes = {
	children: P.node,
};
