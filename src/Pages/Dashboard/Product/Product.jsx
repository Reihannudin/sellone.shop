import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {MyProductComponent} from "../../../Component/Dashboard/Product/MyProduct/MyProduct.component";

export const Product = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="bg-white" >
                <div className="bg-white "  style={{ position : "fixed"  , width: "95%" }}>
                    <div className="px-4 bg-white  pb-4 pt-6 flex items-center mb-3" style={{ borderBottom: "1px solid #ebebeb"}}>
                        <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                                <i className="fa-solid fa-arrow-left"></i>
                            </h6>
                        </button>
                        <h5 className="font-medium text-xl ml-3">My Product</h5>
                    </div>
                </div>
            </div>
            {/*// , borderBottom : "1px solid #eeeeee"*/}
            <div className="h-100" style={{ paddingTop : "73px" ,background : "rgba(245,245,245,0.66)", borderTop : "1px solid #eaeaea" , height : "100%"}}>
                <div className="py-3 justify-between flex " style={{ background : "white" , borderRight : "1px solid #ebebeb" , borderLeft : "1px solid #ebebeb"}}>
                    <div className="mx-4 my-0 py-0">
                        <p className="font-medium my-0 py-0" style={{ fontSize : "18px"}}>
                            My Product
                        </p>
                        <p className="text-gray-400 my-0 py-0" style={{ fontSize : "16px"}}>
                            Daftar product anda
                        </p>
                    </div>
                    <Link to={"/user/add/product/"} >
                    <div className="mx-4 my-1">
                        <button className=" py-2 px-3  text-white " style={{ border : "1px solid #eeaeaea" , background : "rgba(229,11,11,0.93)" }}>Add New Product</button>
                    </div>
                    </Link>
                </div>
                <div  style={{ marginTop :"2px"}}>
                    <MyProductComponent />
                </div>
            </div>

        </>
    )
}