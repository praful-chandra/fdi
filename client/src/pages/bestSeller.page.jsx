import React, { useState, useEffect } from "react";
import styles from "../sass/modules/dealPage.module.scss";
import { Pagination } from "antd";
import { listBestSeller } from "../functions/bestSeller.function";
import { isMobile } from "react-device-detect";
import SmallProductCard from "../components/smallProductCard";
import ListProductCard from "../components/smallListProductCard.component";

function BestSellerPage() {
  const [bests, setBests] = useState({
    bests: [],
    totalCount: 0,
  });
  const [skip, setSkip] = useState(0);
  
  useEffect(() => {
    listBestSeller(10, skip).then((data) => {
      if (!data.error) {
        setBests(data);
      }
    });
  }, []);

  return (
    <div className={`center ${styles.wrapper}`}>
      <div className={styles.head}>
        <h5>BestSellers</h5>
        <div></div>
      </div>

      {!isMobile ? (
        <div className={styles.productGrid}>
          {bests.bests.map((item) => {
            return <SmallProductCard key={item._id} item={item} best={true} />;
          })}
        </div>
      ) : (
        <div className={styles.mobileProductGrid}>
            {
                bests.bests.map(item=>{
                    return <ListProductCard key={item._id} product={item} />
                })
            }
        </div>
      )}

      <div className={styles.pagenation}>
        <Pagination current={skip + 1} total={bests.totalCount} pageSize={10} onChange={val=>setSkip(val - 1)} />
      </div>
    </div>
  );
}

export default BestSellerPage;
