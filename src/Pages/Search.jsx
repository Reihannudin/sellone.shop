import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {SearchComponent} from "../Component/Home/Search/Search.component";
import {AllSliderComponent} from "../Component/Home/Slider/All/AllSlider.component";
import {AllSearchComponent} from "../Component/Home/Search/AllSearch.component";
import {CopywritingComponent} from "../Component/Home/Copywriting/Copywriting.component";
import {Footer} from "../Component/Home/Footer/Footer.component";

export const SearchPage = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return(
        <>
            <div className="bg-white">
                <div className="px-4 bg-white w-full pb-3 pt-6 flex items-center mb-3">
                    <button onClick={goBack}>
                        <h6 className="text-lg mb-0">
                            <i className="fa-solid fa-arrow-left"  style={{ fontSize: "23px"}}></i>
                        </h6>
                    </button>
                    <div className="mx-4 w-full">
                        <Link to={"/search/name"}>
                            <div className="shadow-sm rounded-2xl overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Cari jualan apa bang?"
                                    className="outline-none  rounded-2xl text-md w-full bg-white py-1.5"
                                />
                            </div>
                        </Link>
                    </div>

                    {/*<h5 className="font-medium text-xl ml-3">Saerch</h5>*/}
                </div>

                <hr/>
                <div className="w-full">
                    <div className="py-3 mx-4">
                        <h3>Pencarian pouplar</h3>
                    </div>
                    <div className="">
                        <div className="my-2 py-2  border-b-gray-50" style={{ borderBottom : "1px solid #ebebeb"}}>
                            <div className="mx-4"  style={{ color : "#f56868"}}>
                                Makanan
                            </div>
                        </div>
                        <div className="my-2 py-2  border-b-amber-50"  style={{ borderBottom : "1px solid #ebebeb"}}>
                            <div className="mx-4" style={{ color : "#f56868"}}>
                                Minuman
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
