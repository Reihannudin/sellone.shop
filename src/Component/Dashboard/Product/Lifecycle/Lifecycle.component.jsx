import {Link} from "react-router-dom";
import React from "react";

export const LifecycleProductComponent = () => {

    const products = [
        {
            id : 1,
            state: "ayam-upin-ipin",
            name: "Ayam Upin-Ipin",
            price: 14000,
            store_name: "Mail Food",
        },
        {
            id : 2,
            state: "ayam-upin-ipin",
            name: "Ayam Upin-Ipin",
            price: 14000,
            store_name: "Mail Food",
        },
        {
            id : 3,
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
                            <div className="block gap-5">
                                {products.map((product) => {
                                    return (
                                        <div className="bg-white shadow-sm rounded overflow-hidden" key={product.id}>
                                            <div className="flex">
                                                <div
                                                    className="img bg-blue-300"
                                                    style={{height: "140px"}}
                                                >
                                                    <img src="/products/fs.jpg" className="h-full"/>
                                                </div>
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
                                                            <div className="text-left">
                                                                <button className=" px-3 py-0 rounded-2xl text-white font-light " style={{ fontSize : "11px" , background : "rgb(133,255,94)"}}>
                                                                    Active
                                                                </button>
                                                            </div>
                                                            <div className="my-2 flex justify-between">
                                                                    <div className="text-left">
                                                                        <button className=" px-3 py-1 text-red-600 font-light " style={{ fontSize : "12px" , border : "1px solid #ebebeb" ,  borderRadius : "8px"}}>
                                                                            Update Status
                                                                        </button>
                                                                    </div>
                                                                    <div>
                                                                        <button className="bg-red-600 px-3 py-1 text-white font-light " style={{ fontSize : "13px" , borderRadius : "8px"}}>
                                                                            <i className="fa-solid fa-trash"></i>
                                                                        </button>
                                                                    </div>
                                                            </div>
                                                            {/*<i className="fa-solid fa-store mr-2"></i>*/}

                                                            {/*<h6 className="text-sm text-gray-500">*/}
                                                            {/*</h6>*/}
                                                        </div>
                                                        {/* <div className="text-right">
                          <button className="bg-yellow-400 px-3 rounded-full text-white font-bold text-xl">

                          </button>
                        </div>
                                                        {/* <i class="fa-regular fa-cart-plus"></i> */}
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
