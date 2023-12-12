import React from "react";

// Create a Modal component
const Modal = ({ closeModal, selectedUniversity, index }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <p className="mb-2">No: {index + 1}</p>
        <h2 className="text-xl font-semibold mb-4">
          Nama Universitas : {selectedUniversity.name}
        </h2>
        <p>Website: {selectedUniversity.web_pages}</p>
        {/* Add more details as needed */}
        <div className="w-full flex justify-end">
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
