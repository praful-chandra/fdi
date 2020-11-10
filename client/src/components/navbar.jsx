import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTruck,
  faUserAlt,
  faSearch,
  faHeart,
  faShoppingCart,
  faBars,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../sass/modules/navbar.module.scss";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [mobileSubCat, setMobileSubCat] = useState(-1);
  const categoryList = [
    {
      name : "categoryHead",
      sub : [
        "SubCategory","SubCategory","SubCategory","SubCategory","SubCategory","SubCategory"
      ]
    },
    {
      name : "categoryHead",
      sub : [
        "SubCategory","SubCategory","SubCategory","SubCategory","SubCategory","SubCategory"
      ]
    },
    {
      name : "categoryHead",
      sub : [
        "SubCategory","SubCategory","SubCategory","SubCategory","SubCategory","SubCategory"
      ]
    },
    {
      name : "categoryHead",
      sub : [
        "SubCategory","SubCategory","SubCategory","SubCategory","SubCategory","SubCategory"
      ]
    },
    {
      name : "categoryHead",
      sub : [
        "SubCategory","SubCategory","SubCategory","SubCategory","SubCategory","SubCategory"
      ]
    },
    {
      name : "categoryHead",
      sub : [
        "SubCategory","SubCategory","SubCategory","SubCategory","SubCategory","SubCategory"
      ]
    }
  ]

  const viewMobileSubCat = (i)=>{
    if(i === mobileSubCat){
      setMobileSubCat(-1);
    }else setMobileSubCat(i);
  }
  const renderDesktop = () => (
    <nav className={styles.desktop}>
      <div className={styles.topBar}>
        <ul className="center">
          <li>We Make Buying Easy For You</li>
          <li>
            <ul className={styles.topBarLinks}>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Store Locator</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faTruck} />
                <span>Orders</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserAlt} />
                <span>account</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={styles.middleBar}>
        <div className="center">
          <img
            className={styles.middleBarLogo}
            src={require("../logo.svg")}
            alt="fairdeal International"
          />
          <div className={styles.search}>
            <form action="#">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search products"
              />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>

          <div className={styles.middleBarLinks}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHeart} />
              </li>
              <li>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Rs. 33500.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.categoryBar}>
        <div className="center">
          <ul className={styles.categoryBarLinks}>
          {
            categoryList.map((cl,i)=>{
              return <li key={`desktopCategory ${i}`}>
                <span>{cl.name}</span>
                <ul>
                  {
                    cl.sub.map((sub,i)=>{
                      return <li key={`desktop category sub ${i}`}>{sub}</li>
                    })
                  }
                </ul>
              </li>
            })
          }
           
          </ul>
        </div>
      </div>
    </nav>
  );
  return (
    <>
      {renderDesktop()}

      <nav className={styles.mobile}>
        <div>
          <div onClick={() => setSideBar(true)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div>
            <img
              className={styles.mobileLogo}
              src={require("../logo-white.svg")}
              alt="fairdeal International"
            />
          </div>

          <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
        <form action="#">
          <input
            type="search"
            placeholder="search for items"
            name="search"
            id="search"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {sideBar && (
          <div className={styles.sidebar}>
            <div>
              <img
                className={styles.sidebarLogo}
                src={require("../logo-white.svg")}
                alt="fairdeal International"
              />
              <button onClick={() => setSideBar(false)}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Back</span>
              </button>
            </div>
            <div>
              <ul className={styles.sidebarLinks}>
                <li>
                  <button>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Store Locator</span>
                  </button>
                </li>
                <li>
                  <button>
                    <FontAwesomeIcon icon={faTruck} />
                    <span>Orders</span>
                  </button>
                </li>
                <li>
                  <button>
                    <FontAwesomeIcon icon={faUserAlt} />
                    <span>account</span>
                  </button>
                </li>
              </ul>
            </div>
            <ul className={` ${styles.sidebarCategory}`}>
              {
                categoryList.map((cl,i)=> <li key={i}>
                <button  onClick={()=>viewMobileSubCat(i)}><span>{cl.name}</span></button>
              {
                i === mobileSubCat && <ul>
                {
                  cl.sub.map((sb,ind)=> <li key={`subcat ${ind}`} >{sb}</li>)
                }
              </ul>
              }
                 </li>)
              }
          </ul>
          </div>
        )}
      </nav>
      <div className={styles.mobilePadding}></div>
    </>
  );
}
