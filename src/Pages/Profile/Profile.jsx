import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
// import api from "../../config/api";
import http from "../../config/http";

function Profile() {

    const [users, setUsers] = useState([]);

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchUsers = () => {
        http.get('/profile').then(res=>{
            setUsers(res.data);
        })
    }

    console.log(users)

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

  return (
    <>
      <div className="bg-white">
          <div className="px-4 bg-white  pb-4 pt-6 flex items-center mb-3" style={{ borderBottom: "1px solid #ebebeb"}}>
              <button onClick={goBack}>
                  <h6 className="text-lg mb-0">
                      <i className="fa-solid fa-arrow-left"></i>
                  </h6>
              </button>
              <h5 className="font-medium text-xl ml-3">Profile</h5>
          </div>
          <div></div>
        <div className="px-4 py-3">
          <div className="flex items-center">
              <span className="bg-gray-100 px-5 py-2 rounded-full"
                    style={{
                        width:  "60px",
                        height: "60px",
                    }}
              >
                    <i className="fa-solid mt-2 ms-5 fa-user" style={{ fontSize : "24px"}}
                    ></i>
              </span>
            <div className="pl-4">
              <h5 className="text-xl">{user.name}</h5>
              <h6 className="text-gray-400 text-sm">
                SMKN 1 Kabupaten Tangerang
              </h6>
            </div>
          </div>
        </div>
          <div className="gap-4 mx-3 py-3">
              <div className="flex my-2">
                  <i className="fa-solid fa-store my-1 mx-3"></i>
                  <Link to="/information" >
                      <p className="text-red-500 cursor-pointer hover:text-red-600">Tambahkan Toko Anda</p>
                  </Link>
              </div>
              <div className="flex my-2">
                  <i className="fa-solid fa-phone my-1 mx-3"></i>
                  <Link to="/information" >
                      <p className="text-red-500 cursor-pointer hover:text-red-600">Tambahkan Nomor Telepon Anda</p>
                  </Link>
              </div>
              <div className="flex my-2">
                  <i className="fa-solid fa-envelope my-1 mx-3"></i>
                  <p>{user.email}</p>
              </div>
          </div>
      </div>
      <div className="px-4 bg-white pb-5">
          <div className="w-full my-2 py-1 mx-auto">
              <a href={"/wishlist"}>
                  <div className="flex my-3">
                      <i className="fa-solid fa-heart my-1 mx-3"></i>
                      <p>Wishlist</p>
                  </div>
              </a>
              <hr />
          </div>
          <div className="w-full my-2  py-1 mx-auto">
              <a href={"/user/product"}>
                  <div className="flex my-3">
                      <i className="fa-solid fa-shopping-bag my-1 mx-3"></i>
                      <p>Product</p>
                  </div>
              </a>
              <hr />
          </div>
          <div className="w-full my-2  py-1  mx-auto">
              <a href={"/user/promotion"}>
                  <div className="flex my-3">
                      <i className="fa-solid fa-tags my-1 mx-3"></i>
                      <p>Promotion</p>
                  </div>
              </a>
              <hr />
          </div>
          <div className="w-full my-2 py-1 mx-auto">
              <a href={"/user/status/product"}>
                  <div className="flex my-3">
                      <i className="fa-solid fa-ticket my-1 mx-3"></i>
                      <p>Lifecycle Product</p>
                  </div>
              </a>
              <hr />
          </div>
          <div className="w-full my-2  py-1  mx-auto">
              <a href={"/"}>
                  <div className="flex my-3" style={{ color: "#da1010"}}>
                      <i className="fa-solid fa-sign-out my-1 mx-3"></i>
                      <p>Log out</p>
                  </div>
              </a>
              <hr />
          </div>
      </div>
    </>
  );
}

export default Profile;
