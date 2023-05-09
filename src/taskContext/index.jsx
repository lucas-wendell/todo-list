import P from "prop-types";
import React, { createContext, useReducer } from "react";

import actions from "./actions";
import { reducer } from "./reducer";

import { uid } from "uid";

const initialState = {
	filterBy: "all",
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

	const filteredTasks = state.tasks.filter((task) => {
		if (state.filterBy === "all") {
			return task;
		} else if (state.filterBy === "completed") {
			return task.isCompleted === true;
		} else {
			return !task.isCompleted;
		}
	});

	const value = {
		tasks: filteredTasks,
		tasksLeft: state.tasks.filter((task) => !task.isCompleted).length,
		teste: () => {
			dispatch({ type: actions.TESTE });
		},
		clearCompletedTasks: () => {
			dispatch({ type: actions.CLEAR_COMPLETED_TASKS });
		},
		filterTasks: (filterValue) => {
			dispatch({ type: actions.FILTER_TASKS_BY, payload: filterValue });
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
