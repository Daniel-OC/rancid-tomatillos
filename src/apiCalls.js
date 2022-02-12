const checkForError = (response) => {
  if ((!response.ok && response.status >= 400) && response.status < 500) {
    throw (`${response.status} Error. Sorry, the page you're looking for doesn't seem to exist.`)
  } else if (!response.ok && response.status >= 500) {
    throw (`${response.status} Error. Something went wrong. Please try again!`)
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