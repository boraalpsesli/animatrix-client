import React, { useCallback } from "react";
import { Layout, Menu, Icon } from "antd";//An Open source React UI library for some components Ant Design

import { useHistory } from "react-router-dom";

import "./styles.css";

function Sider() {
  const history = useHistory();

  const handleMenuItemClick = useCallback(
    ({ key }) => {
      history.push(key);
    },
    [history]
  );

  return (
    <Layout.Sider width={280} className="sider-container">
      <p className="logo sider-logo">Animatrix</p>

      <Menu className="sider-menu" onClick={handleMenuItemClick}>
        <Menu.Item key="/" className="sider-menu-item">
          <Icon type="star" theme="filled" className="sider-icon" />
          <span>Anime List</span>
        </Menu.Item>
        <Menu.Item key="/favorites" className="sider-menu-item">
          <Icon type="tags" theme="filled" className="sider-icon" />
          <span>Favorites</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default Sider;
