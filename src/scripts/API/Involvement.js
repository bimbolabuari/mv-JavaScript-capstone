import request from '../utils/api-request';

class InvolvementAPI {
  constructor() {
    this.likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZOlmT2mI46IiDxo5Br8v/likes';
  }

  setLike = (movieId) => {
    request.postApi(this.likesURL, { item_id: parseInt(movieId, 10) });
  }

  getLikes =async () => {
    const likes = await request.getAPI(this.likesURL);
    return likes;
  }

  getLikesOf = async (movieId) => {
    movieId = parseInt(movieId, 10);
    const arrayOfLikes = await this.getLikes();
    let numOfLikes = 0;
    if (arrayOfLikes.some((element) => element.item_id === movieId)) {
      numOfLikes = arrayOfLikes.find((like) => like.item_id === movieId).likes;
    }
    return numOfLikes;
  }
}

const involvement = new InvolvementAPI();

// eslint-disable-next-line import/prefer-default-export
export { involvement };

const displayComment = document.querySelector('.display-comment');
const displayCommentBtn = document.querySelector('.display-comment-btn');
const username = document.querySelector('.text-input');
const userInsight = document.querySelector('.textarea');
const form = document.querySelector('.form');

export const postComment = (userName, userInsight) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: 'item1',
        username: userName,
        comment: userInsight,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.text())
    .then((json) => json);
};

export const getComment = async () => {
  const commentData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments?item_id=item1', {
  })
    .then((res) => res.json());
  return commentData;
};

const commentNumber = document.querySelector('.counter');
getComment().then((data) => {
  commentNumber.innerHTML = `${data.length}`;
  return data.length;
});

export const commentAPI = () => {
  form.addEventListener('submit', (e) => {
    const usernameValue = username.value;
    const userInsightValue = userInsight.value;
    e.preventDefault();
    postComment(usernameValue, userInsightValue);
    form.reset();
  });

  displayCommentBtn.addEventListener('click', () => {
    getComment().then((data) => {
      displayComment.innerHTML = '';
      data.forEach((data) => {
        const commentList = document.createElement('div');
        const commentText = document.createElement('p');
        commentText.innerHTML = `${data.creation_date}  ${data.username}: ${data.comment}`;
        commentList.appendChild(commentText);
        displayComment.appendChild(commentList);
      });
    });
  });
};