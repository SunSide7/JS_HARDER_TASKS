let str = "урок-3-был слишком легким";
let strLength = str.length;
let newStr = "";
let strWord = "";

let arr = [20, 33, 1, "Человек", 2, 3];
let arrLength = arr.length;
let sum = 0;



function printFirstVersionOfStr () {
	document.write(str + "<br>");
}

function changeStr () {
	for (i = 0; i < strLength; i++) {
		if (str[i] == "-") {
			newStr += str[i] = " ";
		} else {
			newStr += str[i];
		}; 
	};
	document.write(newStr + "<br>");
};

function changeNewStr () {
	let newStrLength = newStr.length
	for (i = 18; i < newStrLength; i++) {
		if (i == 23 || i == 24) {
			strWord += newStr[i] = "о";
		} else {
			strWord += newStr[i];
		}
	};
	document.write(strWord + "<br>");
};

function calculating () {
	for (i = 0; i < arrLength; i++) {
		if (typeof(arr[i]) == "number") {
			sum += arr[i] ** 3
		}
	}
	// sum = sum ** 0.5;
	sum = Math.sqrt(sum);
	console.log(sum); 
}

function smartStringFunction (argument) {

	if (typeof(argument) !== "string") {
		alert("Введенные данные не являются строкой!");
	};
	let argumentLength = argument.length;
	let argumentChanged = "";

	for (i = 0; i < argumentLength; i++) {
		if (i == 0 && argument[i] == " ") {
			argumentChanged += argument[0] = "";
		} else if (i == (argumentLength - 1) && argument[argumentLength - 1] == " ") {
			argumentChanged += argument[argumentLength - 1] = "";
		} else if (i == 50) {
			argumentChanged += "...";
			break;
		} else {
			argumentChanged += argument[i];
		}
	}
	console.log(argumentChanged);
}



//*********************************
printFirstVersionOfStr();
changeStr();
changeNewStr();
calculating();
smartStringFunction("123456789|123456789|123456789|123456789|123456789|123456789|");
smartStringFunction(" пробелы в начале и в конце строки удалены ");
// smartStringFunction(prompt());


// document.write(newStr);

// document.write(str);
// console.log(str.length)




