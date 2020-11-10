import React from "react";

import Head from "../components/pageComponent/singleProductHead";

import styles from "../sass/modules/singleProduct/singleProduct.module.scss";

import BestSeller from "../components/bestSeller";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt as halfSolidStar,
} from "@fortawesome/free-solid-svg-icons";

import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export default function SingleProduct() {
  return (
    <div>
      <div className="center">
        <Head />

        <div className={styles.description}>
          <div className={styles.head}>
            <div>
              <h5>Description</h5>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            officiis commodi eaque maiores atque, mollitia quas libero,
            excepturi possimus esse odit, quis nobis nulla accusamus est aut
            perspiciatis eveniet adipisci.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem officiis commodi eaque maiores atque, mollitia
            quas libero, excepturi possimus esse odit, quis nobis nulla
            accusamus est aut perspiciatis eveniet adipisci.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rem officiis commodi eaque
            maiores atque, mollitia quas libero, excepturi possimus esse odit,
            quis nobis nulla accusamus est aut perspiciatis eveniet
            adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem officiis possimus esse odit, quis nobis nulla accusamus est aut
            perspiciatis eveniet adipisci.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem officiis commodi eaque maiores atque, mollitia
            quas libero, excepturi possimus esse odit, quis nobis nulla
            accusamus est aut perspiciatis eveniet adipisci.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rem officiis commodi eaque
            maiores atque, mollitia quas libero, excepturi possimus esse odit,
            quis nobis nulla accusamus est aut perspiciatis eveniet
            adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem officiis commodi eaque maiores atque, mollitia quas libero,
            excepturi possimus esse odit, quis nobis nulla accusamus est aut
            perspiciatis eveniet adipisci.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem officiis commodi eaque maiores atque, mollitia
            quas libero, excepturi possimus esse odit, quis nobis nulla
            accusamus est aut perspiciatis eveniet adipisci.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rem officiis commodi eaque
            maiores atque, mollitia quas libero, excepturi possimus esse odit,
            quis nobis nulla accusamus est aut perspiciatis eveniet
            adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem officiis commodi eaque maiores atque, mollitia quas libero,
            excepturi possimus esse odit, quis nobis nulla accusamus est aut
            perspiciatis eveniet adipisci.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem officiis commodi eaque maiores atque, mollitia
            quas libero, excepturi possimus esse odit, quis nobis nulla
            accusamus est aut perspiciatis eveniet adipisci.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rem officiis commodi eaque
            maiores atque, mollitia quas libero, excepturi possimus esse odit,
            quis nobis nulla accusamus est aut perspiciatis eveniet adipisci.
          </p>
        </div>
      </div>

      <div className={styles.related}>
        <BestSeller title="Related items" />
      </div>
      <div className="center">
        <div className={styles.reviews}>
          <div className={styles.head}>
            <div>
              <h5>Reviews</h5>
            </div>
          </div>
          <div className={styles.reviewsHead}>
            <div className={styles.reviewsHeadLeft}>
              <div className={styles.reviewsHeadNumber}>
                <div>
                  <span>4.5</span>
                  <div>
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={solidStar} />
                    <FontAwesomeIcon icon={halfSolidStar} />
                  </div>
                </div>
                <span>Based on 10 reviews</span>
              </div>
              <div className={styles.reviewsHeadGraph}>
                <div className={styles.reviewsHeadGraphItem}>
                  <div className={styles.reviewsHeadGraphItemStar}>
                    <span>5</span> <FontAwesomeIcon icon={solidStar} />
                  </div>
                  <div className={styles.reviewsHeadGraphItemBar}>
                    <div
                      className={styles.reviewsHeadGraphItemBarProgress}
                      style={{ width: "50%" }}
                    ></div>
                  </div>

                  <div className={styles.reviewsHeadGraphItemNumber}>54</div>
                </div>

                <div className={styles.reviewsHeadGraphItem}>
                  <div className={styles.reviewsHeadGraphItemStar}>
                    <span>4</span> <FontAwesomeIcon icon={solidStar} />
                  </div>
                  <div className={styles.reviewsHeadGraphItemBar}>
                    <div
                      className={styles.reviewsHeadGraphItemBarProgress}
                      style={{ width: "40%" }}
                    ></div>
                  </div>

                  <div className={styles.reviewsHeadGraphItemNumber}>12</div>
                </div>

                <div className={styles.reviewsHeadGraphItem}>
                  <div className={styles.reviewsHeadGraphItemStar}>
                    <span>3</span> <FontAwesomeIcon icon={solidStar} />
                  </div>
                  <div className={styles.reviewsHeadGraphItemBar}>
                    <div
                      className={styles.reviewsHeadGraphItemBarProgress}
                      style={{ width: "70%" }}
                    ></div>
                  </div>

                  <div className={styles.reviewsHeadGraphItemNumber}>5</div>
                </div>

                <div className={styles.reviewsHeadGraphItem}>
                  <div className={styles.reviewsHeadGraphItemStar}>
                    <span>2</span> <FontAwesomeIcon icon={solidStar} />
                  </div>
                  <div className={styles.reviewsHeadGraphItemBar}>
                    <div
                      className={styles.reviewsHeadGraphItemBarProgress}
                      style={{ width: "20%" }}
                    ></div>
                  </div>

                  <div className={styles.reviewsHeadGraphItemNumber}>25</div>
                </div>

                <div className={styles.reviewsHeadGraphItem}>
                  <div className={styles.reviewsHeadGraphItemStar}>
                    <span>1</span> <FontAwesomeIcon icon={solidStar} />
                  </div>
                  <div className={styles.reviewsHeadGraphItemBar}>
                    <div
                      className={styles.reviewsHeadGraphItemBarProgress}
                      style={{ width: "10%" }}
                    ></div>
                  </div>

                  <div className={styles.reviewsHeadGraphItemNumber}>15</div>
                </div>
              </div>
            </div>
            <div className={styles.reviewsHeadRight}>
              <div className={styles.reviewsNew}>
                <div className={styles.reviewsNewTitle}>Add a Review</div>
                <ul className={styles.reviewsNewStars}>
                  <li>
                    <FontAwesomeIcon icon={emptyStar} />
                  </li>
                  <FontAwesomeIcon icon={emptyStar} />
                  <li></li>
                  <FontAwesomeIcon icon={emptyStar} />
                  <li></li>
                  <FontAwesomeIcon icon={emptyStar} />
                  <li></li>
                  <FontAwesomeIcon icon={emptyStar} />
                  <li></li>
                </ul>
                <textarea className={styles.reviewsNewText}></textarea>
                <button>Submit Review</button>
              </div>
            </div>
          </div>

          <div className={styles.reviewsBody}>
            <div className={styles.reviewsBodyItem}>
              <hr />
              <div className={styles.reviewsBodyItemStars}>
                <div>
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={halfSolidStar} />
                </div>
                <span>Patrik</span>
              </div>
              <div className={styles.reviewsBodyItemDate}>14 july 2020</div>
              <p>
                Just bought this for a replacement for old tv and looks great,
                however we noticed this Can anyone help please 1) Added a couple
                of new downloaded apps they when we go back to home screen they
                show up on home screen, but new icons are grayed out and just
                appears as file folder type logo, no names of picture icons
                Thanks for any help.
              </p>
            </div>

            <div className={styles.reviewsBodyItem}>
              <hr />
              <div className={styles.reviewsBodyItemStars}>
                <div>
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={halfSolidStar} />
                </div>
                <span>Patrik</span>
              </div>
              <div className={styles.reviewsBodyItemDate}>14 july 2020</div>
              <p>
                Just bought this for a replacement for old tv and looks great,
                however we noticed this Can anyone help please 1) Added a couple
                of new downloaded apps they when we go back to home screen they
                show up on home screen, but new icons are grayed out and just
                appears as file folder type logo, no names of picture icons
                Thanks for any help.
              </p>
            </div>

            <div className={styles.reviewsBodyItem}>
              <hr />
              <div className={styles.reviewsBodyItemStars}>
                <div>
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={halfSolidStar} />
                </div>
                <span>Patrik</span>
              </div>
              <div className={styles.reviewsBodyItemDate}>14 july 2020</div>
              <p>
                Just bought this for a replacement for old tv and looks great,
                however we noticed this Can anyone help please 1) Added a couple
                of new downloaded apps they when we go back to home screen they
                show up on home screen, but new icons are grayed out and just
                appears as file folder type logo, no names of picture icons
                Thanks for any help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
