import { createElement } from "../helper/createElement.js";

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

		const card = createElement('button', {
			className: 'category__card',
		});

		const cardTitle = createElement('span', {
			className: 'category__title',
			textContent: data.title,
		});

		const cardPairs = createElement('span', {
			className: 'category__pairs',
			textContent: `${data.length} пар${data.length === 1 ? 'а' : data.length < 5 ?
				'ы' : ''}`,
		});

		card.append(cardTitle, cardPairs);

		const editBtn = createElement('button', {
			className: 'category__btn category__edit',
			// aria-label: 'редактировать',
		});

		const deleteBtn = createElement('button', {
			className: 'category__btn category__del',
			// aria-label: 'удалить',
		});

		item.append(card, editBtn, deleteBtn);

		return item;
	};

	const mount = (data) => {
		categoryList.textContent = '';
		app.append(category);
		const cards = data.map(createCategoryCard);
		categoryList.append(...cards);
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