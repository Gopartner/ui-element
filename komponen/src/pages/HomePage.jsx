import React from "react";
import { Link } from "react-router-dom";
import CardMenu from "@c/CardMenu";
import CardMenuDynamic from "@c/CardMenuDynamic";

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <CardMenuDynamic />
        <p className="text-red-500 text-lg mb-4">Anda belum login.</p>
        <CardMenu />
        <Link to="/login">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-200">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
