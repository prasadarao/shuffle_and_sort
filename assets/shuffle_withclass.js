class Shuffle {
	constructor() {
		this.cards = document.querySelectorAll(".card");
                this.eles = [...Array(this.cards.length).keys()];
	}
	
	_shuffleElements = (arr) => { 
                for (let i = arr.length - 1; i > 0; i--) {
                        const rand = Math.floor(Math.random() * (i + 1));
                        [arr[i], arr[rand]] = [arr[rand], arr[i]];
                }
                return arr;
        }

        _setDefaultPositions = (cards) => {
                cards.forEach((ele, index) => {
			ele.style.order = index;
                });
        }
        _animate = (cards, newPositions) => {
                cards.forEach((card, index) => {
                        card.style.order = newPositions[index];
                });
        }

        shuffle(){
                let newPositions = this._shuffleElements(this.eles);
                this._animate(this.cards, newPositions);
        }

        sort() {
                let newPositions = this.eles.sort(); 
                this._animate(this.cards, newPositions);
        }

	init() {
                this._setDefaultPositions(this.cards);
                document.querySelector("#shuffle").onclick = this.shuffle.bind(this);
                document.querySelector("#sort").onclick = this.sort.bind(this);
        }
}

let shuffle = new Shuffle();
shuffle.init();
