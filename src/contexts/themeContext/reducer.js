import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.TOGGLE_THEME: {
			const newThemeValue = state.theme === "dark" ? "light" : "dark";

			localStorage.setItem("theme", newThemeValue);
			return { ...state, theme: newThemeValue };
		}
		default:
			return { ...state };
	}
};
