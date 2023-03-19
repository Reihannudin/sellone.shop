import React from "react";

export const AddNewProductComponent = () =>{
    return(
        <>
            <div className="mt-5 mx-4">
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Nama Product
                    </label>
                    <input
                        type="text"
                        onChange="ayam upin-ipin"
                        className="border-b  border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Nama Product"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Product Image
                    </label>
                    <input
                        type="file"
                        className="border-b border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Gambar Product"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Description
                    </label>
                    <input
                        type="text"
                        onChange="description"
                        className="border-b border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Descripsi"
                    />
                </div>
                <div className="">
                    <span>Tambahkan Nama & Harga varian dari product anda</span>
                    <input
                        type="text"
                        onChange="description"
                        className="border-b my-2 border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Varian Baru"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black-100">
                        Harga Variant
                    </label>
                    <input
                        type="number"
                        onChange="0.0"
                        className="border-b  border-grey-600 w-full outline-none text-mf py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Description Variant
                    </label>
                    <input
                        type="text"
                        className="border-b border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Descripsi"
                        onChange="description"
                    />
                </div>

            </div>
        </>
    )
}

// <div className="mb-4">
//     <label htmlFor="" className="text-black">
//         Tambahkan custom options
//     </label>
//     <div className="my-2">
//         <input
//             type="text"
//             className="border-b border-grey-600 w-full outline-none text-mf py-2"
//             placeholder="Tambahkan Varian Baru"
//         />
//     </div>
// </div>
