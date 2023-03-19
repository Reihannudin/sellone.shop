import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {LifecycleProductComponent} from "../../../Component/Dashboard/Product/Lifecycle/Lifecycle.component";

export const LifecycleProduct = () => {

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
                        <h5 className="font-medium text-xl ml-3">Add New Product</h5>
                    </div>
                </div>
            </div>
            {/*// , borderBottom : "1px solid #eeeeee"*/}
            <div className="h-100" style={{ paddingTop : "73px" ,background : "rgba(245,245,245,0.66)", borderTop : "1px solid #eaeaea" , height : "100%"}}>
                <div className="py-3 " style={{ background : "white" , borderRight : "1px solid #ebebeb" , borderLeft : "1px solid #ebebeb"}}>
                   <div className="mx-4">
                       <p>Atur status product mu jika ingin ditampilkan atau diarsipkan !</p>
                   </div>
                </div>
                <div  style={{ marginTop :"2px"}}>
                    <LifecycleProductComponent />
                </div>
            </div>

        </>
    )
}