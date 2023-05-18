const API_URL = 'http://localhost:3010'

export const getCharacter = (owner, id) => {
  return fetch(`${API_URL}/characters/${owner}/${id}`, { method: 'GET' })
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const signin = async user => {
  const data = await fetch('http://localhost:3010/auth/signin', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}

export const login = async user => {
  const data = await fetch('http://localhost:3010/auth/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}

export const createCharacter = async character => {
  const data = await fetch('http://localhost:3010/characters/create', {
    method: 'POST',
    body: JSON.stringify(character),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}

export const editCharacter = async character => {
  const data = await fetch('http://localhost:3010/characters/edit', {
    method: 'PUT',
    body: JSON.stringify(character),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}

export const deleteCharacter = async id => {
  const data = await fetch(`${API_URL}/characters/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}

export const loadAdventure = async adventure => {
  return await fetch('http://localhost:3010/adventures/create', {
    method: 'POST',
    body: JSON.stringify(adventure),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}
