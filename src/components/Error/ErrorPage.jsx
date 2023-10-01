import React from 'react';
import img from "../../assets/images/error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <img  className="lg:w-[800px] md:w-[700px] sm:w-[450px]
                 w-[350px] mx-auto" src={img} alt="" />
            <Link to="/">
                <div className="text-center flex justify-center items-center">
                    <button className="bg-gradient-to-r from-purple-500 to-red-500 w-36 py-2 rounded-lg text-lg font-semibold">
                        Back to Home
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default ErrorPage;