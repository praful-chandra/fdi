import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTruck,
  faUserAlt,
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../sass/modules/navbar.module.scss";

export default function navbar() {
  return (
    <nav>
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
                type="text"
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
            <li>
              <span>Category</span>
              <ul>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
              </ul>
            </li>
            <li>
              <span>Category</span>
              <ul>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
              </ul>
            </li>
            <li>
              <span>Category</span>
              <ul>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
              </ul>
            </li>
            <li>
              <span>Category</span>
              <ul>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
              </ul>
            </li>
            <li>
              <span>Category</span>
              <ul>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
              </ul>
            </li>
            <li>
              <span>Category</span>
              <ul>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
              </ul>
            </li>
            <li>
              <span>Category</span>
              <ul>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
                <li>SubCaT</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
