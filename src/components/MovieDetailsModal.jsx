import React from "react";
import Modal from "react-modal";

const MovieDetailsModal = ({ isOpen, onClose, movie }) => {
  if (!movie) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-lg mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-bold">{movie.Title}</h2>
      <p className="mt-2 text-sm text-gray-600">{movie.Genre}</p>
      <p className="mt-2">{movie.Plot}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Close
      </button>
    </Modal>
  );
};

export default MovieDetailsModal;
