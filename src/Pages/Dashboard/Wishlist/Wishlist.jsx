import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {AllSearchComponent} from "../../../Component/Home/Search/AllSearch.component";
import {CopywritingComponent} from "../../../Component/Home/Copywriting/Copywriting.component";
import {Footer} from "../../../Component/Home/Footer/Footer.component";

export const Wishlist = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="bg-white">
                <div className="px-4 bg-white  pb-4 pt-6 flex items-center mb-3" style={{ borderBottom: "1px solid #ebebeb"}}>
                    <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left"></i>
                        </h6>
                    </button>
                    <h5 className="font-medium text-xl ml-3">Wishlist</h5>
                </div>
                <div>
                    <AllSearchComponent />
                </div>
                <CopywritingComponent />
                <Footer />
            </div>
        </>
    )
}