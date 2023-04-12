import React, { createContext, useReducer } from "react";

import { reducer } from "./reducer";
import P from "prop-types";
import actions from "./actions";

const initiatState = {
	token: "",
	isError: false,
	user: null,
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initiatState);
	const value = {
		state,
		logInWithGitHub() {
			dispatch({ type: actions.GITHUB_AUTH });
		},
		logInWithGoogle() {
			dispatch({ type: actions.GOOGLE_AUTH });
		},
		logInWithTwitter() {
			dispatch({ type: actions.TWITTER_AUTH });
		},
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: P.node,
};
