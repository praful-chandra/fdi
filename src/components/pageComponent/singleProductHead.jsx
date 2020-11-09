import React from 'react'
import priceFormatter from "../../helpers/priceformatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShare,
  faHeart,
  faAngleDown,
  faCartPlus,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../sass/modules/singleProduct/singleProductHead.module.scss"

export default function SingleProductHead() {
    return (
        <div className={styles.head}>
        <div className={styles.productImage}>
          <div className={styles.productImageGrid}>
            <div>
              <img src="https://source.unsplash.com/random/1" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/2" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/3" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/4" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/5" alt="" />
            </div>
            <div>
              <img src="https://source.unsplash.com/random/6" alt="" />
            </div>
          </div>
          <div className={styles.productImageMain}>
            <img
              src={require("../../assets/fdi_recommended.png")}
              alt=""
              className={styles.productImageMainBadge}
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71h%2BUNWW-xL._SL1500_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.productContent}>
          <h1 className={styles.productContentTitle}>
            Sony Bravia X7002G 108cm (43 inch) Ultra HD (4K) LED Smart TV
          </h1>

          <div className={styles.productContentSKU}>
            <span>Model:</span> 43UN7000PUB <span>SKU:</span> 6417302
          </div>

          <div className={styles.productContentSocial}>
            <div className={styles.productContentSocialRating}>
              {" "}
              <span>4.4</span> <FontAwesomeIcon icon={faStar} />{" "}
            </div>
            <div className={styles.productContentSocialShare}>
              {" "}
              <FontAwesomeIcon icon={faShare} /> Share{" "}
            </div>
            <div className={styles.productContentSocialWishlist}>
              {" "}
              <FontAwesomeIcon icon={faHeart} />{" "}
            </div>
          </div>

          <div className={styles.productContentBefore}>
            <span className={styles.productContentBeforePrice}>
              {priceFormatter(13000)}
            </span>
            <span className={styles.productContentBeforeSave}>
              Save {priceFormatter(100)}
            </span>
          </div>

          <div className={styles.productContentPrice}>
            <span>{priceFormatter(12900)}</span>
            <div className={styles.productContentPriceEMI}>
              EMI starts at ₹1,318. No Cost EMI available
              <span>EMI options</span>
            </div>
          </div>

          <div className={styles.productContentBadge}>
            <div>
              <img src={require("../../assets/deal_of_the_week.svg")} alt="" />
              <span>Extra {priceFormatter(2000)} off</span>
            </div>
            <span className={styles.productContentBadgeInfo}>
              * Avail extra discount during checkout
            </span>
          </div>

          <div className={styles.productContentOption}>
            <div className={styles.productContentOptionTitle}>
              Series : <span>FabiaSeries</span>
            </div>
            <div className={styles.productContentOptionGrid}>
              <div className={styles.productContentOptionGridTile}>
                <div className={styles.productContentOptionGridTileName}>
                  Quantum Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(15990)}
                </div>
              </div>
              <div
                className={`${styles.productContentOptionGridTile} , ${styles.productContentOptionGridTileActive}`}
              >
                <div className={styles.productContentOptionGridTileName}>
                  Fabia Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(12990)}
                </div>
              </div>
              <div className={styles.productContentOptionGridTile}>
                <div className={styles.productContentOptionGridTileName}>
                  Edge Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(15990)}
                </div>
              </div>
              <div className={styles.productContentOptionGridTile}>
                <div className={styles.productContentOptionGridTileName}>
                  Super Series
                </div>
                <div className={styles.productContentOptionGridTilePrice}>
                  {priceFormatter(15990)}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.productContentOption_alt}>
            <div className={styles.productContentOptionTitle}>
              Color : <span>Black</span>
            </div>
            <div className={styles.productContentOption_altColors}>
              <div
                className={styles.productContentOption_altColorsSelected}
                style={{ backgroundColor: "#000" }}
              ></div>
              <div style={{ backgroundColor: "#fff" }}></div>
              <div style={{ backgroundColor: "#B76E79" }}></div>
              <div style={{ backgroundColor: "#08F8E8" }}></div>
            </div>
          </div>

          <div className={styles.productContentHighlight}>
            <ul>
              <li>Resolution: Full HD (1920x1080) | Refresh Rate: 60 hertz</li>
              <li>
                Connectivity: 2 HDMI ports to connect set top box, Blu Ray
                players, gaming console 2 USB ports to connect hard drives and
                other USB devices
              </li>
              <li>Sound : 20 Watts Output | Dolby Audio</li>
              <li>
                Smart TV Features: Android TV 9.0 | OnePlus Connect | Google
                Assistant | Play Store | Chromecast | Shared Album Supported
                Apps : Netflix, YouTube, Prime video | Content Calendar |
                OxygenPlay
              </li>
            </ul>
            <div className={styles.productContentHighlightMore}>
              <FontAwesomeIcon icon={faAngleDown} /> Show More
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
            <span>Quantity : </span> <input type="number" value={1}/>
            </div>
            <div className={styles.buyProductPin}>
            <span>Delivery : </span> <input type="number" value={560036}/>
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
