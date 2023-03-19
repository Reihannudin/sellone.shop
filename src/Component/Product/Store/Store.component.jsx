import React from "react";

const product = {
    name: "Dadar Coklat - Za Choco",
    price: 10000,
    store_name: "Zacky's Food",
    description:
        "Produk dibuat oleh tangan-tangan yang berkualitas. Dengan tingkat kepuasan 100%",
};


export const StoreComponent = () => {
    return(
        <>
            <div className="mt-4 border rounded-lg px-4 py-2">
                <div className="">
                    <i className="fa-solid fa-store mr-2 text-red-600"></i>
                    {product.store_name}
                </div>
                <div className="">
                    <i className="fa-solid fa-location mr-2 text-red-600"></i>
                    Citra Raya
                </div>
            </div>
        </>
    )
}