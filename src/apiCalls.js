const checkForError = (response) => {
  if (!response.ok && response.status === 404) {
    throw (`${response.status} Error. We can't find this page. Please return home.`)
  } else if (!response.ok && response.status === 500) {
    throw (`${response.status} Error. Something went wrong. Please try reloading your page.`)
  } else if (!response.ok) {
    throw (`${response.status} Error. Something went wrong! Please refresh your page or clear your cache. If that doesn't work please try again later!`)
  } else {
    return response.json();
  }
}

const getSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => checkForError(response))
}

const getAllMovies = () => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`)
  .then(response => checkForError(response))
}

export {getSingleMovie, getAllMovies}