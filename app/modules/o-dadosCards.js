// import f-constructorCards from './modules/f-constructorCards.js';
import Card from './f-constructorCard.js';

// creat object to hold new card data
let arrayCards = [];

// create 3 new cards and add to arrayCards
const card1 = new Card('card-0001', 'Card 1', 'Card 1 Description');
const card2 = new Card('card-0002', 'Card 2', 'Card 2 Description');
const card3 = new Card('card-0003', 'Card 3', 'Card 3 Description');
arrayCards.push(card1, card2, card3);

// log arrayCards
console.log(arrayCards);


