import { tv } from "../API/TV-maze";

class cardsUX {

  constructor(){
    this.itemsList = document.querySelector('.items-list');
  }
  
 /* tv.getShow(1).then((current) => {
    img.src = current.image.medium
  }
  ) */
  makeCard = async (id) => {
    const clone = this.itemsList.firstElementChild.cloneNode(true)
    clone.classList.remove('d-none')
    const currentShow = await tv.getShow(id)
    this.setValuesOfCards(clone, currentShow)
    this.itemsList.appendChild(clone)
  } 

  renderXCards(numberOfCards){
    for (let i=1;i<=numberOfCards;i++){
      this.makeCard(i)
    }
  }
  
  setValuesOfCards = (element, show) => {
    element.querySelector('.card-img-top').src = show.image.medium;
    element.querySelector('.card-title').innerText = show.name;
    element.querySelector('.card-text').innerHTML = show.summary;
  }
}

const showsList = new cardsUX

export { showsList }