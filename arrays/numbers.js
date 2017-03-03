//write a function that returns only integers from an array
//must return a new array
function numOnly(mixArray) {
	var newArray = [];
	for(i = 0; i <= mixArray.length; i++) {
		if(typeof mixArray[i] == 'number') {
			newArray.push(mixArray[i]);
		}
	}
	return newArray;
}

console.log(numOnly([2, 'dog', 'cat', 3, 4]));
