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

const commentAPI = () => {
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

export default commentAPI;
