const API_URL = "http://localhost:3010";

export const getCharacter = (owner, id) => {
  return fetch(`${API_URL}/characters/${owner}/${id}`, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const signin = async (user) => {
  return await fetch(`http://localhost:3010/auth/signin`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
