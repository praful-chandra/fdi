import React from 'react'
import BannerMain from "../components/bannerMain";
import InfoCard from "../components/infoCard";
import BannerSmall from "../components/bannerSmall";
import OfferSlider from "../components/offerSlider";
// import PromoBanner from "../components/promoBanner";
import BestSeller from "../components/bestSeller";
import Brands from "../components/brands";



export default function index() 
    {
        

    return (
        <>
            <BannerMain />
            <InfoCard />
            <BannerSmall />
            <OfferSlider deal={true} />
            <BestSeller />
            {/* <PromoBanner />           */}
            <OfferSlider />
            <Brands />
        </>
    )
}
