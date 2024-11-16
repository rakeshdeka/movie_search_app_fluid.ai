import React from "react";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
        >
          X
        </button>
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
        <p className="mb-2"><strong>Year:</strong> {movie.Year}</p>
        <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
        <p className="mb-2"><strong>Plot:</strong> {movie.Plot}</p>
        <p className="mb-2"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieModal;
