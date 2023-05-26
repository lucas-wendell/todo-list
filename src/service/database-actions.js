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
		}
	}

	async getUserData(userID) {
		try {
			const docRef = doc(database, "users", userID);
			const docSnap = await getDoc(docRef);

			return docSnap.data();
		} catch (error) {
			Cookies.set("error", true);
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
		try {
			const data = await this.getUserData();

			await setDoc(doc(database, "users", userID), {
				...data,
				tasks: Array.isArray(newTasks)
					? [...newTasks]
					: [...data.tasks, newTasks],
			});
		} catch (error) {
			Cookies.set("error", true);
		}
	}
}
