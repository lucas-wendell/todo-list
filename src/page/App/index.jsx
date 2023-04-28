import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	const uid = localStorage.getItem("uid");

	useEffect(() => {
		if (uid === "" || !uid) {
			navigate("/login");
			return;
		}
	});

	return <h1>Todo list</h1>;
};
