//create a birthday countdown
//if its more than 30 days, print a sad message
//if its less than 30 days, print an excited message
//if its less than 5 days, get more excited
//Once it's your birthday, celebrate!
var daysUntilBirthday = 60;

for(daysUntilBirthday; daysUntilBirthday > 0; daysUntilBirthday--) {
	if(daysUntilBirthday <= 60 && daysUntilBirthday >= 30) {
		console.log(daysUntilBirthday + " days until my birthday..");
	} else if (daysUntilBirthday <= 29 && daysUntilBirthday >= 5) {
		console.log("OMG " + daysUntilBirthday + " days until my birthday!!!");
	} else if (daysUntilBirthday <= 4 && daysUntilBirthday >= 1) {
		console.log("SHITTT" + daysUntilBirthday + " days until my bday!");
	} else if (daysUntilBirthday == 0) {
		console.log("HORAYYY! It's my birthday!");
	}

}	
	


