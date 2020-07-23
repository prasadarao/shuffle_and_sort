(function() {
	let cards = document.querySelectorAll(".card");
	let eles = [...Array(cards.length).keys()];
	let positions = [];

	function shuffleElements(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			const rand = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[rand]] = [arr[rand], arr[i]];
		}
		return arr;
	}

	function setDefaultPositions(cards) {
		cards.forEach( (ele, index) => {
			ele.style.top = ele.offsetTop + "px";
			ele.style.left = ele.offsetLeft + "px";
			positions.push({left: ele.style.left, top: ele.style.top});
		});
	}
	function animate(cards, newPositions) {
		cards.forEach((card, index) => {
			cards[newPositions[index]].style.top = positions[index].top;
			cards[newPositions[index]].style.left = positions[index].left;
			cards[newPositions[index]].style.position = 'absolute';
		});
	}

	document.querySelector("#shuffle").onclick = function() {
		let newPositions = shuffleElements(eles);
		animate(cards, newPositions);
	}

	document.querySelector("#sort").onclick = function() {
		eles = eles.sort();
		animate(cards, eles);
	}

	function init() {
		setDefaultPositions(cards);	
	}
		
	window.onload = init;
})();