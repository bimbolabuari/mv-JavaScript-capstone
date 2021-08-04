import { tv } from '../API/TV-maze';

const commentButtons = document.querySelectorAll('#commentButton');
const image = document.querySelector('.image')
        const title = document.querySelector('.title')
     
   const text = document.querySelector('.text')

class PopupUX {
  constructor() {
    this.popupSection = document.querySelector('.popup-section')
  }

  renderPopup = async () => {
    const arrayOfShows = await tv.getAllShows();
   arrayOfShows.forEach(show => {
    document.addEventListener('click', event => {
  
        if (event.target.dataset.action === 'comment') {
          event.target.setAttribute('data-id', show.id);
          console.log(event.target)
        }
    });
   });
  }

    setValuesOfPopup (show) {
        image.src = show.image.medium;
        title.innerText = show.name;
        text.innerHTML = show.summary;
        this.popupSection.setAttribute('data-id', show.id);   
  }
}

const showPopup = new PopupUX();

export { showPopup };

