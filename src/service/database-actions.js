import { doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./firebase";
import Cookies from "js-cookie";

export class DatabaseActions {
	constructor(userID) {
		this.docRef = doc(database, "users", userID);
		this.userID = userID;
		this.userData = this.getInitialData();
	}

	async addUser() {
		try {
			const userData = {
				tasks: [],
				token: this.userID,
			};
			await setDoc(this.docRef, userData);
		} catch (e) {
			Cookies.set("error", true);
			console.log("addUser");
			console.error(e);
		}
	}

	async getUserData() {
		try {
			const docRef = this.docRef;
			const docSnap = await getDoc(docRef);

			return docSnap.data();
		} catch (error) {
			Cookies.set("error", true);
			console.log("getUserData");
			console.error(error);
		}
	}

	async getInitialData() {
		const data = await this.getUserData();
		if (!data) {
			this.addUser();
			return [];
		}

		return data.tasks;
	}

	async updateTasks(newTasks) {
		try {
			const data = await this.getUserData();
			const tasksToAddInDatabase = [...data.tasks];
			if (!Array.isArray(newTasks)) {
				tasksToAddInDatabase.unshift(newTasks);
			}

			await setDoc(this.docRef, {
				...data,
				tasks: Array.isArray(newTasks)
					? [...newTasks]
					: [...tasksToAddInDatabase],
			});
		} catch (error) {
			Cookies.set("error", true);
			console.log("updateTasks");
			console.error(error);
		}
	}
}
