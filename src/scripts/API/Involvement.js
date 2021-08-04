class InvolvementAPI {
  constructor() {
    this.root = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p6jun1pox25cuUtb59m6';
    this.gameId = 'DbHnbvbCYIfhWnFC6JwJ'
  }

  getLikes = async () => {
    const response = await fetch(`${this.root}/likes/`);
    return this.getAPIsResponse(response);
  }

  setLike = async (movieId) => {
    const response = await fetch(`${this.root}/likes/`, {
      method: 'POST',
      body: JSON.stringify({ item_id: movieId }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    this.getAPIsResponse(response);
  }

  getAPIsResponse = async (response) => {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
}

const involvement = new InvolvementAPI();

// eslint-disable-next-line import/prefer-default-export
export { involvement };