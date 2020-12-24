import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../sass/modules/productPage/productpage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Tag } from 'antd';
const { CheckableTag } = Tag;
// import {useToasts} from "react-toast-notifications";

function FilterPanel({ filters, setFilters, resetSkip }) {
  // const {addToast} = useToasts();
  const [brandsList, setBrandsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [tagList,setTagList] = useState([]);
  const [filterPrice, setFilterPrice] = useState({
    minPrice: null,
    maxPrice: null,
  });


  const handlePriceChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setFilterPrice((ofp) => ({ ...ofp, [name]: parseInt(value) }));
  };

  const handlePriceFilter = () => {
    setFilters(of=>({...of , filterPrice}));
  };

  const {
    brand: { brands },
    category: { categories },
    tag : {tags}
  } = useSelector((state) => state);

  useEffect(() => {
    setBrandsList(brands);
  }, [brands]);
  useEffect(() => {
    setCategoryList(categories);
  }, [categories]);
  useEffect(()=>{
    setTagList(tags)
  },[tags])

  const handleFilterChange = (e, name) => {
    resetSkip();
    let index = filters[name].indexOf(e.target.name);

    if (index === -1) {
      setFilters((of) => {
        return { ...of, [name]: [...of[name], e.target.name] };
      });
    } else {
      setFilters((of) => {
        return { ...of, [name]: of[name].filter((f) => f !== e.target.name) };
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

  const renderTags = () =>{
    const data = [];

    tags.map(t=>{
      data.push(
        <CheckableTag  checked={filters.tag.indexOf(t._id) > -1} onChange={()=>{handleFilterChange({target: {name : t._id}},"tag")}} >
          {t.name}
        </CheckableTag>
      )
    })

    return data;
  }



  const handleClearFilter = () => {
    setFilterPrice({
      minPrice : 0,
      maxPrice : 0
    })
    setFilters({
      category: [],
      brand: [],
      tag : [],
    });
   
  };

  return (
    <div className={styles.filters}>
      <div className={styles.head}>
        <h5>
          Filters <span onClick={handleClearFilter}>Clear</span>{" "}
        </h5>
        <div></div>
      </div>

      <div className={styles.priceFilter}>
        <div className={styles.head}>
          <h6>
            Price{" "}
            <span onClick={handlePriceFilter}>
              {" "}
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </h6>
        </div>

        <div className={styles.priceBody}>
          <input
            type="number"
            placeholder="Min."
            name="minPrice"
            value={filterPrice.minPrice}
            onChange={handlePriceChange}
          />
          <div></div>
          <input
            type="number"
            placeholder="Max."
            name="maxPrice"
            value={filterPrice.maxPrice}
            onChange={handlePriceChange}
          />
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
          <h6>Tags</h6>
        </div>
        {
          renderTags()
        }
      </div>
    </div>
  );
}

export default FilterPanel;
