import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TESTE: {
			console.log("testando...");
			return { ...state };
		}
		default:
			return { ...state };
	}
};
