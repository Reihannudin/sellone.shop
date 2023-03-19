import React from "react";

export const UpdatePromotiontComponent = () =>{
    return(
        <>
            <h5 className="font-bold text-lg mt-7">Pesanan</h5>
            <div className="shadow-sm rounded overflow-hidden px-4 py-2 flex">
                <img src="/products/fs.jpg" alt="" className="h-14 rounded" />
                <div className="pl-2">
                    <h6 className="text-sm">ayam upin ipin</h6>
                    <h6 className="font-bold text-red-600">Rp 12000</h6>
                </div>
            </div>
            <div className="mt-5 mx-4">
                <div className="mb-4">
                    <label htmlFor="" className="text-black-100">
                        Price Saat Ini
                    </label>
                    <input
                        type="text"
                        className="border-b bg-gray-300 pointer-events-none  border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Price"
                        disabled
                        value="12000.00"
                    />
                </div>
                <div className="my-2 py-3 px-3  border-grey-200" style={{ background : "rgba(255,231,109,0.88)"}}>
                    <span>Tetapkan harga discount</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black-100">
                        Price Setelah Discount
                    </label>
                    <input
                        type="text"
                        className="border-b  border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Harga Discount"
                        value=""
                    />
                </div>

            </div>
        </>
    )
}