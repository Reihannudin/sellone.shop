import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ logged }) => {
  return (
    <>
      <nav className="bg-white border-b-amber-50 px-4 pt-5 pb-5">
        <div className="flex justify-between" style={{ height: "30px" }}>
          <div>
            <div style={{ height: "30px" }}>
              <img
                src="/assets/logo/logo-panjang.svg"
                className=" h-full"
                alt=""
              />
            </div>
          </div>
          <div>
            <div style={{ height: "30px" }} className="my-1">
              <div className={"h-full"}>
                {logged ? (
                    <Link to="/profile" className="inline">
                  <span className="bg-gray-100 px-3 py-2 rounded-full">
                    <i className="fa-solid fa-user"></i>
                  </span>
                    </Link>
                ) : (
                    <>
                      <a href="http://127.0.0.1:8000/login">Login</a>
                    </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
