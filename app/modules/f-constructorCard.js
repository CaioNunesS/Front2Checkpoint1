// constructor function to create a card object
function Card(id, title, description, img_url) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.img_src = img_url;

    // create the template for the card html
    this.cardTemplate = `
    <li class="card" id="card-0000">
        <img class="card-image" src="./assets/eggsB.jpg" alt="image">
        <h2 class="card-title">Title: card-0000</h2>
        <p class="card-description">Description: Este é um card de exemplo para ser clonado</p>
    </li>
    `
}

export default Card;

