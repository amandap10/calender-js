import { getCurrentMonth, getNextMonth, formatDate, getPrevMonth, startOfMonth, startOfWeek, addDay } from './functions.js';

const currentMonth = getCurrentMonth();

const headerElement = document.querySelector("header");
const tbodyElement = document.querySelector("tbody");

headerElement.innerHTML = `

    <a href="?month=${formatDate(getPrevMonth(currentMonth))}">Anterior</a>
    <h1>${currentMonth.toLocaleString(`default`, {month:'long'})} ${currentMonth.getFullYear()}</h1>
    <a href="?month=${formatDate(getNextMonth(currentMonth))}">Próximo</a>

`;

let startDate = startOfWeek(startOfMonth(currentMonth));

for (let row =0; row < 6; row++) {

    const tr = document.createElement("tr");

    for (let column = 0; column < 7; column++) {

        const td = document.createElement("td");

        td.innerHTML = startDate.getDate();
        
        if (
            currentMonth.getFullYear() !== startDate.getFullYear() ||
            currentMonth.getMonth() !== startDate.getMonth()
        ) {
            td.classList.add('other-month');
        }

        tr.append(td);

        startDate = addDay(startDate);

    }

    
    tbodyElement.append(tr);

}