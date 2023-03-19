import React from "react";

export const NameTagComponent = ({logged}) => {

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    return(
        <>
            <div className="-mt-5 py-2">
                {logged ? (
                    <div className="">
                        <div className="my-0 py-0">
                            <span className="my-0 py-0" style={{ fontSize : "13px", color : "#3b3b3b" }}>Hai senang melihatmu kembali</span>
                        </div>
                        <div className="pt-0 pb-1">
                            <h3 className="my-0 py-0" style={{ fontSize : "20px" , fontWeight : "500"}}>{user.name}</h3>
                        </div>
                    </div>
                        ) : (
                        <div className="">
                            <div className="my-0 py-1">
                                <h3 className="my-0 py-0" style={{ fontSize : "16px" , fontWeight : "500"}}>Silakan masuk, </h3>
                                <h3 className="my-0 py-0" style={{ fontSize : "18px" , fontWeight : "500"}}>kami menunggumu</h3>
                            </div>
                        </div>

                )}
            </div>
        </>
    )
}