import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

function Home() {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("https://bookstore-server-i2ip.onrender.com/books")
      .then((response) => {
        setbooks(response.data.data);
        setloading(false);
        console.log(books);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to={"/books/create"}>
        <i class="fa-regular fa-square-plus text-3xl"></i>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md ">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-800 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-800 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-800 rounded-md text-center">
                  {book.author}
                </td>
                <td className="border border-slate-800 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-800 rounded-md text-center">
                  <div className="flex justify-center gap-x-4 ">
                    <Link to={`/books/details/${book._id}`}>
                    <i className="fa-solid fa-circle-info text-green-600 "></i>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                    <i className="fa-regular fa-pen-to-square text-yellow-400"></i>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                    <i className="fa-regular fa-trash-can text-red-600"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
