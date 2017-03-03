//Use a for loop to multiply a penny each day for 30 days
//get the total amount on the 30th day
var days = 30;
var pennies = 0.01;

for(i = 1;i <= 30; i++) {
	console.log("On day " + i + " The servant currently has: " + (pennies * 100.00) + " pennies");
	pennies *= 2;
}

console.log("On the last day, the servant had " + (pennies / 100) + " dollars.");
