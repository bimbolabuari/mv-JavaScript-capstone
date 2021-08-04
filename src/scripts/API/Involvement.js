// //   ZOlmT2mI46IiDxo5Br8v

fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
    body: JSON.stringify({
      "item_id": "item1"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.text())
  .then(json => console.log(json));

// comment Involvement API

fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZOlmT2mI46IiDxo5Br8v/comments', {
    method: 'POST',
    body: JSON.stringify({
        "item_id": "item1",
        "username": "Jane",
        "comment": "Hello"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.text())
  .then(json => console.log(json));

  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZOlmT2mI46IiDxo5Br8v/comments', {
    body: JSON.stringify({
        "item_id": "item1",
        "username": "Jane",
        "comment": "Hello"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.text())
  .then(json => console.log(json));