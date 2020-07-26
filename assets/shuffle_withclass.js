class Shuffle {
	constructor() {
		this.cards = document.querySelectorAll(".card");
                this.eles = [...Array(this.cards.length).keys()];
                this.positions = [];
	}
	
	_shuffleElements = (arr) => { 
                for (let i = arr.length - 1; i > 0; i--) {
                        const rand = Math.floor(Math.random() * (i + 1));
                        [arr[i], arr[rand]] = [arr[rand], arr[i]];
                }
                return arr;
        }

        _setDefaultPositions = (cards) => {
                cards.forEach( (ele, index) => {
                        ele.style.top = ele.offsetTop + "px";
                        ele.style.left = ele.offsetLeft + "px";
                        this.positions.push({left: ele.style.left, top: ele.style.top});
                });
        }
        _animate = (cards, newPositions) => {
                cards.forEach((card, index) => {
                        cards[newPositions[index]].style.top = this.positions[index].top;
                        cards[newPositions[index]].style.left = this.positions[index].left;
                        cards[newPositions[index]].style.position = 'absolute';
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
