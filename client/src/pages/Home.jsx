import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";
import CaroueseComponent from "../components/homepage/carousel.component";
import InfoCard from "../components/homepage/infoCard";
import OfferSlider from "../components/offerSlider";
import BannerSmall from "../components/bannerSmall";
import CategorySlider from "../components/homepage/categorySlider.component";

//import Functions
import {listDeals} from "../functions/deal.functions";
import {listBestSeller} from "../functions/bestSeller.function";

export default function Home() {
    const [deals,setDeals] = useState([]);
    const [bests,setBests] = useState([]);

    const {category : {categories}} = useSelector(state => state);

    

    useEffect(()=>{
        listDeals(10).then(data=>{
            if(data){
                setDeals(data.deals);
            }
        })
        listBestSeller(10).then(data=>{
            if(data){
                setBests(data);
            }
        })
    },[])


    return (
        <div>
            <CaroueseComponent />
            <InfoCard />
            <BannerSmall />
            <OfferSlider items={deals} deal={true} title={"deal of the week"} />
            <OfferSlider invert={true} items={bests} best={true} title={"Best Sellers"} />
            {
                categories.map((cat,i)=>{
                    return <CategorySlider invert={(i + 1) % 2 === 0} category={cat} />
                })
            }

        </div>  
    )
} 
 