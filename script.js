$(document).ready( function(){
	
	//creating our fruit objects
	var appleFruit = {name: 'Apple', price: 0, quantity: 0};
	var orangeFruit = {name: 'Orange', price: 0, quentity: 0};
	var bananaFruit = {name: 'Banana', price: 0, quantity: 0};
	// var grapesFruit = {name: 'Grapes', price: 0, quantity: 0};
	var pearsFruit = {name: 'Pear', price: 0, quantity: 0};
	
	appleFruit.price =  initialSetPrice();
	orangeFruit.price = initialSetPrice();
	bananaFruit.price = initialSetPrice();
	// grapesFruit.price = initialSetPrice();
	pearsFruit.price = initialSetPrice();
var fruitArray = [appleFruit, orangeFruit, bananaFruit, pearsFruit];

for (var i = 0; i<fruitArray.length; i++){
		
		console.log("This is the price for: " + fruitArray[i].name + " " + upOrDown(fruitArray[i]));
		//$('#fruits').children().remove();
		divName = fruitArray[i].name;
		$('#fruits').append('<div class='+divName+'></div>');
		var $el = $('#fruits').children().last();
		$el.append('<p>Fruit: ' + fruitArray[i].name + '</p>');
		$el.append('<p>Price: ' + fruitArray[i].price + '</p>');
		}

	// var fruitPrice = (randomNumber(5, 999)/100);
	// console.log(fruitPrice);
	// $('#fruits').append('<div class="apple"></div>');
	// //putting the apple on the DOM
	// $('#fruits').append('<div class="apple"></div>');
	// var $el = $('#fruits').children().last();
	// $el.append('<p>Fruit: ' + appleFruit.name + '</p>');
	// $el.append('<p>Price: ' + appleFruit.price + '</p>');

	// //putting the orange on the DOM
	// $('#fruits').append('<div class="orange"></div>');
	// var $el = $('#fruits').children().last();
	// $el.append('<p>Fruit: ' + orangeFruit.name + '</p>');
	// $el.append('<p>Price: ' + orangeFruit.price + '</p>');

	// //putting the banana on the DOM
	// $('#fruits').append('<div class="banana"></div>');
	// var $el = $('#fruits').children().last();
	// $el.append('<p>Fruit: ' + bananaFruit.name + '</p>');
	// $el.append('<p>Price: ' + bananaFruit.price + '</p>');

	// //putting the grapes on the DOM
	// // $('#fruits').append('<div class="grapes"></div>');
	// // var $el = $('#fruits').children().last();
	// // $el.append('<p>Fruit: ' + grapesFruit.name + '</p>');
	// // $el.append('<p>Price: ' + grapesFruit.price + '</p>');

	// //putting the pears on the DOM
	// $('#fruits').append('<div class="pears"></div>');
	// var $el = $('#fruits').children().last();
	// $el.append('<p>Fruit: ' + pearsFruit.name + '</p>');
	// $el.append('<p>Price: ' + pearsFruit.price + '</p>');

//interval function for setting the price refresh
setInterval(function(){
	$('#fruits').empty();
	for (var i = 0; i<fruitArray.length; i++){
		
		console.log("This is the price for: " + fruitArray[i].name + " " + upOrDown(fruitArray[i]));
		//$('#fruits').children().remove();
		divName = fruitArray[i].name;
		$('#fruits').append('<div class='+divName+'></div>');
		var $el = $('#fruits').children().last();
		$el.append('<p>Fruit: ' + fruitArray[i].name + '</p>');
		$el.append('<p>Price: ' + fruitArray[i].price + '</p>');
		}	
 }, 15000);


});

//random number function for calculating price shifts
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function initialSetPrice() {
	var y = (randomNumber(50, 999)/100);
	return y
}

function upOrDown (object){
	var coinFlip = randomNumber(1,2);
	if (coinFlip == 1) {
		return priceAdd(object);
	} else {
		return priceSubtract(object);
	}
}

function priceAdd(object){
	var adjustment = randomNumber(1, 50)/100;
	object.price += adjustment;
	if (object.price > 9.99) {
		object.price = 9.99;
	} else if (object.price < 0.50) {
		object.price = 0.50;
	}
	//appleFruit.price = price;
	return object.price;
}

function priceSubtract(object){
	var adjustment = randomNumber(1, 50)/100;
	object.price -= adjustment;
	if (object.price > 9.99) {
		object.price = 9.99;
	} else if (object.price < 0.50) {
		object.price = 0.50;
	}
	//appleFruit.price = price;
	return object.price;
}








