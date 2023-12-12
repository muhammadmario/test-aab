import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";

const Landing = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=Indonesia"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetail = (university) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Clear the selected university and close the modal
    setSelectedUniversity({});
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-2xl font-semibold my-4">
        Data Universitas
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Universitas
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr
                  className="odd:bg-white even:bg-gray-50  border-b cursor-pointer"
                  onClick={() => handleDetail(item)}
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.web_pages}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Render the Modal component if the isModalOpen state is true */}
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          selectedUniversity={selectedUniversity}
          index={data.indexOf(selectedUniversity)}
        />
      )}
    </div>
  );
};

export default Landing;
