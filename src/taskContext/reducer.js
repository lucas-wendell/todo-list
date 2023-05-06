import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TESTE: {
			console.log("testando...");
			return { ...state };
		}
		case actions.ADD_TASK: {
			console.log("ADD...");
			return { ...state };
		}
		case actions.DELETE_TASK: {
			console.log("DELETE...");
			return { ...state };
		}
		case actions.TOGGLE_COMPLETED_STATE_TASK: {
			console.log("TOGGLE...");
			return { ...state };
		}
		default:
			return { ...state };
	}
};
