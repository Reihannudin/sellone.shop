import { Link } from "react-router-dom";
import React, {useEffect} from "react";
import {Navbar} from "../Component/Home/Navbar/Navbar.component";
import {Search, SearchComponent} from "../Component/Home/Search/Search.component";
import {NameTagComponent} from "../Component/Home/NameTag/NameTag.component";
import {Banner} from "../Component/Home/Banner/Banner.component";
import {CategoryComponent} from "../Component/Home/Category/Category.component";
import {SliderComponent} from "../Component/Home/Slider/Slider.component";
import {BestSellerSliderComponent} from "../Component/Home/Slider/BestSeller/BestSellerSlider.component";
import {RecomendedSliderComponent} from "../Component/Home/Slider/Recomended/RecomendedSlider.component";
import {AllSliderComponent} from "../Component/Home/Slider/All/AllSlider.component";
import {Footer} from "../Component/Home/Footer/Footer.component";
import {CopywritingComponent} from "../Component/Home/Copywriting/Copywriting.component";
import {FlashSaleSliderComponent} from "../Component/Home/Slider/Flashsale/FlashSaleSlider.component";

function Home({logged}) {

    useEffect(() => {
        setTimeout(() => {
            <Banner />;
        }, 1000); // You can adjust the delay time as needed
    }, []);

    return (
    <>
      <Navbar logged={logged} />
      <div className="bg-white">
        <div className="pt-7">
          <SearchComponent logged={logged} />
        </div>
        <Banner />
        <CategoryComponent />
      </div>
      <div>
        <RecomendedSliderComponent />
          <FlashSaleSliderComponent />
        <BestSellerSliderComponent />
          <AllSliderComponent />
      </div>
        <CopywritingComponent />
        <Footer />
    </>
  );
}

export default Home;
