var date = new Date();


let hours = date.getHours();
let minutes = date.getMinutes();
let secounds = date.getSeconds();
let dateNow = date.getDate();
let month = date.getMonth();
let fullYear = date.getFullYear();
let dayOfWeek = date.getDay();
let calendarDecore = document.querySelector(".calendar");
let timeDecore = document.querySelector(".time");
let dataDecore = document.querySelector(".data");
let inputData1 = document.getElementById('data-1');
let inputData2 = document.getElementById('data-2');
let inputResult = document.getElementById('result');

function addZeroSymbol() {
	for (i = 0; i < 10; i++) {
		if (month == i) {
			month = "0" + i;
		};
		if (dateNow == i) {
			dateNow = "0" + i;
		};
		if (secounds == i) {
			secounds = "0" + i;
		};
		if (minutes == i) {
			minutes = "0" + i;
		};
		if (hours == i) {
			hours = "0" + i;
		};
	};
};

function russianWeekDaysNames() {
	for (i = 0; i < 7; i++) {
		if (dayOfWeek == 1) {
			dayOfWeek = "Понедельник";
		};
		if (dayOfWeek == 2) {
			dayOfWeek = "Вторник";
		};
		if (dayOfWeek == 3) {
			dayOfWeek = "Среда";
		};
		if (dayOfWeek == 4) {
			dayOfWeek = "Четверг";
		};
		if (dayOfWeek == 5) {
			dayOfWeek = "Пятница";
		};
		if (dayOfWeek == 6) {
			dayOfWeek = "Суббота";
		};
		if (dayOfWeek == 0) {
			dayOfWeek = "Воскресение";
		};

	};
};




addZeroSymbol();
russianWeekDaysNames();

let time = (hours + ":" + minutes + ":" + secounds);
let fullDate = (dateNow + ":" + month + ":" + fullYear);
let calendarDataNow = (fullDate + " " + dayOfWeek);


timeDecore.textContent = time;
dataDecore.textContent = calendarDataNow;



