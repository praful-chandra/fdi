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
              src="https://lh3.googleusercontent.com/proxy/e6AXa3sdUgu-LvMcoAXDBxTJ6bd2bmCkCMCF2EtQUP_qG3Un2TF2NxcHp6gF78L_w7sRdepQYQ7sTNa7m57IBqET5TxHQkBK6HN7u2Ja8rVAGMUmYuKMoW4s3D7g0aZVd0aNFg"
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
