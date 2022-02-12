import React from 'react';
import '../SingleMovie/SingleMovie.scss';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import {getSingleMovie} from '../../apiCalls'
import Error from '../Error/Error';

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        id: props.id,
        currentMovie: null,
        err: '',
        selectMovie: props.selectMovie
      }
  }

  componentDidMount() {
    getSingleMovie(this.state.id)
      // .then(data => {
      //   console.log(this.cleanSingleMovie(data))
      //   return this.cleanSingleMovie(data)})
      .then(data => this.setState({currentMovie: data.movie}))
      .then(() => {
        this.showBlur()
        // document.body.addEventListener('keydown', this.closeOnEscapeKey)
      })
      .catch(error => this.state.selectMovie(error))
  }

  cleanSingleMovie(data) {
    data.movie.average_rating = (data.movie.average_rating/2).toFixed(1);
    data.movie.backdrop_path = data.movie.backdrop_path.includes('NoPhotoAvailable') ? data.movie.poster_path : data.movie.backdrop_path;
    data.movie.overview = data.movie.overview === "" ? 'No overview available.' : data.movie.overview;
    data.movie.release_date = new Date(data.movie.release_date).toLocaleDateString("en-US", {year: "numeric", month:"2-digit", day:"2-digit"});
    data.movie.budget = data.movie.budget === 0 ? 'N/A' : new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(data.movie.budget);
    data.movie.revenue = data.movie.revenue === 0 ? 'N/A' : new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(data.movie.revenue);
    data.movie.runtime =  data.movie.runtime === 0 ? 'N/A' : data.movie.runtime;
    data.movie.genres = data.movie.genres.join(", ")

    return data
  }

  componentWillUnmount() {
    this.removeBlur();
    // <Redirect to="/" />
  }

  showBlur = () => {
    document.querySelector('.movie-container').classList.add('blur')
    document.querySelector('body').classList.add('blur')
  }

  removeBlur = () => {
    document.querySelector('.movie-container').classList.remove('blur')
    document.querySelector('body').classList.remove('blur')
  }

  getBanner(currentMovie) {
    const banner = currentMovie.backdrop_path.includes('NoPhotoAvailable') ? currentMovie.poster_path : currentMovie.backdrop_path;
    return banner;
  }

  getOverview(currentMovie) {
    const overview = currentMovie.overview === "" ? 'No overview available.' : currentMovie.overview;
    return overview;
  }

  getReleaseDate(currentMovie) {
    let dateProvided = currentMovie.release_date.split('-');
    let [year, month, day] = dateProvided;
    const releaseDate = [month, day, year].join('/');
    return releaseDate;
  }

  getBudget(currentMovie) {
    const budgetProvided = currentMovie.budget;
    let budgetDollars = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(budgetProvided);
    let budget = currentMovie.budget === 0 ? 'n/a' : `$${budgetDollars}`;
    return budget;
  }

  getRevenue(currentMovie) {
    const revenueProvided = currentMovie.revenue;
    let revenueDollars = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(revenueProvided);
    let revenue = currentMovie.revenue === 0 ? 'n/a' : `$${revenueDollars}`;
    return revenue;
  }

  getRunTime(currentMovie) {
    let runtime = currentMovie.runtime === 0 ? 'n/a' : `${currentMovie.runtime} minutes`;
    return runtime;
  }

  getGenres(currentMovie) {
    return currentMovie.genres.join(",  ")
  }

  render() {
    return (
      <>
      {this.state.err && <Error />}
      {this.state.currentMovie && 
      <div className='modal'>
      <article className='modal-wrapper'>
        <section className='modal-top'>
          <span className='close-button'>
            <Link to={"/"}>X</Link>
          </span>
          <div className='banner'>
            <img className='banner-image' src={this.state.currentMovie.backdrop_path} alt={`Scene from "${this.state.currentMovie.title}"` }/>
            <div className='banner-image-overlay'></div>
          <div className='movie-info'>
            <h4 className="movie-title">{this.state.currentMovie.title}</h4>
            <p className="tagline">{this.state.currentMovie.tagline}</p>
            <div className='rating-container'>
              <ReactStars className='star-rating' count={5} value={this.state.currentMovie.average_rating/2}  isHalf={true} size={22} activeColor={'#ffd700'} color={'#F2F2F2'} edit={false}/>
              <span className="rating">{this.state.currentMovie.average_rating}</span>
            </div>
            <div className='genre-container'>
            <p className="genres">{this.state.currentMovie.genres}</p>
            </div>
          </div>
          </div>
        </section>
        <section className='modal-bottom'>
          <div className='movie-overview'>
            <p className="modal-title">Overview</p>
            <p className="modal-text">{this.state.currentMovie.overview}</p>
          </div>
          <div className="movie-details">
            <p className="modal-title">Release Date: <span className="modal-text">{this.state.currentMovie.release_date}</span></p>
            <p className="modal-title">Budget: <span className="modal-text">{this.getBudget(this.state.currentMovie)}</span></p>
            <p className="modal-title">Revenue: <span className="modal-text">{this.getRevenue(this.state.currentMovie)}</span></p>
            <p className="modal-title">Runtime: <span className="modal-text">{this.getRunTime(this.state.currentMovie)}</span></p>
          </div>
        </section> 
      </article>
    </div>}
    </>
    )
  }
};

export default SingleMovie;