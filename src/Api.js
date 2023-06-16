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
  const formData = new FormData()
  formData.append('owner', adventure.owner)
  formData.append('title', adventure.title)
  formData.append('level', adventure.level)
  formData.append('duration', adventure.duration)
  formData.append('language', adventure.language)
  formData.append('img', adventure.img)
  formData.append('pdf', adventure.pdf)

  return await fetch('http://localhost:3010/adventures/create', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const likeAdventure = async (id, user) => {
  return await fetch(`${API_URL}/adventures/like/${id}/${user}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const deleteAdventure = async id => {
  const data = await fetch(`${API_URL}/adventures/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}


export const getLikes = async username => {
  const data = await fetch(`${API_URL}/adventures/like/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}

export const getUser = async username => {
  const data = await fetch(`${API_URL}/user/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return data
}