import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_ERROR: {
			return {
				...state,
				error: { message: action.payload },
			};
		}
		case actions.UNSET_ERROR: {
			return {
				...state,
				error: null,
			};
		}
		default:
			return { ...state };
	}
};
