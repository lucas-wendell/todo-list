import P from "prop-types";
import React, { createContext, useReducer } from "react";

import actions from "./actions";
import { reducer } from "./reducer";

import { databaseActions } from "../service/database-actions";
import Cookies from "js-cookie";

const initialState = {
	filterBy: "all",
	tasks: await databaseActions.getInitialData(),
};

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const tokenString = Cookies.get("user");
	if (!tokenString) return null;

	const token = JSON.parse(tokenString).uid;
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
		reorderTasks: (newTasksPosition) => {
			dispatch({ type: actions.REORDER_TASKS, payload: newTasksPosition });
		},
		clearCompletedTasks: () => {
			dispatch({ type: actions.CLEAR_COMPLETED_TASKS, payload: { token } });
		},
		filterTasks: (filterValue) => {
			dispatch({ type: actions.FILTER_TASKS_BY, payload: filterValue });
		},
		deleteTask: (id) => {
			dispatch({
				type: actions.DELETE_TASK,
				payload: { id, token },
			});
		},
		addTask: (newTask) => {
			dispatch({ type: actions.ADD_TASK, payload: { task: newTask, token } });
		},
		toggleTaskState: (id) => {
			dispatch({
				type: actions.TOGGLE_COMPLETED_STATE_TASK,
				payload: { id, token },
			});
		},
	};

	return (
		<TasksContext.Provider value={value}>{children}</TasksContext.Provider>
	);
};

TasksProvider.propTypes = {
	children: P.node,
};
