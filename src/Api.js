const API_URL = 'http://localhost:3010'

export const getCharacter = (owner,id) =>{
    return fetch(`${API_URL}/characters/${owner}/${id}`, { method: 'GET' })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}