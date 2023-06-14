import { createCategory } from "./components/createCategory.js";
import { createEditCategory } from "./components/createEditCategory.js";
import { createHeader } from "./components/createHeader.js";
import { createElement } from "./helper/createElement.js";
import { fetchCards, fetchCategories } from "./service/api.service.js";

const initApp = async () => {
	const headerParent = document.querySelector('.header');
	const app = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	const categoryObj = createCategory(app);
	// console.log('categoryObj: ', categoryObj);
	const editCategoryObj = createEditCategory(app);

	const allSectionsUnmount = () => {
		// categoryObj.unmount();
		// editCategoryObj.unmount();
		[categoryObj, editCategoryObj].forEach(obj => { obj.unmount() });
	};

	const renderIndex = async (event) => {
		// Убираю появление # в адресе после клика на ссылку логотипа
		event?.preventDefault();
		allSectionsUnmount();

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
		allSectionsUnmount();
		headerObj.updateHeaderTitle('Новая категория');
		editCategoryObj.mount();
	});

	// categoryObj.categoryList.addEventListener('click', (event) => {
	// 	const target = event.target;
	// });
	categoryObj.categoryList.addEventListener('click', async ({ target }) => {
		const categoryItem = target.closest('.category__item');

		if (target.closest('.category__edit')) {
			const dataCards = await fetchCards(categoryItem.dataset.id);

			allSectionsUnmount();
			headerObj.updateHeaderTitle('Редактирование');
			// editCategoryObj.mount({
			// 	title: 'Тестовая карточка',
			// 	pairs: [['1', 'one']],
			// });
			editCategoryObj.mount(dataCards);

			return;
		}
	});
};

initApp();