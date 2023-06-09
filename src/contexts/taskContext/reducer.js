import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.ADD_TASK: {
			if (Array.isArray(action.payload)) {
				return { ...state, tasks: [...action.payload] };
			}
			const newTask = action.payload;
			const oldTasks = [...state.tasks];

			state.databaseActions.updateTasks(newTask);
			oldTasks.unshift(newTask);

			return { ...state, tasks: [...oldTasks] };
		}

		case actions.REORDER_TASKS: {
			const reorderedTasks = [...action.payload];
			state.databaseActions.updateTasks(reorderedTasks);

			return { ...state, tasks: reorderedTasks };
		}

		case actions.FILTER_TASKS_BY: {
			return { ...state, filterBy: action.payload };
		}

		case actions.DELETE_TASK: {
			const newTasks = state.tasks.filter((task) => task.id !== action.payload);
			state.databaseActions.updateTasks(newTasks);

			return {
				...state,
				tasks: newTasks,
			};
		}

		case actions.CLEAR_COMPLETED_TASKS: {
			const newTasks = state.tasks.filter((task) => !task.isCompleted);
			state.databaseActions.updateTasks(newTasks);

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
			state.databaseActions.updateTasks(newTasksState);

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
