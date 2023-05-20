import { doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./firebase";
import Cookies from "js-cookie";

class DatabaseActions {
	constructor(userID) {
		this.docRef = doc(database, "users", userID);
		this.userID = userID;
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

	async getInitialData() {
		const data = await this.getUserData();

		if (!data) {
			this.addUser(this.userID);
			return [];
		}

		return data.tasks;
	}

	async updateTasks(newTasks) {
		try {
			const data = await this.getUserData();

			await setDoc(this.docRef, {
				...data,
				tasks: Array.isArray(newTasks)
					? [...newTasks]
					: [...data.tasks, newTasks],
			});
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	}
}

export const databaseActions = (() => {
	const userCookie = Cookies.get("user");
	if (!userCookie) return {};

	const userID = JSON.parse(userCookie).uid;
	return new DatabaseActions(userID);
})();
