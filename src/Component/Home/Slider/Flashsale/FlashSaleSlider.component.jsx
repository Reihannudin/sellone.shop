import Card from "../../Card/Card.component";
import React from "react";
import {Link} from "react-router-dom";
import {HorizontalCardComponent} from "../../Card/HorizontalCard.component";

export const FlashSaleSliderComponent = () => {

    const scrollLeft = () => {
        document.getElementById("contentFlashSale").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("contentFlashSale").scrollLeft += 400;
    }

    return (
        <>
            <div className="relative bg-white">
                <div className=" py-4 mx-5  text-lg font-bold">Flash Sale</div>
                <div className="absolute right-0 top-1 ">
                    <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div id="contentFlashSale" className="carousel px-4 py-0 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
                    <div>
                        <HorizontalCardComponent />
                    </div>
                    <div>
                        <HorizontalCardComponent />
                    </div>
                    <div>
                        <HorizontalCardComponent />
                    </div>
                    <div>
                        <HorizontalCardComponent />
                    </div>
                    <div>
                        <HorizontalCardComponent />
                    </div>
                    <div>
                        <HorizontalCardComponent />
                    </div>
                </div>
            </div>
        </>
    )

}