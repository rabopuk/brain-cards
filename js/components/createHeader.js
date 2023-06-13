import { createElement } from "../helper/createElement.js";

export const createHeader = (parent) => {
	// const container = document.createElement('div');
	// container.className = 'container';
	const container = createElement('div', {
		className: 'container header__container',
	});

	parent.append(container);

	const headerLogoLink = createElement('a', {
		href: '#',
		className: 'header__logo-link',
	});

	// container.append(headerLogoLink);

	// const logo = new Image();
	// logo.src = 'img/logo.svg';
	// logo.className = 'header__logo';
	// logo.alt = 'Логотип сервиса Brain Cards';
	const logo = createElement('img', {
		src: 'img/logo.svg',
		className: 'header__logo',
		alt: 'Логотип сервиса Brain Cards',
	});

	headerLogoLink.append(logo);

	const headerTitle = createElement('h2', {
		className: 'header__subtitle',
		textContent: 'Категории',
	});

	const headerBtn = createElement('button', {
		className: 'header__btn',
		textContent: 'Добавить категорию',
		type: 'button',
	});

	container.append(headerLogoLink, headerTitle, headerBtn);

	const updateHeaderTitle = (title) => {
		headerTitle.textContent = title;
	};

	return { headerLogoLink, headerBtn, updateHeaderTitle };
};

/*
	<header class="header">
			<div class="container header__container">
				<a class="header__logo-link" href="#">
					<img class="header__logo" src="img/logo.svg" alt="Логотип сервиса Brain Cards">
				</a>
				<h2 class="header__subtitle">Категории</h2>
				<button class="header__btn">Добавить категорию</button>
			</div>
		</header>
*/