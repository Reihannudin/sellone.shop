import React from "react";
import {Link} from "react-router-dom";

function Card() {
    return (
        <>
            <div className="card bg-white w-[190px] m-2 rounded-lg shadow-lg" style={{ minHeight: "255px" , maxHeight : "255px"}}>
                <Link to={"/product/apakek"}>
                <div className="top" >
                    <img
                        className="w-[190px] h-[130px] object-cover "
                        src="/products/fs.jpg"
                        alt="img"
                        style={{ borderRadius: "8px 8px 0px 0px"}}
                    />
                </div>
                </Link>
                <div className="bottom flex flex-col justify-center items-start px-3 py-2 bg-">
                    <div className="title font-semibold text-md my-1">
                        Kulpi
                    </div>
                    <div className="category text-xs font-light ">
                        BTS Food
                    </div>

                    <div className="pricing flex items-center">
                        {" "}
                        <div className="price ">IDR.5000.00</div>
                        {/*<div className="ml-2 text-xs ">*/}
                        {/*    $<del>1320</del>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex py-2 w-full justify-between items-center ">
                        <Link to={"/product/apakek"}>
                            <div className="text-left ">
                                <button className="bg-red-600   px-8 py-1 text-white font-light " style={{ fontSize : "13px" , borderRadius: "8px"}}>
                                    Buy Now
                                </button>
                            </div>
                        </Link>
                        <div className="text-right ">
                            <button className=" px-3 py-1  text-white font-light " style={{ fontSize : "13px" , borderRadius: "8px" , border : "1px solid #ebebeb"}}>
                                <i className="fa-regular fa-heart " style={{ color: "#ea1111" , fontSize: "14px"}}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card