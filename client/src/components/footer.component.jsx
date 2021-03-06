import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faTwitter,faYoutube,faInstagram} from "@fortawesome/free-brands-svg-icons";
import styles from "../sass/modules/footer.module.scss";
import {useSelector} from "react-redux";
import Logo from "../logo.svg";
import {addNewsLetter} from "../functions/newsletter.function";
import {useToasts} from "react-toast-notifications";

export default function footer() {
    const {category : {categories}} = useSelector(state => state);
    const {addToast} = useToasts();
    const handleNewsletterSubmit = e =>{
        e.preventDefault();
        addNewsLetter(e.target[0].value);
        addToast(`${e.target[0].value} Successfully registered`,{autoDismiss : true , appearance : "success"})
        e.target[0].value = ""
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.newsletter}>
        <div className="center">
          <p>subscribe to our newsletter</p>
          <div className={styles.search}>
            <form action="#" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter E-mail address"
              />
              <button type="submit">JOIN</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.meat}>
        <div className="center">
          <div>
            <img src={Logo} alt="fairdeal International" />
            <div className={styles.call}>
              <span>
                <FontAwesomeIcon icon={faHeadset} />
              </span>
              <div>
                <span>Got questions? call us 24/7!</span>
                <p>
                  <button>
                    <a href="tel:+80815684532">80815684532</a>
                  </button>
                </p>
              </div>
              
            </div>
            <div className={styles.contactInfo}>
                  <h3>Contact Information</h3>
                  <br/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu magna rutrum, pretium ante a, interdum erat. Fusce a neque consequat, mattis quam quis, tempus libero.</p>
              </div>

                  <ul className={styles.socialMediaIcons}>
                      <li>
                        <FontAwesomeIcon icon={faFacebook} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faInstagram} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faTwitter} />
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faYoutube} />
                      </li>
                  
                  </ul>
          </div>
          <div>
          
            <ul>
              <li>Categories</li>
              {
                  categories.map(c=>{
                      return <li>{c.name}</li>
                  })
              }

            </ul>

            <ul>
              <li>LEGAL</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy policy </li>

            </ul>

            {/* <ul>
              <li>_</li>
              <li>Sub category 1</li>
              <li>Sub category 2</li>
              <li>Sub category 3</li>
              <li>Sub category 4</li>
            </ul> */}
          </div>
        </div>
      </div>
    
      <div className={styles.creditBar}>
      &#169; 	 2021   <span>Fairdeal International</span>  
      </div>
    
    </div>
  );
}