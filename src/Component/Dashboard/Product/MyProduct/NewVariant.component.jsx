import React from "react";

export const AddNewVariantComponent = () =>{
    return(
        <>
            <div className="mt-5 mx-4">
                <div className="mb-4">
                    <label htmlFor="" className="text-black">
                        Nama Variant
                    </label>
                    <input
                        type="text"
                        className="border-b  border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Nama Product"
                        value="ayam upin-ipin"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-black-100">
                        Harga Variant
                    </label>
                    <input
                        type="number"
                        className="border-b  border-grey-600 w-full outline-none text-mf py-2"
                        placeholder="Tambahkan Price"
                        value="0.0"
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
                        value="description "
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
