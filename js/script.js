var input = document.getElementById('input');
var clearBtn = document.getElementById('clear');
var form = document.getElementById('temp-form');
var select = document.getElementById('scale-select');
var result = document.querySelector('#result p');
var temp, newTemp, scale, letter;

form.addEventListener('submit', function(e) {
	e.preventDefault();
	temp = input.value;
	scale = select.value;

	switch(scale) {
		case 'farToCel':
			newTemp = (temp - 32) * (5 / 9);
			letter = 'C';
			break;
		case 'farToKel':
			newTemp = (temp + 459.67) * (5 / 9);
			letter = 'K';
			break;
		case 'celToFar':
			newTemp = (temp * (9 / 5)) + 32;
			letter = 'F';
			break;
		case 'celToKel':
			newTemp = (temp + 273.15);
			letter = 'K';
			break;
		case 'kelToFar':
			newTemp = (temp * (9 / 5)) - 459.67;
			letter = 'F';
			break;
		case 'kelToCel':
			newTemp = (temp - 273.15);
			letter = 'C';
			break;
	}

	result.textContent = newTemp + '\xB0 ' + letter;
});

var clearForm = function() {
	temp = '';
	newTemp = '';
	result.textContent = '';
	input.value = '';
}

clearBtn.addEventListener('click', clearForm);

