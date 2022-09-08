const now = new Date();
// Число, где 0 - это Январь
let currMonth = now.getMonth();
//Число, где 0 - это Воскресенье
const currDay = now.getDay();
let currYear = now.getFullYear();
const monthAndYear = document.querySelector(".bottom_row_date");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const Months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

const Days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
]


renderCalendar(currYear, currMonth)

prev.addEventListener('click', () => {
    currYear = (currMonth === 0) ? currYear - 1 : currYear
    currMonth = (currMonth === 0) ? 11 : currMonth - 1
    renderCalendar(currYear, currMonth)
})

next.addEventListener('click', () => {
    currYear = (currMonth === 11) ? currYear + 1 : currYear
    currMonth = (currMonth === 11) ? 0 : currMonth + 1
    console.log('Нажато некст')
    renderCalendar(currYear, currMonth)
})

function renderCalendar(year, month) {
    let startOfMonth = new Date(year, month).getDay();
    let numOfDays = 32 - new Date(year, month).getDate();
    let renderNum = 1
    let renderDay = 0
    // Для подсчета столбцов в ряду, чтобы заполнять последнюю строку пустыми дивами
    let numOfColoumns = 0
    let table = document.querySelector(".table")
    monthAndYear.textContent = `${Months[currMonth]} ${currYear}`
    table.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startOfMonth - 1) {
                let cell = document.createElement("div")
                cell.classList.add("empty")
                cell.textContent = `${Days[renderDay]}`
                row.append(cell)
                renderDay++
                numOfColoumns++
            } else if (renderNum > numOfDays && numOfColoumns != 7) {
                let cell = document.createElement("div")
                cell.classList.add("empty")
                row.append(cell)
                numOfColoumns++
                
            } else {
                if (i === 0) {
                    let cell = document.createElement("div")
                    cell.classList.add("cell")
                    cell.textContent = `${Days[renderDay]}, ${renderNum}`
                    row.append(cell)
                    renderNum++
                    renderDay++
                    numOfColoumns++
                } else {
                    let cell = document.createElement("div")
                    cell.classList.add("cell")
                    cell.textContent = `${renderNum}`
                    row.append(cell)
                    renderNum++
                    numOfColoumns++
                }
            }
        }
        numOfColoumns = 0;
        table.append(row);
    }
}
