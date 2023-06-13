export const createElement = (tag, attr) => {
	const element = document.createElement(tag);
	// Берёт аттрибуты и заменяет (если есть) в элементе или создаёт (если их нет)
	return Object.assign(element, attr);
	// return element;
};