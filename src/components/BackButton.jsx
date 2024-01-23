import { Link } from "react-router-dom";

import React from 'react'

const BackButton = ({destination='/'}) => {
  return (
    <div className="flex">
        <Link to={destination} className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit">
        <i class="fa-solid fa-left-long text-2xl"></i>
        </Link>
    </div>
  )
}

export default BackButton