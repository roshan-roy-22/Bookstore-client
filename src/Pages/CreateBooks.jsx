import axios from "axios";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishyear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSavebook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .post("http://localhost:5000/books", data)  // Removed backticks around the URL
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Changed from setLoading(true) to setLoading(false)
        alert("An error occurred. Please check your console");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col  border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-400">Title</label>
            <input
              type="text"
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-400">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-400">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishyear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 m-8 bg-sky-400 text-white" onClick={handleSavebook}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateBooks;
