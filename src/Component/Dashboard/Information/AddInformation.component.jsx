import React from "react";
import {Link} from "react-router-dom";

export const AddInformationComponent = () => {

    function shopNameHC(event) {
        console.log(event.target.value);
    }

    function numPhoneHC(event) {
        console.log(event.target.value);
    }

    return (
        <>
            <div className=" mx-4">
                <div className="my-2 py-3 px-3  border-grey-200" style={{ background : "rgba(255,231,109,0.88)"}}>
                    <span>Buatlah toko anda agar bisa berjualan</span>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="text-black-100">
                        Nama Toko
                    </label>
                    <input
                        type="text"
                        required
                        className="border-b my-2 border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Nama Toko"
                        onChange={shopNameHC}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black-100">
                        Nomor Telepon
                    </label>
                    <input
                        type="text"
                        required
                        className="border-b my-2 border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Nomor Telepon anda"
                        onChange={numPhoneHC}
                    />
                </div>
                <div className="w-100">
                    <div
                        className="fixed bottom-0 left-0 w-full"
                        style={{
                            zIndex: 2,
                        }}
                    >
                        <div
                            className="flex mx-auto px-4 py-3 border-t bg-white"
                            style={{
                                maxWidth: "400px",
                            }}
                        >
                            <Link to={""} className="w-full">
                                <button className="bg-red-600 w-full text-white rounded-lg py-2 text-center w-full">
                                    Save Product
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}