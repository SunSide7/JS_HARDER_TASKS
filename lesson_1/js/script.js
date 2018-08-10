let number = 33721;
let numberToString;
let splitted;
let lenghtOfSplitted;
let numberMultipleBusket = 1;
let exponentiation = 1;
let firstTwoNumbersFromExponentiation;


// *****************************

numberToString = (number + "");
numberToString = numberToString.length;
// console.log("Количество цифр в заданном числе: " + numberToString);

splitted = (number + "").split('');



for (i = 0; i < numberToString; i++) {
	numberMultipleBusket = numberMultipleBusket * splitted[i];
}
console.log("Произведение всех чисел числа 33721: " + numberMultipleBusket);


// exponentiation = Math.pow(numberMultipleBusket, 3);

// for (i = 0; i < 3; i++) {
// 	exponentiation *= numberMultipleBusket;
// }

exponentiation = numberMultipleBusket ** 3;

console.log("Возведение в 3 степень: " + exponentiation);

exponentiation = (exponentiation + "").split('');
firstTwoNumbersFromExponentiation = parseInt(exponentiation[0] + exponentiation[1]);
console.log("Первые две цифры: " + firstTwoNumbersFromExponentiation);










