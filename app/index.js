// import modules
import getDateTime from './modules/f-getDateTime.js';
import Card from './modules/f-constructorCard.js';

// creat object to hold new card data
let arrayCards = [];


///////////////////////////////////////////////////////////////////////////////////////
////// tring to create a html template for the card using document.createElement() method//////

// create card html template
// const card = document.createElement('li');
// card.classList.add('card');
// card.innerHTML = `
//     <img class="card-image" src="./assets/eggsB.jpg" alt="image">
//     <h2 class="card-title">Title: card-0000</h2>
//     <p class="card-description">Description: Este é um card de exemplo para ser clonado</p>
//     <div class="card-footer">
//         <p class="card-date">Date: 00/00/0000</p>
//         <p class="card-time">Time: 00:00:00</p>
//     </div>
// `;

///////////////////////////////////////////////////////////////////////////////////////


// get element from dom and clone to add a new card item to the list
const card = document.querySelector('.card');

// get the list element
const list = document.querySelector('#cards-ulist');

// add a new card item to the list by cloning the card element, adding a new id and appending it to the list; edit the new card item title and description for testing
const addCard = () => {
    const newCard = card.cloneNode(true);
    // set newCard id by incrementing the last card id number, number format is 0000
    newCard.id = 'card-' + (parseInt(list.firstElementChild.id.slice(5)) + 1).toString().padStart(4, '0');
    console.log(newCard.id);
    // set new card title to new card id and current time stamp (ms) for testing
    const newCardTitle = newCard.querySelector('.card-title');
    newCardTitle.innerHTML = 'New ' + newCard.id + ' ' + getDateTime;
    console.log(newCardTitle.innerHTML);
    // set description to new card for testing
    newCard.querySelector('.card-description').innerHTML = 'New Card Description';
    // append new card to the list
    // list.appendChild(newCard);
    list.insertBefore(newCard, list.firstElementChild);

}
// test addCard function
addCard();
addCard();



// // testing addCard function
// // create 3 new cards and add to arrayCards
// const card1 = new Card('card-0001', 'Card 1', 'Card 1 Description');
// const card2 = new Card('card-0002', 'Card 2', 'Card 2 Description');

// // add new cards to arrayCards
// arrayCards.push(card1, card2);
// console.log(arrayCards);

