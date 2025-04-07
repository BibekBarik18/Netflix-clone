import React, { useState } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import './index.css';

function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Mock data (no API needed)
  const movies = [
    {
      id: 1,
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      poster: "https://image.tmdb.org/t/p/w300/x49XzqJ8GiZ4jY4s3KXz9VdVdJw.jpg",
    },
    {
      id: 2,
      title: "The Witcher",
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      backdrop: "https://image.tmdb.org/t/p/original/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
      poster: "https://image.tmdb.org/t/p/w300/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
    },
    {
      id: 3,
      title: "Money Heist",
      description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
      backdrop: "https://image.tmdb.org/t/p/original/3Ef7ckMP2DBJxmz0Y5x6xQ5ZUlE.jpg",
      poster: "https://image.tmdb.org/t/p/w300/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    },
    {
      id: 4,
      title: "Breaking Bad",
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
      backdrop: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      poster: "https://image.tmdb.org/t/p/w300/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="logo" />
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">TV Shows</a>
          <a href="/">Movies</a>
          <a href="/">My List</a>
        </div>
      </nav>

      {/* Hero Banner (Featured Movie) */}
      <div className="hero" style={{ backgroundImage: `url(${movies[0].backdrop})` }}>
        <div className="hero-content">
          <h1>{movies[0].title}</h1>
          <p>{movies[0].description}</p>
          <div className="hero-buttons">
            <button className="play-button"><FaPlay /> Play</button>
            <button className="info-button"><FaInfoCircle /> More Info</button>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="movie-rows">
        <h2>Trending Now</h2>
        <div className="row">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </div>

      {/* Modal (Popup for Movie Details) */}
      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setSelectedMovie(null)}>✕</button>
            <img src={selectedMovie.backdrop} alt={selectedMovie.title} className="modal-backdrop" />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
            <div className="modal-buttons">
              <button className="play-button"><FaPlay /> Play</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;