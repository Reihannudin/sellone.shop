import React from "react";
import {Link} from "react-router-dom";

export const CategoryComponent = () => {
    return(
        <>
         <div className="mx-4 mt-3  pb-4">
             <div className="py-3">
                 <h4>Tentukan yang kamu butuhkan</h4>
             </div>
             <div className="flex gap-4">
                 <Link to={"/search/name"}>
                     <div>
                         <div className="mx-4">
                             <div  style={{  borderRadius: "100%"}} >
                                 <div style={{ margin: " auto" , background :"rgba(227,227,227,0.7)" , width : "80px" , height: "80px" , padding: "1px" ,  borderRadius: "100%"}} >
                                     <img src="/products/fs.jpg" style={{ borderRadius: "100%" , margin: "5px auto",  width : "88%" , height: "88%" }} alt="Category"  />
                                 </div>
                             </div>
                             <div className="w-full text-center my-2">
                                 <span className="mx-auto ">Makanan</span>
                             </div>
                         </div>
                     </div>
                 </Link>
                 <Link to={"/search/name"}>
                     <div>
                 <div className="mx-4">
                     <div  style={{  borderRadius: "100%"}} >
                         <div style={{ margin: " auto" , background :"rgba(227,227,227,0.7)" , width : "80px" , height: "80px" , padding: "1px" ,  borderRadius: "100%"}} >
                             <img src="/products/fs.jpg" style={{ borderRadius: "100%" , margin: "5px auto",  width : "88%" , height: "88%" }} alt="Category"  />
                         </div>
                     </div>
                     <div className="w-full text-center my-2">
                         <span className="mx-auto ">Minuman</span>
                     </div>
                 </div>
                     </div>
                 </Link>
                 <Link to={"/search/name"}>
                     <div>
                 <div className="mx-4">
                     <div  style={{  borderRadius: "100%"}} >
                         <div style={{ margin: " auto" , background :"rgba(227,227,227,0.7)" , width : "80px" , height: "80px" , padding: "1px" ,  borderRadius: "100%"}} >
                             <img src="/products/fs.jpg" style={{ borderRadius: "100%" , margin: "5px auto",  width : "88%" , height: "88%" }} alt="Category"  />
                         </div>
                     </div>
                     <div className="w-full text-center my-2">
                         <span className="mx-auto ">TopUp</span>
                     </div>
                 </div>
                     </div>
                 </Link>
             </div>
         </div>
        </>
    )
}