import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {connect,useSelector} from "react-redux";
import priceFormatter from "../../functions/priceFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {  notification, Space } from 'antd';


import DealOfTheWeekBanner from "../../assets/deal_of_the_week.svg";
import FDIRBanner from "../../assets/fdi_recommended.png";
import BestBanner from "../../assets/best_seller.svg";
import PopupComponent from "../../components/showPopup.component";
import RightBuyComponent from "./singleProductHeadRight";

import styles from "../../sass/modules/singleProduct/singleProductHead.module.scss";

import {statusFdiR} from "../../functions/fdir.function";
import {getBestSeller} from "../../functions/bestSeller.function";
import avgRatings from "../../functions/avgRating";
import {getExchange} from "../../functions/exchange.function";

import {addCart} from "../../redux/actions/cartActions";

 function SingleProductHead({ product ,addCart}) {

  const {user } = useSelector(state => state);
  
  const [popup,setPopup] = useState(false);
  const [isFdi,setIsFdi] = useState(false);
  const [isBest,setIsBest] = useState(false);
  const [exchange,setExchange] = useState(false);
  const [selectedImage , setSelectedImage] = useState(0);

  useEffect(()=>{
    if(!product.deal){
      getBestSeller(product.selectedProduct._id).then(res=>{
        if(res && !res.error){
          setIsBest(true);
        }
      })
    }

    getExchange(product.product.subCategory._id).then(data =>{
      if(!data || !data.error){
        setExchange(data);
      }
    })
    
  },[])
  
  const avgR = avgRatings(product.product.reviews);
  useEffect(() => {
    statusFdiR(product.selectedProduct._id).then(res=>setIsFdi(res));  
  },)
  const optionCard = (opt, active) => {
    return (
      <a key={`option card ${opt._id}`} href={opt.color[0].slug} replace={true}>
        <div className={`${styles.productContentOptionGridTile} , ${active && styles.productContentOptionGridTileActive}`}>
        <div className={styles.productContentOptionGridTileName}>
          {opt.title}
        </div>
        <div className={styles.productContentOptionGridTilePrice}>
          {priceFormatter(opt.color[0].price)}
        </div>
      </div>
      </a>
    )
  }

  const optionColor = (col, active) => {
    return (
      <a key={`optionColor ${col._id}`} href={col.slug}>
        <div
        className={active && styles.productContentOption_altColorsSelected}
        style={{ backgroundColor: col.hex }}
      >
      </div>
      </a>
    )
  }
  const openNotificationWithIcon = () => {
    notification["success"]({
      message: 'Product Added to Cart',
      
    });
  };

  const handleAddCart = (addOns,count,exchangeProduct) =>{
    addCart(product.selectedProduct._id,addOns,count,exchangeProduct,user).then(data=>{
      if(data.success){
          openNotificationWithIcon()
      }
    });
  }

  return (
    <div className={styles.head}>

      {
        popup && <PopupComponent child={popup} close={()=>{setPopup(false)}} />
      }

      <div className={styles.productImage}>
        <div className={styles.productImageGrid}>
          {
            product.product.images.map((img,i)=>{
              return <div key={`image grid ${i}`} onClick={()=>setSelectedImage(i)}>
              <img src={`${process.env.REACT_APP_API_ROOT_URI}${img.thumb}`} alt="" />
            </div>
            })
          }
          
        </div>
        <div className={styles.productImageMain}>
         {
           isFdi &&  <img
           src={FDIRBanner}
           alt=""
           className={styles.productImageMainBadge}
         />
         }
          <img
            src={`${process.env.REACT_APP_API_ROOT_URI}${product.product.images[selectedImage].full}`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.productContent}>
        <h1 className={styles.productContentTitle}>
          {`${product.product.name} (${product.selectedProduct.variance.title}) (${product.selectedProduct.name}) `}
        </h1>

        <div className={styles.productContentSKU}>
          <span>Model:</span> {product.product.model} <span>SKU:</span> {product.selectedProduct.sku}
        </div>

        <div className={styles.productContentSocial}>
          <div className={styles.productContentSocialRating}>
            <span> { avgR.avg > 0 ? avgR.avg : "NA" } </span> <FontAwesomeIcon icon={faStar} />{" "}
          </div>
          <div className={styles.productContentSocialShare}>
            <FontAwesomeIcon icon={faShare} /> Share{" "}
          </div>
          <div className={styles.productContentSocialWishlist}>
            <FontAwesomeIcon icon={faHeart} />{" "}
          </div>
        </div>

        {
          product.deal && (<div className={styles.productContentBefore}>
            <span className={styles.productContentBeforePrice}>
              {priceFormatter(product.selectedProduct.price)}
            </span>
            <span className={styles.productContentBeforeSave}>
              Save {priceFormatter(product.selectedProduct.price - product.deal.discountPrice)}
            </span>
          </div>)
        }

        <div className={styles.productContentPrice}>
          <span>{priceFormatter(product.deal ? product.deal.discountPrice : product.selectedProduct.price)}</span>
          <div className={styles.productContentPriceEMI}>
            EMI starts at ₹1,318. No Cost EMI available
              <span>EMI options</span>
          </div>
        </div>

        {
          product.deal && (<div className={styles.productContentBadge}>
            <div>
              <img src={DealOfTheWeekBanner} alt="" />
            </div>
            <span className={styles.productContentBadgeInfo}>
              * Avail extra discount during checkout
            </span>
          </div>
          )
        }
        {
          isBest && !product.deal && (
            <div className={styles.productContentBadge}>
            <div>
              <img src={BestBanner} alt="" />
            </div>
            
          </div>
          )
        }

        {
          product.product.options.length > 1 && (
            <div className={styles.productContentOption}>
          <div className={styles.productContentOptionTitle}>
            Selected : <span>{product.selectedProduct.variance.title}</span>
          </div>
          <div className={styles.productContentOptionGrid}>
            {
              product.product.options.map(opt => {
                return optionCard(opt, opt._id === product.selectedProduct.variance._id);
              })
            }
          </div>
        </div>
          )
        }

        {
          product.selectedProduct.variance.color.length > 1 && (
            <div className={styles.productContentOption_alt}>
          <div className={styles.productContentOptionTitle}>
            Color : <span>{product.selectedProduct.name}</span>
          </div>
          <div className={styles.productContentOption_altColors}>
            {
              product.selectedProduct.variance.color.map(col => {
                return optionColor(col, product.selectedProduct._id === col._id)
              })
            }
          </div>
        </div>
          )
        }

        <div className={styles.productContentHighlight}>
          <ul>
           {
             product.product.highlights.slice(0,4).map((hig,ind)=>(
              <li key={`highlights ${ind}`} >{hig}</li>
            ))
           }
          </ul>
          <div onClick={()=>{setPopup((
          <div style={{backgroundColor : "#fff" , width : "50vw" , height : "50vh" , padding:"2rem" , overflowY : 'scroll' }}>
            <div className={styles.productContentHighlight}>
          <ul>
           {
             product.product.highlights.map((hig,ind)=>(
              <li key={`highlights ${ind}`} >{hig}</li>
            ))
           }
          </ul>
       
        </div>
             </div>
        ))}} className={styles.productContentHighlightMore}>
             Show More
            </div>
        </div>
      </div> 
          
          <RightBuyComponent product={product} addCart={handleAddCart} exchange={exchange} />
      
    </div>
  )
}


export default connect(null,{addCart})(SingleProductHead);