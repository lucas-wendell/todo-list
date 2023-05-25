import P from "prop-types";
import React, { createContext, useReducer } from "react";

import actions from "./actions";
import { reducer } from "./reducer";

import { databaseActions } from "../../service/database-actions";
import Cookies from "js-cookie";

const initialState = {
	filterBy: "all",
	error: false,
	tasks: Cookies.get("user") ? await databaseActions.getInitialData() : [],
};

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const tokenString = Cookies.get("user");
	if (!tokenString) return null;

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
		addTask: (newTask) => {
			dispatch({ type: actions.ADD_TASK, payload: newTask });
		},
		deleteTask: (id) => {
			dispatch({
				type: actions.DELETE_TASK,
				payload: id,
			});
		},
		toggleTaskState: (id) => {
			dispatch({
				type: actions.TOGGLE_COMPLETED_STATE_TASK,
				payload: id,
			});
		},
		reorderTasks: (newTasksPosition) => {
			dispatch({ type: actions.REORDER_TASKS, payload: newTasksPosition });
		},
		filterTasks: (filterValue) => {
			dispatch({ type: actions.FILTER_TASKS_BY, payload: filterValue });
		},
		clearCompletedTasks: () => {
			dispatch({ type: actions.CLEAR_COMPLETED_TASKS });
		},
		setError: () => {
			dispatch({ type: actions.SET_ERROR });
		},
	};

	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};

TasksProvider.propTypes = {
	children: P.node,
};
