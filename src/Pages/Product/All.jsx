import {Link, useNavigate} from "react-router-dom";
import {AllSearchComponent} from "../../Component/Home/Search/AllSearch.component";
import {CopywritingComponent} from "../../Component/Home/Copywriting/Copywriting.component";
import {Footer} from "../../Component/Home/Footer/Footer.component";
import React from "react";

export const ProductAll = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="bg-white">
                <div className="px-4 bg-white  pb-3 pt-6 flex items-center mb-3"  style={{ borderBottom: "1px solid #ebebeb"}}>
                    <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left"  style={{ fontSize: "23px"}}></i>
                        </h6>
                    </button>
                    <div className="mx-4">
                        <div className="shadow-sm rounded-2xl overflow-hidden">
                            <input
                                type="text"
                                placeholder="Cari jualan apa bang?"
                                className="outline-none  rounded-2xl text-md w-full bg-white px-5 py-1.5"
                            />
                        </div>
                    </div>
                    <div>
                        <Link to="/wishlist">
                            <div className="mx-4 cursor-pointer">
                                <i className="fa-regular fa-heart" style={{ fontSize: "23px"}}></i>
                            </div>
                        </Link>
                    </div>
                    <div className="mx-auto my-1">
                        <Link to="/profile">
                            <div style={{ height: "30px"}} className="my-1">
                                <div className={"h-full"}>
                                     <span className="bg-gray-100 px-3 py-2 rounded-full">
                                        <i className="fa-solid fa-user"></i>
                                     </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*<h5 className="font-medium text-xl ml-3">Saerch</h5>*/}
                </div>
                <div className="flex">
                    <div>
                        <p style={{ fontSize : "16px"}}>Beranda</p>
                    </div>
                    <i className="fa-solid mx-3 my-1 fa-angle-right"></i>
                    <div>
                        <p style={{ fontSize : "16px"}}>BTS</p>
                    </div>
                </div>
                <div className="mb-2">
                    <p style={{ fontSize: "24px"}}>Hasil untuk pencarian</p>
                </div>
                <hr/>
                <div>
                    <div className="flex justify-between py-3 ">
                        <div style={{ fontSize : "18px"}}>
                            Filter
                            <i className="fa-solid mx-2 fa-filter"></i>
                        </div>
                        <div style={{ fontSize : "18px"}}>
                            Best Match
                            <i className="fa-solid mx-2 fa-arrows-from-line"></i>
                        </div>
                    </div>
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