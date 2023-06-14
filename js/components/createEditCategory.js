import { createElement } from "../helper/createElement.js";

const TITLE = 'Введите название категории';

export const createEditCategory = (app) => {
	const editCategory = createElement('section', {
		className: 'edit section-offset',
	});

	const container = createElement('div', {
		className: 'container edit__container',
	});

	const title = createElement('h2', {
		className: 'edit__title',
		contentEditable: true,
		title: 'Можно редактировать',
	});

	const table = createElement('table', {
		className: 'edit__table table',
	});

	const thead = createElement('thead');

	const trThead = createElement('tr');

	const tableHeadCellMain = createElement('th', {
		className: 'table__cell',
		textContent: 'main',
	});

	const tableHeadCellSecond = createElement('th', {
		className: 'table__cell',
		textContent: 'second',
	});

	const tableHeadCellEmpty = createElement('th', {
		className: 'table__cell',
	});

	const tbody = createElement('tbody');

	const btnWrapper = createElement('div', {
		className: 'edit__btn-wrapper',
	});

	const btnAddRow = createElement('button', {
		className: 'edit__btn edit__add-row',
		textContent: 'Добавить пару',
	});

	const btnSave = createElement('button', {
		className: '	edit__btn edit__save',
		textContent: 'Сохранить категорию',
	});

	const btnCancel = createElement('button', {
		className: '	edit__btn edit__save',
		textContent: 'Отмена',
	});

	editCategory.append(container);
	container.append(title, table, btnWrapper);
	table.append(thead, tbody);
	thead.append(trThead);
	trThead.append(tableHeadCellMain, tableHeadCellSecond, tableHeadCellEmpty);
	btnWrapper.append(btnAddRow, btnSave, btnCancel);

	const createTRCell = (dataArr) => {
		const tr = createElement('tr');

		const tableCellMain = createElement('th', {
			className: 'table__cell table__cell_one',
			textContent: dataArr[0],
			contentEditable: true,
		});

		const tableCellSecond = createElement('th', {
			className: 'table__cell table__cell_two',
			textContent: dataArr[1],
			contentEditable: true,
		});

		const tableCellDel = createElement('th', {
			className: 'table__cell',
		});

		const delRow = createElement('button', {
			className: 'table__del',
			textContent: 'x',
		});

		delRow.addEventListener('click', () => {
			if (confirm('Вы уверены, что хотите удалить строку?')) {
				tr.remove();
			}
		});

		tableCellDel.append(delRow);
		tr.append(tableCellMain, tableCellSecond, tableCellDel);

		return tr;
	};

	/*
		<section class="edit section-offset">
			<div class="container edit__container">
				<h2 class="edit__title" contenteditable="true" title="Можно редактировать">Семья
				</h2>
				<table class="edit__table table">
					<thead>
						<tr>
							<th class="table__cell">main</th>
							<th class="table__cell">second</th>
							<th class="table__cell"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="table__cell table__cell_one" contenteditable="true">брат</td>
							<td class="table__cell table__cell_two" contenteditable="true">brother</td>
							<td class="table__cell"><button class="table__del">x</button></td>
						</tr>
					</tbody>
				</table>
				<div class="edit__btn-wrapper">
					<button class="edit__btn edit__add-row">Добавить пару</button>
					<button class="edit__btn edit__save" data-id="bczp358gktzy">Сохранить
						категорию</button>
					<button class="edit__btn edit__cancel">Отмена</button>
				</div>
			</div>
		</section>
	*/

	const clearTitle = () => {
		if (title.textContent === TITLE) {
			title.textContent = '';
		}
	};

	const checkTitle = () => {
		if (title.textContent === '') {
			title.textContent = TITLE;
		}
	};

	title.addEventListener('focus', clearTitle);
	title.addEventListener('blur', checkTitle);

	btnAddRow.addEventListener('click', () => {
		const emptyRow = createTRCell(['', '']);
		tbody.append(emptyRow);
	});

	const mount = (data = { title: TITLE, pairs: [] }) => {
		tbody.textContent = '';
		title.textContent = data.title;

		if (title.textContent === TITLE) {
			title.classList.add('edit__title_change');
		} else {
			title.classList.remove('edit__title_change');
		}

		const rows = data.pairs.map(createTRCell);
		const emptyRow = createTRCell(['', '']);

		tbody.append(...rows, emptyRow);
		app.append(editCategory);
	};

	const unmount = () => {
		editCategory.remove();
	};

	return { mount, unmount };
};


