import React, { createContext } from "react";

import P from "prop-types";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const value = {
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
			}
		},
		logInWithEmail: async (email, password) => {
			try {
				const result = await signInWithEmailAndPassword(auth, email, password);
				const uid = result.user.uid;
				// console.log(result);
				localStorage.setItem("uid", uid);
				if (uid) {
					navigate("/");
				}
			} catch (error) {
				console.log(error);
				console.log(error.message);
				console.log(error.code);

				localStorage.setItem("uid", "");
			}
		},
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: P.node,
};
