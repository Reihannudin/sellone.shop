import Card from "../Card/Card.component";
import React from "react";
import {Link} from "react-router-dom";

export const AllSearchComponent = () => {

    const products = [
        {
            id : 1,
            state: "kulpi-shaka",
            name: "Kulpi",
            store_name: "Shaka food",
            price: 10000,
        },
        {
            id : 2,
            state: "roreng-dita",
            name: "Roti Goreng",
            store_name: "Dita's food",
            price: 5000,
        },
        {
            id : 3,
            state: "kulpi-shaka",
            name: "Kulpi",
            store_name: "Shaka food",
            price: 10000,
        },
        {
            id : 4,
            state: "roreng-dita",
            name: "Roti Goreng",
            store_name: "Dita's food",
            price: 5000,
        },
        {
            id : 5,
            state: "kulpi-shaka",
            name: "Kulpi",
            store_name: "Shaka food",
            price: 10000,
        },
        {
            id : 6,
            state: "roreng-dita",
            name: "Roti Goreng",
            store_name: "Dita's food",
            price: 5000,
        },
    ];

    return (
        <>
            <div className="bg-white py-2">
                <div className="mx-1 my-4 ">
                    <div className="home-content bg-white">

                        <div className=" my-4">
                            <div className="grid grid-cols-2 gap-5">
                                {products.map((product) => {
                                    return (
                                        <Link to={"/product/" + product.state} key={product.id}>
                                            <div className="bg-white shadow-sm rounded overflow-hidden" key={product.id}>
                                                <div
                                                    className="img bg-blue-300"
                                                    style={{height: "140px"}}
                                                >
                                                    <img src="/products/fs.jpg" className="h-full"/>
                                                </div>
                                                <div className="py-2">
                                                    <h6  className="mx-3 ">{product.name}</h6>
                                                    <div className="flex jusfify-between">
                                                        <div>
                                                            <div className="mx-3 ">
                                                                <div className="flex">
                                                                    <div className="price ">IDR.{product.price}</div>
                                                                    <div className="ml-1 mt-1 text-xs " style={{ color:"rgba(145,145,145,0.87)"}}>
                                                                        IDR.<del>10000</del>
                                                                    </div>
                                                                </div>
                                                                <div className="category text-xs font-light ">
                                                                    {product.store_name}
                                                                </div>
                                                                <div className="flex mt-3 mb-1 items-center ">
                                                                    <button className="border bg-red-600 text-white px-6 w-full py-1 text-sm rounded-md mr-1 ">
                                                                        Buy Now
                                                                    </button>
                                                                    <button className="border  mx-1 px-2  py-1 text-sm rounded-md mr-1 ">
                                                                        <i className="fa-solid text-red-600 fa-heart"></i>
                                                                    </button>
                                                                </div>
                                                                {/*<i className="fa-solid fa-store mr-2"></i>*/}

                                                                {/*<h6 className="text-sm text-gray-500">*/}
                                                                {/*</h6>*/}
                                                            </div>

                                                        </div>
                                                        {/* <div className="text-right">
                          <button className="bg-yellow-400 px-3 rounded-full text-white font-bold text-xl">
                            +
                          </button>
                        </div> */}
                                                        {/* <i class="fa-regular fa-cart-plus"></i> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
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