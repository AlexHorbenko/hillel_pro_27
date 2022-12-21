// Реалізовуємо форму для реєстрації.
// Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”

// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.


const formToTable = document.querySelector('.button');
const form = document.querySelector('#form');
const elements = form.elements;
const table = document.createElement('table');


formToTable.addEventListener('click', (event) => {
    form.classList.add('hide');
    for (let i = 1; i < elements.length-1; i++) {

        let row = document.createElement('tr');
        let cellOne = document.createElement('td');
        let cellTwo = document.createElement('td');
        cellOne.innerText = elements[i].dataset.key;

        switch (elements[i].type) {
            case 'radio':
                if (elements[i].checked) {
                    cellTwo.innerText = elements[i].value;
                    row.append(cellOne, cellTwo);
                    table.append(row);
                };
                break;
            case 'checkbox':
                if (elements[i].checked) {
                    cellTwo.innerText = elements[i].name;
                    row.append(cellOne, cellTwo);
                    table.append(row);
                };
                break;
            default:
                cellTwo.innerText = elements[i].value;
                row.append(cellOne, cellTwo);
                table.append(row);
        };
    }
    document.body.append(table);
})
