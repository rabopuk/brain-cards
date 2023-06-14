// https://glitch.com/
const API_URL = 'https://honorable-sable-castanet.glitch.me';

export const fetchCategories = async () => {
	try {
		const response = await fetch(`${API_URL}/api/category`);

		// if (response.status === 200 || response.status === 201) {
		// 	const categories = await response.json();
		// 	return categories;
		// } else {
		// 	const error = await response.json();
		// 	throw error;
		// }

		// Если приходит неверный статус
		if (!(response.status === 200 || response.status === 201)) {
			// при ошибке
			const error = await response.json();
			// прерываю эту попытку/try и error отправляется в catch
			throw error;
		}

		const categories = await response.json();
		return categories;

	} catch (error) {
		return { error };
	};
};

export const fetchCards = async (id) => {
	try {
		const response = await fetch(`${API_URL}/api/category/${id}`);

		// if (response.status === 200 || response.status === 201) {
		// 	const categories = await response.json();
		// 	return categories;
		// } else {
		// 	const error = await response.json();
		// 	throw error;
		// }

		// Если приходит неверный статус
		if (!(response.status === 200 || response.status === 201)) {
			// при ошибке
			const error = await response.json();
			// прерываю эту попытку/try и error отправляется в catch
			throw error;
		}

		const cards = await response.json();
		return cards;

	} catch (error) {
		return { error };
	};
};