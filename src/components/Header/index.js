import React from "react";
import { Layout, Icon } from "antd";
import { useSelector } from "react-redux";

import "./styles.css";

function Header() {
  const user = useSelector(state => state.auth.user);

  let name = "";
  if (user) {
    name = `${user.firstname} ${user.lastname}`;
  }

  return (
    <Layout.Header className="header-container">
      <span>{name}</span>
      <Icon type="more" className="header-more-icon" />
    </Layout.Header>
  );
}

export default Header;
