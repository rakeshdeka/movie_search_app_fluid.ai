import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetailsModal from "./components/MovieDetailsModal";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "b4611256";
  const BASE_URL = "https://www.omdbapi.com/";


  const fetchMovies = async (search = "") => {
    try {
      const url = search
        ? `${BASE_URL}?s=${search}&apikey=${API_KEY}`
        : `${BASE_URL}?s=batman&apikey=${API_KEY}`; 

      const response = await axios.get(url);
      if (response.data && response.data.Search) {
        const detailedMovies = await Promise.all(
          response.data.Search.map(async (movie) => {
            const detailsResponse = await axios.get(`${BASE_URL}?i=${movie.imdbID}&apikey=${API_KEY}`);
            return detailsResponse.data;
          })
        );

        
        const sortedMovies = detailedMovies
          .filter((movie) => movie.imdbRating) 
          .sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));

        setMovies(sortedMovies);
      } else {
        setMovies([]); 
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
      const data = await response.data;
      setSelectedMovie(data);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovies(""); 
  }, []);

  
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  
  const handleSearchSubmit = (searchTerm) => {
    if (searchTerm.trim() === "") {
      fetchMovies(""); 
    } else {
      fetchMovies(searchTerm); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Movie Search App</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearchSubmit}
        onChange={handleSearchChange}
      />
      <MovieList movies={movies} onMovieClick={fetchMovieDetails} />
      {selectedMovie && (
        <MovieDetailsModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          movie={selectedMovie}
        />
      )}
    </div>
  );
};

export default App;
