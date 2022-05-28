document.addEventListener('DOMContentLoaded', () =>  {

    // card options
    const cardArray = [
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png' 
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'goldfish',
            img: 'images/goldfish.png'
        },
        {
            name: 'goldfish',
            img: 'images/goldfish.png'
        }
        
    ]


cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const displayResults = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// create game board 
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/square.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}



createBoard()

// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/square.png')
        cards[optionTwoId].setAttribute('src', 'images/square.png')
        alert('Sorry, try again...')
    }
    cardsChosen = []
    cardsChosenId = []
    displayResults.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        displayResults.textContent = 'Congratulations! You found them all!'
    }
}

// flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)

    }
}



})