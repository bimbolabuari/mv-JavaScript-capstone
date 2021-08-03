import { tv } from "../API/TV-maze";

class cardsUX {

  constructor(){
    this.itemsList = document.querySelector('.items-list');
  }

  renderCards = async() => {
    const arrayOfShows = await tv.getAllShows()
    for (let show of arrayOfShows){
      const clone = this.itemsList.firstElementChild.cloneNode(true)
      clone.classList.remove('d-none')
      this.setValuesOfCards(clone, show)
      this.itemsList.appendChild(clone)
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