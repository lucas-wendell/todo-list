import { useContext, useEffect } from "react";
import { TasksContext } from "../contexts/taskContext";

const useSetError = () => {
	const { setError } = useContext(TasksContext);

	useEffect(() => {
		setError();
	}, [setError]);
};
