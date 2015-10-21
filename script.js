var appleFruit = {name: 'apple', price: 0};
var orangeFruit = {name: 'orange', price: 0};
var bananaFruit = {name: 'banana', price: 0};
// var grapesFruit = {name: 'Grapes', price: 0, quantity: 0};
var pearsFruit = {name: 'pear', price: 0};
var wallet = 100;
var appleBought = {name: 'apple', quantity: 0};
var orangeBought = {name: 'orange', quantity: 0};
var bananaBought = {name: 'banana', quantity: 0};
var pearsBought = {name: 'pear', quantity: 0};
var fruitBasket = [appleBought, orangeBought, bananaBought, pearsBought];
var fruitCost = 0;
var fruitName = '';

$(document).ready( function(){
	
	//creating our fruit objects
	
	
	appleFruit.price =  initialSetPrice();
	orangeFruit.price = initialSetPrice();
	bananaFruit.price = initialSetPrice();
	// grapesFruit.price = initialSetPrice();
	pearsFruit.price = initialSetPrice();
	var fruitArray = [appleFruit, orangeFruit, bananaFruit, pearsFruit];
	//initialization loop to establish the starting fruit prices
	for (i = 0; i<fruitArray.length; i++){
		divName = fruitArray[i].name;
		$('#fruits').append('<div class='+divName+'></div>');
		var $el = $('#fruits').children().last();
		$el.append('<p>Fruit: ' + fruitArray[i].name + '</p>');
		$el.append('<p>Price: ' + fruitArray[i].price + '</p>');
		$el.append('<button class="buyit">Buy It</button>');
		$('.'+divName).data('name', fruitArray[i].name);
		$('.'+divName).data('price', fruitArray[i].price);
		}

	//The click listener
	$('#fruits').on('click', '.buyit', function(){
	fruitCost = $(this).parent().data('price');
	//console.log(fruitCost);
	fruitName = $(this).parent().data('name');
	//console.log(fruitName);

	});

	//interval function for setting the price refresh
	setInterval(function(){
		$('#fruits').empty();
		for (i = 0; i<fruitArray.length; i++){
			upOrDown(fruitArray[i]);
			divName = fruitArray[i].name;
			$('#fruits').append('<div class='+divName+'></div>');
			var $el = $('#fruits').children().last();
			$el.append('<p>Fruit: ' + fruitArray[i].name + '</p>');
			$el.append('<p>Price: ' + fruitArray[i].price + '</p>');
			$el.append('<button class= "buyit">Buy It</button>');
			$('.'+divName).data('name', fruitArray[i].name);
			$('.'+divName).data('price', fruitArray[i].price);	
			}	
	 }, 7000);


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

function buyFruit (object) {
	if (object.price < wallet){
		getFruit();
	} else {
		alert ("Yo! Not enough dough fool! Only $" + wallet + " remaining");
	}
}

function getFruit () {
	for (var i = 0; i < )
}






