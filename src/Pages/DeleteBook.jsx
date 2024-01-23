import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function DeleteBook() {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setloading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setloading(true);
        alert("An error has occur checked the console");
      });
  };

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center border-2 p-4  border-sky-400 rounded-xl  w-[600px] p8 mx-auto">
            <h1 className="text-xl">Are you sure to delete this Book</h1>
            <button className="p-4 bg-red-600 rounded-lg shadow-lg text-white  m-8 w-full" onClick={handleDeleteBook}> Yes Delete it</button>
          </div>
        )}
      </div>
    </>
  );
}

export default DeleteBook;
