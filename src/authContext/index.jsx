import React, { createContext, useReducer } from "react";
import Cookie from "js-cookie";

import P from "prop-types";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { reducer } from "./reducer";
import actions from "./actions";

export const AuthContext = createContext({
	error: null,
});

const logIn = async (provider, dispatch, navigate) => {
	try {
		const result = await signInWithPopup(auth, provider);
		Cookie.set("user", JSON.stringify(result.user));

		if (Cookie.get("user")) {
			navigate("/");
		}
	} catch (error) {
		Cookie.remove("user");
		dispatch({ type: actions.SET_ERROR, payload: error.code });
	}
};

const logOut = async (dispatch, navigate) => {
	try {
		await signOut(auth);

		Cookie.remove("user");
		navigate("/login");
	} catch (error) {
		dispatch({ type: actions.SET_ERROR, payload: error.code });
	}
};

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(reducer, AuthContext);

	const value = {
		loginError: state.error,
		unsetError: () => {
			dispatch({ type: actions.UNSET_ERROR });
		},
		logInWithGitHub: async () => {
			const provider = new GithubAuthProvider();
			logIn(provider, dispatch, navigate);
		},
		logInWithGoogle: async () => {
			const provider = new GoogleAuthProvider();
			logIn(provider, dispatch, navigate);
		},
		logInWithEmail: async (email, password) => {
			try {
				const result = await signInWithEmailAndPassword(auth, email, password);
				Cookie.set("user", JSON.stringify(result.user));

				if (Cookie.get("user")) {
					navigate("/");
				}
			} catch (error) {
				Cookie.remove("user");
				dispatch({ type: actions.SET_ERROR, payload: error.code });
			}
		},
		logOut: () => {
			logOut(dispatch, navigate);
		},
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: P.node,
};
