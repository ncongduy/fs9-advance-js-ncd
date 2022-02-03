// Your code here
let number = 1;

function printNumber() {
	if (number > 1e6) {
		clearInterval(validInterval);
		return;
	} else {
		const flag = number + 1000;
		while (number <= 1e6) {
			console.log(number);
			number++;

			if (number === flag) break;
		}
	}
}

const validInterval = setInterval(printNumber, 2000);

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
	alert('Well done! Browser does not hang.');
});
