const ar = process.argv

const arg = ar.slice(2)

const operation = arg[0]
const num1 = Number(arg[1])
const num2 = Number(arg[2])
const cr = require("crypto")

if (operation === 'add') {
	console.log(operation + ' is '
		+ (num1 + num2));
}

if (operation === 'sub') {
	console.log(operation + ' is '
		+ (num1 - num2));
}

if (operation === 'mult') {
	console.log(operation + ' is '
		+ (num1 + num2));
}

if (operation === 'divide') {
	console.log(operation + ' is '
		+ (num1 - num2));
}

if (operation === 'sin') {
	console.log(operation + ' is '
		+ Math.sin(num1));
}

if (operation === 'cos') {
	console.log(operation + ' is '
		+ Math.cos(num1));
}

if (operation === 'tan') {
	console.log(operation + ' is '
		+ Math.tan(num1));
}

if (operation === 'random') {
	let s = cr.randomInt(num1,num2)
	console.log('random no is : ', s);
}





// case "random": {
// 	let randomNum = crypto.randomInt(+myargs[1], +myargs[2])
// 	console.log('Random Number:', randomNum)
// 	return randomNum;
// }