import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TOGGLE_THEME: {
			return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
		}
		default:
			return { ...state };
	}
};
