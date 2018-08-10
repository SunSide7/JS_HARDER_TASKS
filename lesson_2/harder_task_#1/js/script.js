let weekArr = ['Понедельник', 'Вторние', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
let weekArrItemsNumber = weekArr.length;

for (i = 0; i < weekArrItemsNumber; i++) {

	if (weekArr[i] == 'Суббота' || weekArr[i] == 'Воскресение') {
		document.write('<b>' + weekArr[i] + '</b>' + '<br>');
	} else if (weekArr[i] == 'Пятница') {
		document.write('<em>' + weekArr[i] + '</em>' + '<br>');
	} else {
		document.write(weekArr[i] + '<br>');
	}
}




let arr = ['56453456', '1234532758', '35785654', '75876548', '48583237', '75678', '8456782'];
let arrItemsNumber = arr.length;


for (i = 0; i < arrItemsNumber; i++) {
	let arrItemSplit = arr[i].split('');
	if (arrItemSplit[0] == 3 || arrItemSplit[0] == 7) {
		document.write('<br>' + arr[i]);
	}
	
}
