import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TESTE: {
			console.log("testando...");
			return { ...state };
		}
		case actions.ADD_TASK: {
			// console.log("ADD...");
			return { ...state, tasks: [...state.tasks, action.payload] };
		}
		case actions.DELETE_TASK: {
			console.log("DELETE...");
			console.log(action.payload);
			return { ...state };
		}
		case actions.TOGGLE_COMPLETED_STATE_TASK: {
			console.log("TOGGLE...");
			console.log(action.payload);

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
