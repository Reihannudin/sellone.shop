
import React from "react";
import {Link} from "react-router-dom";

export function HorizontalCardComponent() {
    return (
        <>
            <div className="card bg-white w-[200px] m-2 rounded-lg shadow-lg" style={{ minHeight: "240px" , maxHeight : "240px"}}>
                <Link to={"/product/apakek"}>
                    <div className="top" >
                        <img
                            className="w-[200px] h-[120px] object-cover "
                            src="/products/fs.jpg"
                            alt="img"
                            style={{ borderRadius: "8px 8px 0px 0px"}}
                        />
                    </div>
                </Link>
                    <div className="bottom flex flex-col justify-center items-start px-3 py-2 bg-">
                        <div className="py-1 w-full">
                            <h6>Ayam Upin-Ipin</h6>
                            <div className="w-full ">
                                <div>
                                    <div className="flex">
                                        <div className="price ">IDR.14000</div>
                                        <div className="ml-1 mt-1 text-xs " style={{ color:"rgba(145,145,145,0.87)"}}>
                                            IDR.<del>10000</del>
                                        </div>
                                    </div>
                                    <div className="category text-xs font-light ">
                                        Mail Food
                                    </div>
                                    <div className="my-2 w-full flex justify-between">
                                        <Link to={"/product/apakek"}>
                                            <div className="text-left">
                                                <button className="bg-red-600 px-3 py-1 rounded-2xl text-white font-light " style={{ fontSize : "13px" , borderRadius: "8px" , border : "1px solid #ebebeb"}}>
                                                    Buy Now
                                                </button>
                                            </div>
                                        </Link>
                                        <div className="text-right">
                                            <p className="text-red-400" style={{ fontSize : "8px"}}>Berakhir pada</p>
                                            <p className="text-red-600" style={{ fontSize : "10px"}}>12:00/13/03/23</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

// <div className="block gap-5">
//     {products.map((product) => {
//         return (
//             <div className="bg-white shadow-sm rounded overflow-hidden">
//                 <div className="flex">
//                     <div
//                         className="img bg-blue-300"
//                         style={{height: "140px"}}
//                     >
//                         <img src="/products/fs.jpg" className="h-full"/>
//                     </div>
//                     <div className="px-4 py-2">
//                         <h6>{product.name}</h6>
//                         <div className="flex jusfify-between">
//                             <div>
//                                 <div className="flex">
//                                     <div className="price ">IDR.{product.price}</div>
//                                     <div className="ml-1 mt-1 text-xs " style={{ color:"rgba(145,145,145,0.87)"}}>
//                                         IDR.<del>10000</del>
//                                     </div>
//                                 </div>
//                                 <div className="category text-xs font-light ">
//                                     {product.store_name}
//                                 </div>
//                                 <div className="my-2">
//                                     <Link to={"/user/update/product/" + product.state}>
//                                         <div className="text-left">
//                                             <button className="bg-red-600 px-3 py-1 rounded-2xl text-white font-light " style={{ fontSize : "13px"}}>
//                                                 Update Promo
//                                             </button>
//                                         </div>
//                                     </Link>
//                                 </div>
//                                 {/*<i className="fa-solid fa-store mr-2"></i>*/}
//
//                                 {/*<h6 className="text-sm text-gray-500">*/}
//                                 {/*</h6>*/}
//                             </div>
//                             {/* <div className="text-right">
//                           <button className="bg-yellow-400 px-3 rounded-full text-white font-bold text-xl">
//
//                           </button>
//                         </div>
//                                                         {/* <i class="fa-regular fa-cart-plus"></i> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//         );
//     })}
// </div>
