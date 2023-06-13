import { createCategory } from "./components/createCategory.js";
import { createHeader } from "./components/createHeader.js";
import { createElement } from "./helper/createElement.js";
import { fetchCategories } from "./service/api.service.js";

const initApp = async () => {
	const headerParent = document.querySelector('.header');
	const app = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	const categoryObj = createCategory(app);
	console.log('categoryObj: ', categoryObj);


	const renderIndex = async (event) => {
		// Убираю появление # в адресе после клика на ссылку логотипа
		event?.preventDefault();

		headerObj.updateHeaderTitle('Категории');

		// Получаю категории с сервера
		const categories = await fetchCategories();
		// console.log('categories: ', categories);

		if (categories.error) {
			// Error text
			app.append(createElement('p', {
				className: 'server-error',
				textContent: 'Ошибка сервера, попробуйте зайти позже',
			}));
			return;
		}

		categoryObj.mount(categories);
	};

	renderIndex();

	headerObj.headerLogoLink.addEventListener('click', renderIndex);

	headerObj.headerBtn.addEventListener('click', () => {
		categoryObj.unmount();
		headerObj.updateHeaderTitle('Новая категория');
	})
};

initApp();