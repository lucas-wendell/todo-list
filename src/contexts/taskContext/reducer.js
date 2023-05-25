import { databaseActions } from "./index";
import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.ADD_TASK: {
			if (Array.isArray(action.payload)) {
				return { ...state, tasks: [...action.payload] };
			}

			const newTask = action.payload;
			databaseActions.updateTasks(newTask);

			return { ...state, tasks: [...state.tasks, newTask] };
		}
		case actions.REORDER_TASKS: {
			const reorderedTasks = [...action.payload];
			databaseActions.updateTasks(reorderedTasks);
			return { ...state, tasks: reorderedTasks };
		}
		case actions.FILTER_TASKS_BY: {
			return { ...state, filterBy: action.payload };
		}
		case actions.DELETE_TASK: {
			const newTasks = state.tasks.filter((task) => task.id !== action.payload);
			databaseActions.updateTasks(newTasks);
			return {
				...state,
				tasks: newTasks,
			};
		}
		case actions.CLEAR_COMPLETED_TASKS: {
			const newTasks = state.tasks.filter((task) => !task.isCompleted);

			databaseActions.updateTasks(newTasks);
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
			databaseActions.updateTasks(newTasksState);
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
		default:
			return { ...state };
	}
};
