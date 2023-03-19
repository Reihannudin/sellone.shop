import Card from "../../../Home/Card/Card.component";
import React from "react";

export const OtherProductSliderComponent = () => {

    const scrollLeft = () => {
        document.getElementById("contentRecommended").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("contentRecommended").scrollLeft += 400;
    }

    return (
        <>
            <div className="relative pb-6 bg-white">
                <div className=" py-4 mx-5  text-lg font-bold">Produck Lainnya</div>
                <div className="absolute right-0 top-1 ">
                    <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div id="contentRecommended" className="carousel px-4 py-0 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )

}