export const calculateScrollPercent = () => {
	const scrollTop = window.scrollY;
	const docHeight = document.body.scrollHeight - window.innerHeight;
	return (scrollTop / docHeight) * 100;
};

export const registerScrollListener = (onUpdate: (percent: number) => void) => {
	const handler = () => onUpdate(calculateScrollPercent());
	window.addEventListener('scroll', handler);

	return () => window.removeEventListener('scroll', handler);
};

export const postVisit = async (pathname: string) =>
	fetch('/api/visits', {
		method: 'POST',
		body: JSON.stringify({
			pathname
		})
	});
