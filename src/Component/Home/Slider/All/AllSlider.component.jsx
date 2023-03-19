import Card from "../../Card/Card.component";
import React from "react";
import {Link} from "react-router-dom";

export const AllSliderComponent = () => {

    const products = [
        {
            id : 1 ,
            state: "kulpi-shaka",
            name: "Kulpi",
            store_name: "Shaka food",
            price: 10000,
        },
        {
            id : 2 ,
            state: "roreng-dita",
            name: "Roti Goreng",
            store_name: "Dita's food",
            price: 5000,
        },
        {
            id : 3 ,
            state: "kulpi-shaka",
            name: "Kulpi",
            store_name: "Shaka food",
            price: 10000,
        },
        {
            id : 4 ,
            state: "roreng-dita",
            name: "Roti Goreng",
            store_name: "Dita's food",
            price: 5000,
        },
        {
            id : 5 ,
            state: "kulpi-shaka",
            name: "Kulpi",
            store_name: "Shaka food",
            price: 10000,
        },
        {
            id : 6 ,
            state: "roreng-dita",
            name: "Roti Goreng",
            store_name: "Dita's food",
            price: 5000,
        },
    ];

    return (
        <>
            <div className="bg-white py-2">
                <div className="mx-6 my-4 ">
                    <div className="home-content bg-white">
                        <h5 className="font-medium text-2xl">
                            Mungkin Kamu Suka?
                        </h5>
                        <h6 className="text-gray-400 mt-1">
                            Belanja keperluanmu
                        </h6>

                        <div className=" my-4">
                            <div className="grid grid-cols-2 gap-5">
                                {products.map((product) => {
                                    return (
                                            <div className="bg-white shadow-sm rounded overflow-hidden" key={product.id}>
                                                <Link to={"/product/" + product.state}>
                                                    <div
                                                        className="img bg-blue-300"
                                                        style={{height: "140px"}}
                                                    >
                                                        <img src="/products/fs.jpg" className="h-full"/>
                                                    </div>
                                                </Link>
                                                <div className="px-4 py-2">
                                                    <h6>{product.name}</h6>
                                                    <div className="flex jusfify-between">
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
                                                            <div className="flex py-2 w-full justify-between items-center ">
                                                                <Link to={"/product/" + product.state}>
                                                                <div className="text-left ">
                                                                    <button className="bg-red-600   px-5 py-1 text-white font-light " style={{ fontSize : "13px" , borderRadius: "8px"}}>
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                                </Link>
                                                                <div className="text-right ">
                                                                    <button className=" px-2 py-1  text-white font-light " style={{ fontSize : "13px" , borderRadius: "8px" , border : "1px solid #ebebeb"}}>
                                                                        <i className="fa-regular fa-heart " style={{ color: "#ea1111" , fontSize: "14px"}}></i>
                                                                    </button>
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