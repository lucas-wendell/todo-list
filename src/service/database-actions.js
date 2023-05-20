import { doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./firebase";
import Cookies from "js-cookie";

class DatabaseActions {
	constructor(userID) {
		this.docRef = doc(database, "users", userID);
	}

	async addUser(token) {
		try {
			const userData = {
				preferencialTheme: "dark",
				tasks: [],
				token,
			};
			await setDoc(this.docRef, userData);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	async getUserData() {
		try {
			const docSnap = await getDoc(this.docRef);

			return docSnap.data();
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async addTask(newTask) {
		try {
			const data = await this.getUserData();

			await setDoc(this.docRef, {
				...data,
				tasks: [...data.tasks, newTask],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async reorderTasks(newTasksPosition) {
		try {
			const data = await this.getUserData();

			await setDoc(this.docRef, {
				...data,
				tasks: [...newTasksPosition],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async deleteTask(newTasks) {
		try {
			const data = await this.getUserData();

			await setDoc(this.docRef, {
				...data,
				tasks: [...newTasks],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async clearCompletedTasks(newTasks) {
		try {
			const data = await this.getUserData();

			await setDoc(this.docRef, {
				...data,
				tasks: [...newTasks],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async toggleTasksState(newTasks) {
		try {
			const data = await this.getUserData();

			await setDoc(this.docRef, {
				...data,
				tasks: [...newTasks],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async getInitialData() {
		const userCookie = JSON.parse(Cookies.get("user"));
		const userID = userCookie.uid;
		const data = await this.getUserData();

		if (!data) {
			this.addUser(userID);
			return [];
		}

		return data.tasks;
	}
}

export const databaseActions = (() => {
	const userCookie = Cookies.get("user");
	if (!userCookie) return {};

	const userID = JSON.parse(userCookie).uid;
	return new DatabaseActions(userID);
})();
