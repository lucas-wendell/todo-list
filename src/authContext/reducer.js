import actions from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.GITHUB_AUTH: {
			console.log("github dispatch");
			return { ...state };
		}
		case actions.GOOGLE_AUTH: {
			console.log("google dispatch");
			return { ...state };
		}
		case actions.TWITTER_AUTH: {
			console.log("twitter dispatch");
			return { ...state };
		}
	}
};
