import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import { loadPartialConfig } from '@babel/core';

class App extends Component {

  state = {
    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "movie1",
            poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjvsp771KnjAhWJurwKHdWaBBQQjRx6BAgBEAU&url=https%3A%2F%2Fmyhotposters.com%2Fproducts%2Fready-player-one-movie-poster-101483&psig=AOvVaw06FxwT2HE5yUSv5rCyq6Yd&ust=1562824464369719"
          },
          {
            title: "movie2",
            poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjh-dv_1KnjAhWBvLwKHV3dBH0QjRx6BAgBEAU&url=http%3A%2F%2Fwww.impawards.com%2F2019%2Faladdin_ver2.html&psig=AOvVaw06FxwT2HE5yUSv5rCyq6Yd&ust=1562824464369719"
          },
          {
            title: "movie3",
            poster: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjgjvGB1anjAhWLerwKHQ4AD98QjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.movieposter.com%252Fposter%252FMPW-121006%252FBlade_Runner_2049.html%26psig%3DAOvVaw06FxwT2HE5yUSv5rCyq6Yd%26ust%3D1562824464369719&psig=AOvVaw06FxwT2HE5yUSv5rCyq6Yd&ust=1562824464369719"
          },
          {
            title: "movie4",
            poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiP9rKH1anjAhXIV7wKHdO0AA8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.joblo.com%2Fmovie-posters&psig=AOvVaw06FxwT2HE5yUSv5rCyq6Yd&ust=1562824464369719"
          },
          {
            title: "new movie",
            poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjvsp771KnjAhWJurwKHdWaBBQQjRx6BAgBEAU&url=https%3A%2F%2Fmyhotposters.com%2Fproducts%2Fready-player-one-movie-poster-101483&psig=AOvVaw06FxwT2HE5yUSv5rCyq6Yd&ust=1562824464369719"
          }
        ]
      })
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    });

    return movies;
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
