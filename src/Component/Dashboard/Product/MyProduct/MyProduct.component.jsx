import Card from "../../../Home/Card/Card.component";
import React from "react";
import {Link, NavLink} from "react-router-dom";

export const MyProductComponent = () => {

    const products = [
        {
            id : 1,
            state: "ayam-upin-ipin",
            name: "Ayam Upin-Ipin",
            price: 14000,
            store_name: "Mail Food",
        },

    ];

    return (
        <>
            <div className="bg-white pt-1 pb-2 ">
                <div className="mx-6 mb-4 mt-2 ">
                    <div className="home-content bg-white">
                        <div className=" my-4">
                            <div className="grid grid-cols-2  gap-5">
                                {products.map((product) => {
                                    return (
                                        <div key={product.id}>
                                                <div className="bg-white shadow-sm rounded overflow-hidden">
                                                    <Link to={"/user/product/" + product.state}>
                                                    <div
                                                        className="img bg-blue-300"
                                                        style={{height: "140px"}}
                                                    >
                                                        <img src="/products/fs.jpg" className="h-full"/>
                                                    </div>
                                                    </Link>
                                                    <div className="px-4 py-2">
                                                        <h6>{product.name}</h6>
                                                        <div className="flex justify-between">
                                                            <div>
                                                                <div className="flex">
                                                                    <div className="price ">IDR.{product.price}</div>
                                                                    <div className="ml-1 mt-1 text-xs " style={{ color:"rgba(145,145,145,0.87)"}}>
                                                                        IDR.<del>10000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="category text-xs font-light ">
                                                                    {product.store_name}
                                                                </div>
                                                                <div className="my-2">
                                                                    <Link to={"/user/edit/product/" + product.state} >
                                                                        <div className="text-left">
                                                                            <button className="bg-red-600 px-3 py-1 rounded-full text-white font-light" style={{ fontSize : "13px" , borderRadius : "8px 8px 8px 8px"}}>
                                                                                Edit Product
                                                                            </button>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}