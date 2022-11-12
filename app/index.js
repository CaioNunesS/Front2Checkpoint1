// import module getDateTime
import getDateTime from './modules/f-getDateTime.js';

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


