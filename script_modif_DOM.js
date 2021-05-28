const changeTitles = function() {
  document.getElementsByClassName("jumbotron-heading")[0].textContent = "Ce que j'ai appris à THP";
  document.getElementsByClassName("lead text-muted")[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

const changeCallToActions = function() {
  let btnMainCallToAction = document.getElementsByClassName("btn btn-primary my-2")[0];
  btnMainCallToAction.textContent = "OK je veux tester !";
  btnMainCallToAction.href = "http://www.thehackingproject.org";
  let btnSecondaryAction = document.getElementsByClassName("btn btn-secondary my-2")[0];
  btnSecondaryAction.textContent = "Non Merci";
  btnSecondaryAction.href = "https://www.pole-emploi.fr/accueil/";
}

const changeLogoName = function() {
  let logoName = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0].getElementsByTagName("strong")[0];
  logoName.textContent = "The THP Experience";
  logoName.style.fontSize = "2em";
}

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png",
                   "https://img.icons8.com/color/480/000000/css3.png",
                   "https://img.icons8.com/color/480/000000/javascript.png",
                   "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
                   "https://img.icons8.com/color/480/000000/bootstrap.png",
                   "https://img.icons8.com/color/480/000000/github.png",
                   "https://i.imgur.com/bJE9Pka.png",
                   "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
                   "https://img.icons8.com/color/480/000000/heroku.png"];
const populateImages = function() {
  let cardImages = document.getElementsByClassName("card-img-top");
  let nbCardImages = cardImages.length;
  for (let index = 0; index < nbCardImages; index++) {
    cardImages[index].src = imagesArray[index];
    cardImages[index].alt = imagesArray[index];
  }
}

const deleteLastCards = function() {
  let cardImages = document.getElementsByClassName("card-img-top");
  let nbCardImages = cardImages.length;
  console.log(`number of cards : ${nbCardImages}`);
  let lastIndexToKeep = cardImages.length - 3 - 1;
  console.log(`lastIndexToKeep : ${lastIndexToKeep}`);
  let nbRemovedCards = 0;
  for (let index = 0; index < nbCardImages; index++) {
    console.log(`current normal index : ${index}`);
    console.log(`current index : ${index - nbRemovedCards}`);
    if (index - nbRemovedCards > lastIndexToKeep) {
      console.log(`normal index to remove : ${index}`);
      console.log(`index to remove : ${index - nbRemovedCards}`);
      cardImages[index - nbRemovedCards].parentNode.parentNode.remove();
      nbRemovedCards++;
      console.log(`nbRemovedCards : ${nbRemovedCards}`);
    }
  }
}

const changeCardsText = function() {
  let cardsTextArray = [
                         { cardType: "HTML", cardText: "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web" },
                         { cardType: "CSS", cardText: "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML" },
                         { cardType: "JavaScript", cardText: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."}
                       ];
  let cardImages = document.getElementsByClassName("card-img-top");
  let nbCardImages = cardImages.length;
  for (let index = 0; index < nbCardImages; index++) {
    if (index < 3 && cardImages[index].src == imagesArray[index] && cardImages[index].src.indexOf(cardsTextArray[index]["cardType"].toLowerCase()) != -1) {
      console.log(`index : ${index}`);
      console.log(`cardImages[index].src : ${cardImages[index].src}`);
      console.log(`imagesArray[index] : ${imagesArray[index]}`);
      console.log(`cardsTextArray[index]["cardType"].toLowerCase() : ${cardsTextArray[index]["cardType"].toLowerCase()}`);
      console.log(`cardsTextArray[index]["cardText"] : ${cardsTextArray[index]["cardText"]}`);
      console.log(`cardImages[index].src.indexOf(cardsTextArray[index]["cardType"].toLowerCase()) : ${cardImages[index].src.indexOf(cardsTextArray[index]["cardType"].toLowerCase())}`);
      console.log(`cardImages[index].nextElementSibling.children[0].innerText : ${cardImages[index].nextElementSibling.children[0].innerText}`);
      cardImages[index].nextElementSibling.children[0].textContent = cardsTextArray[index]["cardText"];
    }
  }
}

const changeViewButtons = function() {
  let cardImages = document.getElementsByClassName("card-img-top");
  let nbCardImages = cardImages.length;
  for (let index = 0; index < nbCardImages; index++) {
    console.log(`index : ${index}`);
    console.log(`cardImages[index].nextElementSibling.children[1].children[0].children[0].getAttribute("class") : ${cardImages[index].nextElementSibling.children[1].children[0].children[0].getAttribute("class")}`);
    cardImages[index].nextElementSibling.children[1].children[0].children[0].setAttribute("class", "btn btn-sm btn-success");
  }
}

const reverseDiamond = function() {
  let thirdCard = document.getElementsByClassName("card-img-top")[2].parentNode.parentNode;
  thirdCard.parentNode.removeChild(thirdCard);
  let newDIV = document.createElement("DIV");
  newDIV.setAttribute("class", "row");
  let cardsImagesContainer = document.getElementsByClassName("card-img-top")[0].parentNode.parentNode.parentNode.parentNode;
  cardsImagesContainer.appendChild(newDIV);
  newDIV.appendChild(thirdCard);
}

changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
reverseDiamond();
