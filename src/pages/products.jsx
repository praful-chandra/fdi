import React from "react";

import styles from "../sass/modules/productPage/productpage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faTh,
  faThList,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import ListProductCard from "../components/listProductCard";
import Brands from "../components/brands";
import Footer from "../components/footer";

export default function Products() {
  const renderCheckBox = (name, num) => {
    const data = [];

    for (let i = 0; i < num; i++) {
      data.push(
        <div className={styles.dropFiltersCheck}>
          <input type="checkbox" name={`${name}${i}`} id={`${name}${i}`} />
          <label htmlFor={`${name}${i}`}>{`${name} ${i + 1}`}</label>
        </div>
      );
    }

    return data;
  };

  const FilterBar = () => (
    <div className={styles.filterBar}>
      <div className={styles.filterBarIcons}>
        <FontAwesomeIcon icon={faTh} />
        <FontAwesomeIcon icon={faThList} />
      </div>
      <div className={styles.filterBarDropDown}>
        <select name="sorting">
          <option value="default">Default Sorting</option>
          <option value="Popular">Popular</option>
          <option value="Price [low - high]">Price [low - high]</option>
          <option value="Price [high - low]">Price [high - low]</option>
        </select>
      </div>

      <div className={styles.filterBarPageSelector}>
        <span>1 of 2 </span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );

  const renderProductCards = () => {
    const data = [];

    for (let index = 0; index < 10; index++) {
      data.push(
        <ListProductCard
          image={`https://source.unsplash.com/collection/${
            index * Math.floor(Math.random() * 100)
          }`
          
        }
        fdiR={ index % 2 === 0}
        />
      );
    }

    return data;
  };

  return (
 <div>
      <div className={`center , ${styles.productPage}`}>
      <div className={styles.filters}>
        <div className={styles.head}>
          <h5>
            Filters <span>Clear</span>{" "}
          </h5>
          <div></div>
        </div>

        <div className={styles.priceFilter}>
          <div className={styles.head}>
            <h6>
              Price{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </h6>
          </div>

          <div className={styles.priceBody}>
            <input type="number" placeholder="Min." />
            <div></div>
            <input type="number" placeholder="Max." />
          </div>
        </div>

        <div className={styles.dropFilters}>
          <div className={styles.head}>
            <h6>Brands</h6>
          </div>
          {renderCheckBox("Brand", 4)}
        </div>

        <div className={styles.dropFilters}>
          <div className={styles.head}>
            <h6>Features</h6>
          </div>
          {renderCheckBox("Features", 7)}
        </div>

        <div className={styles.dropFilters}>
          <div className={styles.head}>
            <h6>Model</h6>
          </div>
          {renderCheckBox("model", 3)}
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.head}>
          <h5>Fridge </h5>
          <div></div>
        </div>

        {FilterBar()}

        <div className={styles.productsWrapper}>{renderProductCards()}</div>
        {FilterBar()}

      </div>
    </div>
        <Brands />
        <Footer />
 </div>
  );
}
