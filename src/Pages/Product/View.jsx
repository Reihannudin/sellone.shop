import React from "react";
import { Link, useParams } from "react-router-dom";
import {StoreComponent} from "../../Component/Product/Store/Store.component";
import {ProductComponent} from "../../Component/Product/Product/Product.component";
import {OtherProductSliderComponent} from "../../Component/Product/Slider/OtherProduct/OtherProductSlider.component";

function View() {
  const { state } = useParams();

  const product = {
    name: "Dadar Coklat - Za Choco",
    price: 10000,
    store_name: "Zacky's Food",
    description:
      "Produk dibuat oleh tangan-tangan yang berkualitas. Dengan tingkat kepuasan 100%",
  };

  return (
    <>
      <div className="bg-white pb-10">
        <div className="fixed">
          <div className="bg-white rounded-full shadow px-3 py-2 ml-4 mt-4">
            <Link to="/">
              <h6 className="text-lg">
                <i className="fa-solid fa-arrow-left"></i>
              </h6>
            </Link>
          </div>
        </div>

        <div
          className="bg-yellow-300"
          style={
            {
              // minHeight: "300px",
            }
          }
        >
          <img src="/products/fs.jpg" className="w-full" alt="" />
        </div>
        <div
          className="-mt-6 px-4 py-6 bg-white border"
          style={{
            borderTopRightRadius: "27px",
            borderTopLeftRadius: "27px",
            minHeight: "500px",
            position: "relative",
            zIndex: 2,
          }}
        >
            <ProductComponent />
          <StoreComponent />
            <OtherProductSliderComponent />
        </div>
      </div>
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
          <Link to={"/product/" + state + "/checkout"} className="w-full">
            <button className="bg-red-600 w-full text-white rounded-lg py-2 text-center w-full">
              Beli bang
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default View;
