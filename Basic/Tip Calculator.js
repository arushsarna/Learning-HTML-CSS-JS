function tipCalculator(){
  
food = prompt('how much did you pay for your food?');

tip = prompt('How much percentage do you wanna tip?')/100 *food;
total = Number(food) + Number(tip);
alert('Your total with tip will be :- ' + total);
}
tipCalculator();