import React from "react";
import { Layout } from "antd"; //An Open source React UI library for some components Ant Design

import Sider from "../Sider";
import Header from "../Header";

import "./styles.css";

const { Content } = Layout;

function BaseLayout({ children }) {
  return (
    <Layout className="most-outer-layout">
      <Sider />

      <Layout>
        <Header />
        <Content className="layout-content">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
