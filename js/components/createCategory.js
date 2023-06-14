import { createElement } from "../helper/createElement.js";
import { declOfNum } from "../helper/declOfNum.js";

export const createCategory = (app) => {
	const container = createElement('div', {
		className: 'container',
	});

	const category = createElement('section', {
		className: 'category section-offset',
	});

	category.append(container);

	const categoryList = createElement('ul', {
		className: 'category__list',
	});

	container.append(categoryList);

	const createCategoryCard = (data) => {
		const item = createElement('li', {
			className: 'category__item',
		});

		item.dataset.id = data.id;

		const btnCard = createElement('button', {
			className: 'category__card',
		});

		const cardTitle = createElement('span', {
			className: 'category__title',
			textContent: data.title,
		});

		const cardPairs = createElement('span', {
			className: 'category__pairs',
			textContent: declOfNum(data.length, ['пара', 'пары', 'пар'])
		});

		btnCard.append(cardTitle, cardPairs);

		const btnEdit = createElement('button', {
			className: 'category__btn category__edit',
			ariaLabel: 'редактировать',
		});

		const btnDelete = createElement('button', {
			className: 'category__btn category__del',
			ariaLabel: 'удалить',
		});

		item.append(btnCard, btnEdit, btnDelete);

		return item;
	};

	const mount = (data) => {
		categoryList.textContent = '';
		const cards = data.map(createCategoryCard);
		categoryList.append(...cards);
		app.append(category);
	};

	const unmount = () => {
		category.remove();
	};

	return { mount, unmount, categoryList };
};

/*
	<section class="category section-offset">
			<div class="container">
				<ul class="category__list">
					<li class="category__item" data-id="bc2iv1cwi6ht">
						<button class="category__card">
							<span class="category__title">Косвенные местоимения</span>
							<span class="category__pairs">7 пар</span>
						</button>
						<button class="category__btn category__edit"
							aria-label="редактировать"></button>
						<button class="category__btn category__del" aria-label="удалить"></button>
					</li>
*/