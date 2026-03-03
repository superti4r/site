type ErrorCopy = {
	title: string;
	message: string;
};

export const getErrorCopy = (status: number): ErrorCopy => {
	if (status === 404) {
		return {
			title: 'Page not found',
			message: 'Looks like you’ve wandered off. This page doesn’t seem to exist.'
		};
	}

	if (status === 403) {
		return {
			title: 'Not allowed',
			message: 'Hmm, you’re not supposed to be here.'
		};
	}

	if (status === 500) {
		return {
			title: "It's not you, it’s me",
			message: "Something went wrong on the server. I'm probably fixing it right now."
		};
	}

	if (status === 502 || status === 503 || status === 504) {
		return {
			title: 'Taking a short break',
			message: 'The server is catching its breath. Try again in a little while.'
		};
	}

	if (status >= 400 && status < 500) {
		return {
			title: 'Uh-oh',
			message: "Something's off with the request. Maybe try checking the URL?"
		};
	}

	if (status >= 500) {
		return {
			title: 'Server hiccup',
			message: 'The system tripped over something. Let’s hope it recovers soon.'
		};
	}

	return {
		title: 'Oops!',
		message: "Something's not quite right."
	};
};
