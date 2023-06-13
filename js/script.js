import { createHeader } from "./components/createHeader.js";

const initApp = () => {
	const headerParent = document.querySelector('.header');
	const app = document.querySelector('#app');

	const headerObj = createHeader(headerParent);
	// console.log('headerObj: ', headerObj);


	const returnIndex = (event) => {
		// Убираю появление # в адресе после клика на ссылку логотипа
		event.preventDefault();
		headerObj.updateHeaderTitle('Категории');
	};

	headerObj.headerLogoLink.addEventListener('click', returnIndex);

	headerObj.headerBtn.addEventListener('click', () => {
		headerObj.updateHeaderTitle('Новая категория');
	})
};

initApp();