// It's a array[] and inside{} it will be added objects.

const cardArray = [
    {
        name: 'bulbasaur0001',
        img: 'image/bulbasaur0001.png',
    },
    {
        name: 'ivysaur0002',
        img: 'image/ivysaur0002.png',
    },
    {
        name: 'venusaur0003',
        img: 'image/venusaur0003.png',
    },
    {
        name: 'charmander0004',
        img: 'image/charmander0004.png',
    },
    {
        name: 'charmeleon0005',
        img: 'image/charmeleon0005.png',
    },
    {
        name: 'charizard0006',
        img: 'image/charizard0006.png',
    },
    {
        name: 'squirtle0007',
        img: 'image/squirtle0007.png',
    },
    {
        name: 'wartortle0008',
        img: 'image/wartortle0008.png',
    },
    {
        name: 'blastoise0009',
        img: 'image/blastoise0009.png',
    },
    {
        name: 'bulbasaur0001',
        img: 'image/bulbasaur0001.png',
    },
    {
        name: 'ivysaur0002',
        img: 'image/ivysaur0002.png',
    },
    {
        name: 'venusaur0003',
        img: 'image/venusaur0003.png',
    },
    {
        name: 'charmander0004',
        img: 'image/charmander0004.png',
    },
    {
        name: 'charmeleon0005',
        img: 'image/charmeleon0005.png',
    },
    {
        name: 'charizard0006',
        img: 'image/charizard0006.png',
    },
    {
        name: 'squirtle0007',
        img: 'image/squirtle0007.png',
    },
    {
        name: 'wartortle0008',
        img: 'image/wartortle0008.png',
    },
    {
        name: 'blastoise0009',
        img: 'image/blastoise0009.png',
    },
]
/*
Embaralha os elementos do cardArray em uma ordem aleatória
A função de comparação retorna um valor positivo ou negativo aleatório, fazendo com que o sort() reorganize os elementos aleatoriamente.
*/
 cardArray.sort(() => 0.5 - Math.random());
 
 const gridDisplay = document.querySelector('#grid');
 const resultDisplay = document.querySelector('#result');
 let cardChosen = []
 let cardChosenIds = []
 const cardWon = []


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img') // Cria um novo elemento <img> para representar uma carta
        card.setAttribute('src', 'image/pikachu0025.png')
        card.setAttribute('data-id', i) // Atribui um ID único a cada carta para referência futura
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard() // Executa a função para criar e exibir o tabuleiro de cartas

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'image/pikachu0025.png')
        cards[optionTwoId].setAttribute('src', 'image/pikachu0025.png')
        alert('You clicked the same card!!!');
    }

    console.log('Check for Match!!!');
    if (cardChosen[0] === cardChosen[1]) {
        alert('You found a Match!!!')
        cards[optionOneId].setAttribute('src', 'image/ditto0132.png')
        cards[optionTwoId].setAttribute('src', 'image/ditto0132.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'image/pikachu0025.png')
        cards[optionTwoId].setAttribute('src', 'image/pikachu0025.png')
        alert('Sorry :( Try Again!!!')
    }
    resultDisplay.textContent = cardWon.length
    cardChosen = []
    cardChosenIds = []

    if (cardWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = 'Congratulations!!! You caught them all!!!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}