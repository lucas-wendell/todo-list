import P from "prop-types";
import React, { createContext, useEffect, useReducer } from "react";

import actions from "./actions";
import { reducer } from "./reducer";

import Cookies from "js-cookie";
import { DatabaseActions } from "../../service/database-actions";

const createInititalState = async () => {
	try {
		const userID = Cookies.get("user")
			? JSON.parse(Cookies.get("user")).uid
			: "";
		const databaseInstance = new DatabaseActions(userID);
		const newState = {
			databaseActions: databaseInstance,
			filterBy: "all",
			error: false,
			tasks: await databaseInstance.userData,
		};
		return {
			...newState,
		};
	} catch (error) {
		return { error };
	}
};

let initialState = {
	databaseActions: {},
	filterBy: "all",
	error: false,
	tasks: [],
};

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (!Cookies.get("user")) return null;
		createInititalState().then((res) =>
			dispatch({ type: actions.SET_INITIAL_STATE, payload: res })
		);

		return () => ({
			databaseActions: {},
			filterBy: "all",
			error: false,
			tasks: [],
		});
	}, []);

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
