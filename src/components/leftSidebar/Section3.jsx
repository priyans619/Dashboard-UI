import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosLink } from "react-icons/io";
import { BsFiletypeDoc } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";

const Section3 = () => {
  return (
    <>
      <h1 className="text-sm mb-4 text-gray-400 mt-4">Pages</h1>
      <nav>
        <ul>
          <li className="text-sm mb-2 flex items-center">
            <IoIosLink className="text-gray-300 text-xl cursor-pointer" />
            <BsFiletypeDoc className="text-black text-xl ml-1" />
            <Link to="/" className="ml-2">Documentations</Link>
          </li>
          <li className="text-sm mb-2 flex items-center">
            <IoIosLink className="text-gray-300 text-xl cursor-pointer" />
            <FiHeadphones className="text-black text-xl ml-1" />
            <Link to="/" className="ml-2">Help Center</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Section3;
