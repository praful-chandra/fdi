import React from "react";
import { useSelector, connect } from "react-redux";
import {Link} from "react-router-dom";
import styles from "../sass/modules/wishListpage.module.scss";
import { DeleteFilled } from "@ant-design/icons";
import {toggleWishlist} from "../redux/actions/wishListActions";

function wishListPage({toggleWishlist}) {
  const { wishList } = useSelector((state) => state);
  return (
    <div className={`center ${styles.wrapper}`}>
      <div className={styles.head}>
        <h5>Your Wishlist</h5>
        <div></div>
      </div>

      <table className="table table-striped" style={{ fontSize: "2rem" }}>
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((w) => {
            return (
              <tr key={`Wishlist product ${w.product}`} className={styles.item}>
                <th scope="row">
                  <img
                    src={`${process.env.REACT_APP_API_ROOT_URI}${w.productImage}`}
                  />
                </th>
                <td>
                  <Link to={`/product/${w.slug}`} >
                  {w.name}
                  </Link>
                </td>
                <td>{w.price}</td>
                <td className={styles.delete} onClick={()=>toggleWishlist(w.product)}>
                  <DeleteFilled />{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default connect(null,{toggleWishlist})(wishListPage);
