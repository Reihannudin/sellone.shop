import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";


function Checkout() {
  const [qty, setQty] = useState(1);

  const product = {
    name: "Dadar Coklat - Za Choco",
    price: 10000,
    store_name: "Zacky's Food",
    description:
      "Produk dibuat oleh tangan-tangan yang berkualitas. Dengan tingkat kepuasan 100%",
  };

  return (
    <>
      <div className="px-4 bg-white  pb-4 pt-6 flex items-center mb-3" style={{ borderBottom: "1px solid #ebebeb"}}>
        <Link to="/">
          <h6 className="text-lg mb-0">
            <i className="fa-solid fa-arrow-left"></i>
          </h6>
        </Link>
        <h5 className="font-medium text-xl ml-3">Checkout</h5>
      </div>
      <div
        className="bg-white px-5 "
        style={{
          borderTopRightRadius: "27px",
          borderTopLeftRadius: "27px",
        }}
      >

        <h5 className="font-bold  text-2xl mt-3">Data diri</h5>
        <div className="mt-5">
          <div className="mb-4">
            <label htmlFor="" className="text-gray-400">
              Nama Anda
            </label>
            <input
              type="text"
              className="border-b rounded-2xl border-grey-600 w-full outline-none text-lg py-3"
              placeholder="Cth: Arip"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="text-gray-400">
              Alamat
            </label>
            <input
              type="text"
              className="border-b  rounded-2xl border-grey-600 w-full outline-none text-lg py-3"
              placeholder="Isi berdasarkan titik pertemuan."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="text-gray-400">
              Catatan (Opsional)
            </label>
            <input
                type="text"
                className="border-b  rounded-2xl border-grey-600 w-full outline-none text-lg py-3"
                placeholder="Isi berdasarkan titik pertemuan."
            />
          </div>
        </div>

        <h5 className="font-bold text-lg mt-7">Pesanan</h5>
        <div className="shadow-sm rounded overflow-hidden px-4 py-2 flex">
          <img src="/products/fs.jpg" alt="" className="h-14 rounded" />
          <div className="pl-2">
            <h6 className="text-sm">{product.name}</h6>
            <h6 className="font-bold text-red-600">Rp {product.price}</h6>
          </div>
        </div>

        <div className="mt-8 pb-10">
          <div className="py-3 flex items-center justify-between">
            <label htmlFor="">Jumlah</label>
            <input
              type="number"
              className="border-b border-grey-400  rounded-2xl w-20 outline-none py-3 text-center"
              defaultValue={qty}
              onKeyUp={(e) => setQty(e.target.value)}
            />
          </div>
          <div className="py-3 flex items-center justify-between">
            <label htmlFor="">Harga</label>
            <div>
              {qty} x Rp {product.price}
            </div>
          </div>
          <hr className="border-t" />
          <div className="py-3 flex items-center justify-between">
            <label htmlFor="">Total Harga</label>
            <div className="font-bold text-xl">Rp {qty * product.price}</div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="flex bg-white px-4 py-3 border-t mx-auto" style={{
          maxWidth: '400px'
        }}>
          <Link to={"/"} className="w-full">
            <button className="bg-red-600 text-white rounded-lg py-2 text-center w-full">
              Konfirmasi
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Checkout;
