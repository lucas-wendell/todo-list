import { databaseActions } from "../service/database-actions";
import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TESTE: {
			console.log("testando...");
			return { ...state };
		}
		case actions.ADD_TASK: {
			if (Array.isArray(action.payload.task)) {
				return { ...state, tasks: [...action.payload] };
			}

			const newTask = action.payload.task;
			databaseActions.addTask(action.payload.token, newTask);

			return { ...state, tasks: [...state.tasks, newTask] };
		}
		case actions.REORDER_TASKS: {
			return { ...state, tasks: [...action.payload] };
		}
		case actions.FILTER_TASKS_BY: {
			return { ...state, filterBy: action.payload };
		}
		case actions.DELETE_TASK: {
			const newTasks = state.tasks.filter(
				(task) => task.id !== action.payload.id
			);
			databaseActions.deleteTask(action.payload.token, newTasks);
			return {
				...state,
				tasks: newTasks,
			};
		}
		case actions.CLEAR_COMPLETED_TASKS: {
			const newTasks = state.tasks.filter((task) => !task.isCompleted);

			databaseActions.clearCompletedTasks(action.payload.token, newTasks);
			return {
				...state,
				tasks: newTasks,
			};
		}
		case actions.TOGGLE_COMPLETED_STATE_TASK: {
			const newTasksState = state.tasks.map((task) =>
				task.id === action.payload.id
					? { ...task, isCompleted: !task.isCompleted }
					: task
			);
			databaseActions.toggleTasksState(action.payload.token, newTasksState);
			return {
				...state,
				tasks: newTasksState,
			};
		}
		default:
			return { ...state };
	}
};
