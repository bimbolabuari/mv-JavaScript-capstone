import request from '../utils/api-request';

class InvolvementAPI {
  constructor() {
    this.likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZOlmT2mI46IiDxo5Br8v/likes';
  }

  setLike = (movieId) => {
    request.postApi(this.likesURL, { item_id: movieId });
  }

  getLikes =async () => {
    const likes = await request.getAPI(this.likesURL);
    return likes;
  }
}

const involvement = new InvolvementAPI();

// eslint-disable-next-line import/prefer-default-export
export { involvement };