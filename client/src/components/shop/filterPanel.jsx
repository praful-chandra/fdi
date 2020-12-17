import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../sass/modules/productPage/productpage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function FilterPanel({ filters, setFilters }) {
  const [brandsList, setBrandsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const {
    brand: { brands },
    category: { categories },
  } = useSelector((state) => state);

  useEffect(() => {
    setBrandsList(brands);
  }, [brands]);
  useEffect(() => {
    setCategoryList(categories);
  }, [categories]);

  const handleFilterChange = (e, name) => {
        let index = filters[name].indexOf(e.target.name);

        if(index === -1){
          setFilters((of) => {
            return { ...of, [name]: [...of[name], e.target.name] };
          });
        }else{
          setFilters((of) => {
            return { ...of, [name]: of[name].filter(f => f !== e.target.name) };
          });
        }
         
    
  };


  const renderCheckBox = (name, items) => {
    const data = [];
    items.map((itm) => {
      data.push(
        <div className={styles.dropFiltersCheck}>
          <input
            type="checkbox"
            name={itm._id}
            id={`${name}${itm._id}`}
            onChange={(e) => handleFilterChange(e, name)}
            checked={filters[name].find((f) => f == itm._id) ? true : false}
          />
          <label htmlFor={`${name}${itm._id}`}>{itm.name}</label>
        </div>
      );
    });

    return data;
  };

  return (
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
          <h6>Categories</h6>
        </div>
        {renderCheckBox("category", categoryList)}
      </div>

      <div className={styles.dropFilters}>
        <div className={styles.head}>
          <h6>Brands</h6>
        </div>
        {renderCheckBox("brand", brandsList)}
      </div>

      <div className={styles.dropFilters}>
        <div className={styles.head}>
          <h6>Features</h6>
        </div>
        {/* {renderCheckBox("Features", 7)} */}
      </div>

      <div className={styles.dropFilters}>
        <div className={styles.head}>
          <h6>Model</h6>
        </div>
        {/* {renderCheckBox("model", 3)} */}
      </div>
    </div>
  );
}

export default FilterPanel;
