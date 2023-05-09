import P from "prop-types";
import React, { createContext, useReducer } from "react";

import actions from "./actions";
import { reducer } from "./reducer";

const initialState = {
	theme: "dark",
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		theme: state.theme,
		toggleTheme: () => {
			dispatch({ type: actions.TOGGLE_THEME });
		},
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

ThemeContextProvider.propTypes = {
	children: P.node,
};
