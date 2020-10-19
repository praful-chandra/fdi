import React from 'react'
import Navbar from "../components/navbar";
import BannerMain from "../components/bannerMain";
import InfoCard from "../components/infoCard";
import BannerSmall from "../components/bannerSmall";
import OfferSlider from "../components/offerSlider";
import PromoBanner from "../components/promoBanner";
import BestSeller from "../components/bestSeller";
import Brands from "../components/brands";
import Footer from "../components/footer";



export default function index() 
    {
        

    return (
        <>
            <Navbar/>
            <BannerMain />
            <InfoCard />
            <BannerSmall />
            <OfferSlider deal={true} />
            <PromoBanner />          
            <OfferSlider />
            <BestSeller />
            <Brands />
            <Footer />
        </>
    )
}
