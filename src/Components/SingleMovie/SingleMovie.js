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
        setError: props.setError
      }
  }

  componentDidMount() {
    getSingleMovie(this.state.id)
      .then(data => this.cleanSingleMovie(data))
      .then(data => this.setState({currentMovie: data.movie}))
      .then(() => {
        this.showBlur()
      })
      .catch(error => this.state.setError(error))
  }

  cleanSingleMovie(data) {
    data.movie.average_rating = (data.movie.average_rating/2).toFixed(1);
    data.movie.backdrop_path = data.movie.backdrop_path.includes('NoPhotoAvailable') ? data.movie.poster_path : data.movie.backdrop_path;
    data.movie.overview = data.movie.overview === '' ? 'No overview available.' : data.movie.overview;
    data.movie.release_date = new Date(data.movie.release_date).toLocaleDateString('en-US', {year: 'numeric', month:'2-digit', day:'2-digit'});
    data.movie.budget = data.movie.budget === 0 ? 'N/A' : `$${new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(data.movie.budget)}`;
    data.movie.revenue = data.movie.revenue === 0 ? 'N/A' : `$${new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(data.movie.revenue)}`;
    data.movie.runtime =  data.movie.runtime === 0 ? 'N/A' : data.movie.runtime;
    data.movie.genres = data.movie.genres.join(', ')
    return data
  }

  componentWillUnmount() {
    this.removeBlur();
  }

  showBlur = () => {
    document.querySelector('.movie-container').classList.add('blur')
    document.querySelector('body').classList.add('blur')
  }

  removeBlur = () => {
    document.querySelector('.movie-container').classList.remove('blur')
    document.querySelector('body').classList.remove('blur')
  }


  render() {
    // const tabableElements = 'close-button, banner-image, movie-title, tagline, rating-container, genre, [tabIndex]:not([tabIndex="-1"])';
    const openModal = document.querySelector('#modal');
    
    // const firstModalTab = document.querySelectorAll(tabableElements)[0];
    // const modalContent = document.querySelectorAll(tabableElements);
    // const lastModalTab = modalContent[modalContent.length -1];

    const firstModalTab = document.querySelector('.close-button');
    const lastModalTab = document.querySelector('.movie-details');    

    // document.addEventListener('keydown', (event) => {
    //   let isTabPressed = event.key === 'Tab' || event.keyCode === 9;

    //   if (!isTabPressed) {
    //     return;
    //   }

    //   if (event.shiftKey) {
    //     if (document.activeElement === firstModalTab) {
    //       lastModalTab.focus();
    //       event.preventDefault();
    //     }
    //   } else {
    //     if (document.activeElement === lastModalTab) {
    //       firstModalTab.focus();
    //       event.preventDefault();
    //     }
    //   }
    // });

    // firstModalTab.focus();

    return (
      <>
      {this.state.err && <Error />}
      {this.state.currentMovie && 
      <div className='modal' id='openModal' tabIndex='-1' role='document'>
      <article className='modal-wrapper'>
        <section className='modal-top'>
          <span className='close-button'>
            <Link to={'/'} tabIndex='0'>X</Link>
          </span>
          <div className='banner'>
            <img className='banner-image' src={this.state.currentMovie.backdrop_path} alt={`Scene from '${this.state.currentMovie.title}'`}/>
          <div className='movie-info'>
            <h2 className='movie-title' tabIndex='0'>{this.state.currentMovie.title} </h2>
            <p className='tagline' tabIndex='0'>{this.state.currentMovie.tagline}</p>
            <div className='rating-container' tabIndex='0'>
              <ReactStars className='star-rating' count={5} value={Number(this.state.currentMovie.average_rating)}  isHalf={true} size={22} activeColor={'#ffd700'} color={'#fbfbfb45'} edit={false}/>
              <span className='rating'>{this.state.currentMovie.average_rating}</span>
            </div>
            <div className='genre-container'>
              <p className='genres' tabIndex='0'>{this.state.currentMovie.genres}</p>
            </div>
          </div>
          </div>
        </section>
        <section className='modal-bottom'>
          <div className='movie-overview'>
            <p className='modal-title' tabIndex='0'>Overview</p>
            <p className='modal-text' tabIndex='0'>{this.state.currentMovie.overview}</p>
          </div>
          <div className='movie-details'>
            <p className='modal-title' tabIndex='0'>Release Date: <span className='modal-text' tabIndex='0'>{this.state.currentMovie.release_date}</span></p>
            <p className='modal-title' tabIndex='0'>Budget: <span className='modal-text' tabIndex='0'>{this.state.currentMovie.budget}</span></p>
            <p className='modal-title' tabIndex='0'>Revenue: <span className='modal-text' tabIndex='0'>{this.state.currentMovie.revenue}</span></p>
            <p className='modal-title' tabIndex='0'>Runtime: <span className='modal-text' tabIndex='0'>{this.state.currentMovie.runtime} minutes</span></p>
          </div>
        </section> 
      </article>
    </div>}
    </>
    )
  }
};

export default SingleMovie;