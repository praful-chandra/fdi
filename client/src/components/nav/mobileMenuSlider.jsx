import React from "react";
import { Drawer, Menu, Input, Form } from "antd";
import { CompassOutlined, FolderOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import  {Link,useHistory} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMapMarkerAlt,
  faShoppingBag,
  faUser,
  faTachometerAlt,
  faSignOutAlt,
  faSignInAlt

} from "@fortawesome/free-solid-svg-icons";
const { SubMenu } = Menu;
const { Search } = Input;
function mobileMenuSlider({ logOut,status, setClose }) {
  const history = useHistory();
  const {
    category: { categories },
    subCategory: { subCategories },
    user : {user}
  } = useSelector((state) => state);

  const handleSearch = (val) => {
    history.push(`/shop?search=${val}`)
    setClose();
  };

  return (
    <Drawer
      width="70%"
      title="Menu"
      placement="left"
      visible={status}
      onClose={setClose}
      style={{ fontSize: "3rem" }}
    >
      <Form action="/shop">
        <Search
          placeholder="input search text"
          enterButton
          size="large"
          onSearch={handleSearch}
        />
      </Form>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu title="Categories" icon={<FolderOutlined />}>
          {categories.map((cat) => (
            <Menu.ItemGroup key={cat._id} title={cat.name}>
              {subCategories
                .filter((subCat) => subCat.parent._id === cat._id)
                .map((subCat) => (
                  <Menu.Item key={subCat._id}>
                    <a href={`/subcategory/${subCat.slug}`}>{subCat.name}</a>
                  </Menu.Item>
                ))}
            </Menu.ItemGroup>
          ))}
        </SubMenu>

        <Menu.Item icon={<FontAwesomeIcon icon={faShoppingBag} />}>
            <Link to="/shop">
            Shop  
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FontAwesomeIcon icon={faMapMarkerAlt} />}>
            Store Locators
          </Menu.Item>

        {
           user ? (
             <>
              <Menu.Item icon={<FontAwesomeIcon icon={faTruck} />}>
            <a href="/user/dashboard">Orders</a>
          </Menu.Item>
          <Menu.Item icon={<FontAwesomeIcon icon={faTachometerAlt} />}>
            {
              <Link to="/user/dashboard">
                Dashboard
              </Link>
            }
          </Menu.Item>
          <Menu.Item onClick={logOut} icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
            Logout
          </Menu.Item>
             </>
          ) : (
             <Menu.Item icon={<FontAwesomeIcon icon={faSignInAlt} />}>
             <Link to="/login">
             Login</Link>
           </Menu.Item>
          )
         }
      </Menu>
    </Drawer>
  );
}

export default mobileMenuSlider;
