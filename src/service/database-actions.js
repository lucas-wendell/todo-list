import { doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./firebase";
import Cookies from "js-cookie";

export class DatabaseActions {
	constructor(userID) {
		// this.docRef = doc(database, "users", userID);
		// this.userID = userID;
		this.userData = this.getInitialData(userID);
	}

	async addUser(userID) {
		try {
			const userData = {
				tasks: [],
				token: userID,
			};
			await setDoc(doc(database, "users", userID), userData);
		} catch (e) {
			Cookies.set("error", true);
			console.log("addUser");
			console.error(e);
		}
	}

	async getUserData(userID) {
		console.log(userID);
		try {
			const docRef = doc(database, "users", userID);
			const docSnap = await getDoc(docRef);

			return docSnap.data();
		} catch (error) {
			Cookies.set("error", true);
			console.log("getUserData");
			console.error(error);
		}
	}

	async getInitialData(userID) {
		const data = await this.getUserData(userID);
		if (!data) {
			this.addUser();
			return [];
		}

		return data.tasks;
	}

	async updateTasks(newTasks, userID) {
		console.log(userID);
		try {
			const data = await this.getUserData(userID);
			const tasksToAddInDatabase = [...data.tasks];
			if (!Array.isArray(newTasks)) {
				tasksToAddInDatabase.unshift(newTasks);
			}

			await setDoc(doc(database, "users", userID), {
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
