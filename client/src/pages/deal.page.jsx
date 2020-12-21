import React, { useState, useEffect } from "react";
import styles from "../sass/modules/dealPage.module.scss";
import { Pagination } from "antd";
import { listDeals } from "../functions/deal.functions";
import { isMobile } from "react-device-detect";
import SmallProductCard from "../components/smallProductCard";
import ListProductCard from "../components/smallListProductCard.component";

function dealPage() {
  const [deals, setDeals] = useState({
    deals: [],
    totalCount: 0,
  });
  const [skip, setSkip] = useState(0);
  
  useEffect(() => {
    listDeals(10, skip).then((data) => {
      if (!data.error) {
        setDeals(data);
      }
    });
  }, []);

  return (
    <div className={`center ${styles.wrapper}`}>
      <div className={styles.head}>
        <h5>Deal of the week </h5>
        <div></div>
      </div>

      {!isMobile ? (
        <div className={styles.productGrid}>
          {deals.deals.map((item) => {
            return <SmallProductCard key={item._id} item={item} deal={true} />;
          })}
        </div>
      ) : (
        <div className={styles.mobileProductGrid}>
            {
                deals.deals.map(item=>{
                    return <ListProductCard key={item._id} product={item} deal={true} />
                })
            }
        </div>
      )}

      <div className={styles.pagenation}>
        <Pagination current={skip + 1} total={deals.totalCount} pageSize={10} onChange={val=>setSkip(val - 1)} />
      </div>
    </div>
  );
}

export default dealPage;
