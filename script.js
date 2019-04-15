var budg = +prompt('Ваш бюджет?', '');
var name = prompt('Название вашего магазина', '');
var sG1 = prompt('что будем продавать?', '');
var sG2 = prompt('что будем продавать?', '');
var sG3 = prompt('что будем продавать?', '');
var dayBudg = budg / 30;
var mainList = {
	budg,
	name,
	shopGoods: [sG1, sG2, sG3] ,
	employers: {
		empName: ['John', 'Bob'],
		empAge: [22, 25]
	}
	
	}
console.log(mainList.shopGoods[1]);
console.log(mainList.employers.empName[0]);
alert (dayBudg + "r");


