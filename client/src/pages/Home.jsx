import React,{useState,useEffect} from 'react';

import CaroueseComponent from "../components/homepage/carousel.component";
import InfoCard from "../components/homepage/infoCard";
import OfferSlider from "../components/offerSlider";
import BannerSmall from "../components/bannerSmall";

//import Functions
import {listDeals} from "../functions/deal.functions";

export default function Home() {
    const [deals,setDeals] = useState([]);

    useEffect(()=>{
        listDeals(10).then(data=>{
            if(data){
                setDeals(data.deals);
            }
        })
    },[])

    return (
        <div>
            <CaroueseComponent />
            <InfoCard />
            <BannerSmall />
            <OfferSlider items={deals} deal={true} title={"deal of the week"} />

        </div>
    )
} 
 