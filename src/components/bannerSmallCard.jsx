import React from 'react';
import styles from "../sass/modules/bannerSmall.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
export default function bannerSmallCard() {
    return (
        <>
            <div className={styles.card}>
          <div>
            <img
              src="https://i.imgur.com/Zw1vt4e.png"
              alt="tv"
            />
          </div>

          <div className={styles.cardTexts}>
              <h3>
                  Catch the hottest <br/> <span>Deals</span> in TV
              </h3>

              <div>
                  SHop Now
                  <span>
                        <FontAwesomeIcon icon={faAngleRight} />
                  </span>
              </div>
          </div>
        </div>
        </>
    )
}
