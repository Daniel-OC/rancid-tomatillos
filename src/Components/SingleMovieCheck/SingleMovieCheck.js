import React from 'react';
import '../SingleMovie/SingleMovie.scss';
import ReactStars from 'react-stars';
// import Modal, { useModal } from 'react-top-modal';
import {Link} from 'react-router-dom';
import {getSingleMovie} from '../../apiCalls'

class SingleMovieCheck extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        id: props.id,
        currentMovie: null
      }
  }

  componentDidMount() {
    getSingleMovie(this.state.id)
      .then(data => this.setState({currentMovie: data.movie}))
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

  render() {
    console.log(this.state.currentMovie)

    return (
      <>
      {this.state.currentMovie && 
      <div className='modal'>
      <article className='modal-wrapper'>
        <section className='modal-top'>
          <button className='close-button' onClick = {() => this.state.currentMovie.closeSelectMovie()}>X</button>
          <img className='banner' src={this.getBanner(this.state.currentMovie)} alt={`Scene from "${this.state.currentMovie.title}"` }/>
          <div className='movie-info'>
            <h4 className="movie-title">{this.state.currentMovie.title}</h4>
            <p className="tagline">{this.state.currentMovie.tagline}</p>
            <div className='rating-container'>
              <ReactStars className='star-rating' count={5} value={this.state.currentMovie.average_rating/2} size={16} color2={'#ffd700'} color1={'#F2F2F2'} edit={false}/>
              <span className="rating">{(this.state.currentMovie.average_rating/2).toFixed(1)}</span>
            </div>
          </div>
        </section>
        <section className='modal-bottom'>
          <div className='movie-overview'>
            <p className="modal-title">Overview</p>
            <p className="modal-text">{this.getOverview(this.state.currentMovie)}</p>
          </div>
          <div className="movie-details">
            <p className="modal-title">Release Date: <span className="modal-text">{this.getReleaseDate(this.state.currentMovie)}</span></p>
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

  showBlur = () => {
    document.querySelector('.movie-container').classList.add('blur')
    document.querySelector('body').classList.add('blur')
  }

  removeBlur = () => {
    document.querySelector('.movie-container').classList.remove('blur')
    document.querySelector('body').classList.remove('blur')
  }

//   React.useEffect(() => {
//     document.body.addEventListener('keydown', this.state.currentMovie.closeOnEscapeKey)
//     showBlur()
//     return function cleanup() {
//       removeBlur()
//       document.body.removeEventListener('keydown', this.state.currentMovie.closeOnEscapeKey)
//     }
//   }, [])
};

export default SingleMovieCheck;