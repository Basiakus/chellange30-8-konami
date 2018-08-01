
const answer = document.querySelector('#answer');
const pressed = [];
const love = 'love';
console.log(love.length);
window.addEventListener('keyup', function(e) {
	pressed.push(e.key);
	console.log(pressed);
	pressed.splice(-love.length - 1, pressed.length - love.length);
	answer.innerHTML = pressed.join('');
	if(pressed.join('').includes(love)) {
		cornify_add();
	}


});