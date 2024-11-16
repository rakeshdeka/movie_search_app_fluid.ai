import React from "react";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => onMovieClick(movie.imdbID)}
          className="cursor-pointer bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-60 object-cover rounded"
          />
          <h3 className="mt-4 text-lg font-semibold">{movie.Title}</h3>
          <p className="text-sm text-gray-500">{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
