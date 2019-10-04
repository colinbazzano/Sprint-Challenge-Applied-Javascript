// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const container = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
    const articles = response.data.articles;

    for (var key in articles) {
        const info = articles[key];

        info.forEach(element => {
            createCard(element);
            // const newCard = createCard(response.data.articles);
            // container.appendChild(newCard);
            // // console.log(element);
        });
      }//this closes for    
    })
    .catch(error => {
        console.log('The data was not returned', error);
    });

function createCard(attributes) {
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const cardCredit = document.createElement('span');

    //content - remember that img gets an src not text content
    cardHeadline.textContent = attributes.headline;
    img.src = attributes.authorPhoto;
    cardCredit.textContent = `By ${attributes.authorName}`;

    //classes
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    //append
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    imgContainer.appendChild(img);
    cardAuthor.appendChild(cardCredit);

    container.appendChild(card);
    return card
    //REMEMBER TO APPEND THE CHILD!!!!!! this haunted you on the project & on the sprint
}

