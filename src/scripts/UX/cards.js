/* eslint-disable no-restricted-syntax */
import { tv } from '../API/TV-maze';
import { involvement } from '../API/Involvement';
import { elisteners } from '../utils/listeners';

class CardsUX {
  constructor() {
    this.itemsList = document.querySelector('.items-list');
  }

  renderCards = async () => {
    const arrayOfShows = await tv.getAllShows();
    const arrayOfLikes = await involvement.getLikes();
    for (const show of arrayOfShows) {
      let numOfLikes = 0;
      if (arrayOfLikes.some((element) => element.item_id === show.id)) {
        numOfLikes = arrayOfLikes.find((like) => like.item_id === show.id).likes;
      }
      const clone = this.itemsList.firstElementChild.cloneNode(true);
      clone.classList.remove('d-none');
      this.setValuesOfCards(clone, show, numOfLikes);
      this.itemsList.appendChild(clone);
    }
  }

  setValuesOfCards = (element, show, likes) => {
    element.querySelector('.card-img-top').src = show.image.medium;
    element.querySelector('.card-title').innerText = show.name;
    element.querySelector('.card-text').innerHTML = show.summary;
    const likeBtn = element.querySelector('.card-body__likebtn');
    likeBtn.setAttribute('data-id', show.id);
    elisteners.addLikeListener(likeBtn);
    const displayLikes = element.querySelector('.card-body__likes');
    displayLikes.classList.add(`movie-${show.id}`);
    displayLikes.innerHTML = `${likes} people like this`;
  }
}

const showsList = new CardsUX();

// eslint-disable-next-line import/prefer-default-export
export { showsList };