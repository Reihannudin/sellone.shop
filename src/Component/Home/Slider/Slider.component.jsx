import Card from "../Card/Card.component";
import React from "react";

export const SliderComponent = () => {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }

    return (
        <>
            <div className="relative">
                <div className=" py-4 mx-5  text-lg font-bold">Rekomendasi untuk kamu</div>
                <div className="absolute right-0 top-1 ">
                    <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div id="content" className="carousel px-4 py-0 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
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