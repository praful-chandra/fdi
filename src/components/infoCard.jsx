import React from "react";
import styles from "../sass/modules/infoCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faThumbsUp,
  faSyncAlt,
  faMoneyCheckAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
export default function infoCard() {
  return (
    <div className="center">
      <div className={styles.card}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faShippingFast} />
            <p>
              <span>Express</span>
              Delivery
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>
              <span>Positive</span>
              Feedback
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faSyncAlt} />
            <p>
              <span>All days</span>
              Support
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyCheckAlt} />
            <p>
              <span>Secure</span>
              Payments
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faTag} />
            <p>
              <span>Best</span>
              Offers
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
