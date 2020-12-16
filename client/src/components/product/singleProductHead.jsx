import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import priceFormatter from "../../functions/priceFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShare,
  faHeart,
  faAngleDown,
  faCartPlus,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";

import DealOfTheWeekBanner from "../../assets/deal_of_the_week.svg";
import FDIRBanner from "../../assets/fdi_recommended.png";
import PopupComponent from "../../components/showPopup.component";

import styles from "../../sass/modules/singleProduct/singleProductHead.module.scss";

import {statusFdiR} from "../../functions/fdir.function";

export default function SingleProductHead({ product }) {

  
  const [popup,setPopup] = useState(false);
  const [isFdi,setIsFdi] = useState(false);
  const [selectedImage , setSelectedImage] = useState(0);
  
  useEffect(() => {
    statusFdiR(product.selectedProduct._id).then(res=>setIsFdi(res));  
  },)
  const optionCard = (opt, active) => {
    console.log(opt);
    return (
      <Link to={opt.color[0].slug} target="_blank">
        <div className={`${styles.productContentOptionGridTile} , ${active && styles.productContentOptionGridTileActive}`}>
        <div className={styles.productContentOptionGridTileName}>
          {opt.title}
        </div>
        <div className={styles.productContentOptionGridTilePrice}>
          {priceFormatter(opt.color[0].price)}
        </div>
      </div>
      </Link>
    )
  }

  const optionColor = (col, active) => {
    return (
      <Link to={col.slug} target="_blank">
        <div
        className={active && styles.productContentOption_altColorsSelected}
        style={{ backgroundColor: col.hex }}
      >
      </div>
      </Link>
    )
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
              return <div onClick={()=>setSelectedImage(i)}>
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
            <span>4.4</span> <FontAwesomeIcon icon={faStar} />{" "}
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
              {/* <span>Extra {priceFormatter(2000)} off</span> */}
            </div>
            {/* <span className={styles.productContentBadgeInfo}>
                * Avail extra discount during checkout
              </span> */}
          </div>)
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
             product.product.highlights.slice(0,4).map(hig=>(
              <li>{hig}</li>
            ))
           }
          </ul>
          <div onClick={()=>{setPopup((
          <div style={{backgroundColor : "#fff" , width : "50vw" , height : "50vh" , padding:"2rem" , overflowY : 'scroll' }}>
            <div className={styles.productContentHighlight}>
          <ul>
           {
             product.product.highlights.map(hig=>(
              <li>{hig}</li>
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

      <div className={styles.buyProduct}>
        <div className={styles.buyProductWrapper}>
          <div
            className={`${styles.buyProductInactive} , ${styles.buyProductHead}`}
          >
            <input type="radio" checked={false} />
            <div>
              <span>With Exchange</span>
              <span>Up to {priceFormatter(5500)} off</span>
            </div>
          </div>
          <div className={styles.buyProductHead}>
            <input type="radio" checked={true} />
            <div>
              <span>Without Exchange</span>
              <div className={styles.buyProductHeadPrice}>
                <span>{priceFormatter(12900)}</span>
                <span>{priceFormatter(1300)}</span>
              </div>
            </div>
          </div>
          <div className={styles.buyProductAddOn}>
            <div className={styles.buyProductAddOnTitle}>Add On's</div>
            <div className={styles.buyProductAddOnItem}>
              <input type="checkbox" checked={true} />
              <div>
                <div>Tv Installation <span>Details</span></div>
                <div> {priceFormatter(0)} </div>
              </div>
            </div>

            <div className={styles.buyProductAddOnItem}>
              <input type="checkbox" checked={false} />
              <div>
                <div>other Add-on <span>Details</span></div>
                <div> {priceFormatter(3540)} </div>
              </div>
            </div>
          </div>

          <div className={styles.buyProductQuantity}>
            <span>Quantity : </span> <input type="number" value={1} />
          </div>
          <div className={styles.buyProductPin}>
            <span>Delivery : </span> <input type="number" value={560036} />
          </div>

          <div className={styles.buyProductAction}>
            <button className={`${styles.buyProductButton} ${styles.buyProductButtonCart}`} >
              <FontAwesomeIcon icon={faCartPlus} />
              <span>Add to Cart</span>
            </button>
            <button className={`${styles.buyProductButton} ${styles.buyProductButtonBag}`} >
              <FontAwesomeIcon icon={faShoppingBag} />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
