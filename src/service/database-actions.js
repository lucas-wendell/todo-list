import { doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./firebase";
import Cookies from "js-cookie";

class DatabaseActions {
	async addUser(token) {
		try {
			const docRef = doc(database, "users", token);
			const userData = {
				preferencialTheme: "dark",
				tasks: [],
				token,
			};
			await setDoc(docRef, userData);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	async getUserData(token) {
		try {
			const docRef = doc(database, "users", token);
			const docSnap = await getDoc(docRef);

			return docSnap.data();
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async addTask(token, newTask) {
		try {
			const docRef = doc(database, "users", token);
			const data = await this.getUserData(token);

			await setDoc(docRef, {
				...data,
				tasks: [...data.tasks, newTask],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async reorderTasks(token, newTasksPosition) {
		try {
			const docRef = doc(database, "users", token);
			const data = await this.getUserData(token);

			await setDoc(docRef, {
				...data,
				tasks: [...newTasksPosition],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async deleteTask(token, newTasks) {
		try {
			const docRef = doc(database, "users", token);
			const data = await this.getUserData(token);

			await setDoc(docRef, {
				...data,
				tasks: [...newTasks],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async clearCompletedTasks(token, newTasks) {
		try {
			const docRef = doc(database, "users", token);
			const data = await this.getUserData(token);

			await setDoc(docRef, {
				...data,
				tasks: [...newTasks],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async toggleTasksState(token, newTasks) {
		try {
			const docRef = doc(database, "users", token);
			const data = await this.getUserData(token);

			await setDoc(docRef, {
				...data,
				tasks: [...newTasks],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}

	async getInitialData() {
		// if (!Cookies.get("user")) return [];
		const userCookie = JSON.parse(Cookies.get("user"));
		const userID = userCookie.uid;
		const data = await this.getUserData(userID);

		if (!data) {
			this.addUser(userID);
			return [];
		}

		return data.tasks;
	}
}

export const databaseActions = new DatabaseActions();
