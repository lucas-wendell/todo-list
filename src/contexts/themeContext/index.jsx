import P from "prop-types";
import React, { createContext, useReducer } from "react";

import actions from "./actions";
import { reducer } from "./reducer";

const initialState = {
	theme: localStorage.getItem("theme") || "dark",
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const localStorageValue = localStorage.getItem("theme");
	const themeValue =
		localStorageValue && localStorageValue !== ""
			? localStorageValue
			: state.theme;

	const value = {
		theme: themeValue,
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
