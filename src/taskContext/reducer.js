import { databaseActions } from "../service/database-actions";
import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TESTE: {
			console.log("testando...");
			return { ...state };
		}
		case actions.ADD_TASK: {
			if (Array.isArray(action.payload)) {
				return { ...state, tasks: [...action.payload] };
			}

			const newTask = action.payload;
			databaseActions.addTask(newTask);

			return { ...state, tasks: [...state.tasks, newTask] };
		}
		case actions.REORDER_TASKS: {
			const reorderedTasks = [...action.payload];
			databaseActions.reorderTasks(reorderedTasks);
			return { ...state, tasks: reorderedTasks };
		}
		case actions.FILTER_TASKS_BY: {
			return { ...state, filterBy: action.payload };
		}
		case actions.DELETE_TASK: {
			const newTasks = state.tasks.filter((task) => task.id !== action.payload);
			databaseActions.deleteTask(newTasks);
			return {
				...state,
				tasks: newTasks,
			};
		}
		case actions.CLEAR_COMPLETED_TASKS: {
			const newTasks = state.tasks.filter((task) => !task.isCompleted);

			databaseActions.clearCompletedTasks(newTasks);
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
			databaseActions.toggleTasksState(newTasksState);
			return {
				...state,
				tasks: newTasksState,
			};
		}
		default:
			return { ...state };
	}
};
