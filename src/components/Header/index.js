import React from "react";
import { Layout, Icon } from "antd"; //An Open source React UI library for some components Ant Design

import { useSelector } from "react-redux"; //this useSelector function allows us to get Redux store state

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
