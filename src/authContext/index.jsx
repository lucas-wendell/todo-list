import React, { createContext, useReducer } from "react";

import P from "prop-types";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { reducer } from "./reducer";
import actions from "./actions";

export const AuthContext = createContext({
	error: null,
});

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

			try {
				const result = await signInWithPopup(auth, provider);
				const uid = result.user.uid;

				localStorage.setItem("uid", uid);
				if (uid) {
					navigate("/");
				}
			} catch (error) {
				localStorage.setItem("uid", "");
				dispatch({ type: actions.SET_ERROR, payload: error.message });
				console.log(error);
			}
		},
		logInWithGoogle: async () => {
			const provider = new GoogleAuthProvider();
			try {
				const result = await signInWithPopup(auth, provider);
				const uid = result.user.uid;

				localStorage.setItem("uid", uid);
				if (uid) {
					navigate("/");
				}
			} catch (error) {
				localStorage.setItem("uid", "");
				console.log(error);
				dispatch({ type: actions.SET_ERROR, payload: error.message });
			}
		},
		logInWithEmail: async (email, password) => {
			try {
				const result = await signInWithEmailAndPassword(auth, email, password);
				const uid = result.user.uid;
				localStorage.setItem("uid", uid);
				if (uid) {
					navigate("/");
				}
			} catch (error) {
				localStorage.setItem("uid", "");
				dispatch({ type: actions.SET_ERROR, payload: error.message });
			}
		},
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: P.node,
};
