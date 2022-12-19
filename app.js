const cardArray = [
    {
    name: 'cactus',
    img: 'images/cactus.png',
    },
    {
    name: 'dino',
    img: 'images/dino.png',
    },
    {
    name: 'moon',
    img: 'images/moon.png',
    },
    {
    name: 'rabbit',
    img: 'images/rabbit.png',
    },
    {
        name: 'sun',
        img: 'images/sun.png'
    },
    {
    name: 'tree',
    img: 'images/tree.png'
    },
    {
    name: 'white',
    img: 'images/white.png'
    },
    {
    name: 'cactus',
    img: 'images/cactus.png'
    },
    {
    name: 'dino',
    img: 'images/dino.png'
    },
    {
    name: 'moon',
    img: 'images/moon.png'
    },
    {
    name: 'rabbit',
    img: 'images/rabbit.png'
    },
    {
    name: 'sun',
    img: 'images/sun.png'
    },
    {
    name: 'tree',
    img: 'images/tree.png'
    },
    {
    name: 'white',
    img: 'images/white.png'
    },
    {
    name: 'cactus',
    img: 'images/cactus.png'
    },
    {
    name: 'dino',
    img: 'images/dino.png'
    },
    {
    name: 'moon',
    img: 'images/moon.png'
    },
    {
    name: 'rabbit',
    img: 'images/rabbit.png'
    },
    {
    name: 'sun',
    img: 'images/sun.png'
    },
    {
    name: 'tree',
    img: 'images/tree.png'
    },
    {
    name: 'white',
    img: 'images/white.png'
    },
]

cardArray.sort(() => 8.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}
createBoard()