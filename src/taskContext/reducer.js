import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TESTE: {
			console.log("testando...");
			return { ...state };
		}
		case actions.ADD_TASK: {
			return { ...state, tasks: [...state.tasks, action.payload] };
		}
		case actions.DELETE_TASK: {
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};
		}
		case actions.TOGGLE_COMPLETED_STATE_TASK: {
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload
						? { ...task, isCompleted: !task.isCompleted }
						: task
				),
			};
		}
		default:
			return { ...state };
	}
};
