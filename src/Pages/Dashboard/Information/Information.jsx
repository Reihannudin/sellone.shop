import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {AddInformationComponent} from "../../../Component/Dashboard/Information/AddInformation.component";


function Information(){

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
                    <h5 className="font-medium text-xl ml-3">Information</h5>
                </div>
                <div className="h-100" style={{ background : "white", height : "100%"}}>
                    <AddInformationComponent />
                </div>
            </div>
        </>
    )
}

export default Information