export const showPopup = () => {
  const exampleModal = document.getElementById('exampleModal');
  exampleModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const cardContainer = button.parentElement.parentElement.parentElement;
    const imageElement = cardContainer.firstElementChild;
    const titleElement = imageElement.nextElementSibling.firstElementChild;
    const descriptionElement = titleElement.nextElementSibling.firstElementChild;

    const image = document.querySelector('.image').src = imageElement.src;
    const title = document.querySelector('.title').innerText = titleElement.innerText;
    const text = document.querySelector('.text').innerText = descriptionElement.innerText;
  });
};
