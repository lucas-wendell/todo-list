import Cookies from "js-cookie";
import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.ADD_TASK: {
			if (Array.isArray(action.payload)) {
				return { ...state, tasks: [...action.payload] };
			}

			const userID = JSON.parse(Cookies.get("user"));
			const newTask = action.payload;
			state.databaseActions.updateTasks(newTask, userID);

			return { ...state, tasks: [...state.tasks, newTask] };
		}
		case actions.REORDER_TASKS: {
			const reorderedTasks = [...action.payload];
			const userID = JSON.parse(Cookies.get("user"));
			state.databaseActions.updateTasks(reorderedTasks, userID);
			return { ...state, tasks: reorderedTasks };
		}
		case actions.FILTER_TASKS_BY: {
			return { ...state, filterBy: action.payload };
		}
		case actions.DELETE_TASK: {
			const newTasks = state.tasks.filter((task) => task.id !== action.payload);
			const userID = JSON.parse(Cookies.get("user"));
			state.databaseActions.updateTasks(newTasks, userID);
			return {
				...state,
				tasks: newTasks,
			};
		}
		case actions.CLEAR_COMPLETED_TASKS: {
			const newTasks = state.tasks.filter((task) => !task.isCompleted);
			const userID = JSON.parse(Cookies.get("user"));

			state.databaseActions.updateTasks(newTasks, userID);
			return {
				...state,
				tasks: newTasks,
			};
		}
		case actions.TOGGLE_COMPLETED_STATE_TASK: {
			const newTasksState = state.tasks.map((task) =>
				task.id === action.payload
					? { ...task, isCompleted: !task.isCompleted }
					: task
			);
			const userID = JSON.parse(Cookies.get("user"));

			state.databaseActions.updateTasks(newTasksState, userID);
			return {
				...state,
				tasks: newTasksState,
			};
		}

		case actions.SET_ERROR: {
			return {
				...state,
				error: !state.error,
			};
		}
		// case actions.SET_ACTIONS: {
		// 	return {
		// 		...state,
		// 		databaseActions: action.payload,
		// 	};
		// }
		case actions.SET_INITIAL_STATE: {
			return {
				...action.payload,
			};
		}

		default: {
			return { ...state };
		}
	}
};
