import React from "react";
import { Flex, Layout, Menu } from "antd";
import {
    HomeOutlined,
    UserOutlined,
    SettingOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const siderStyle = {
  textAlign: "center",
  lineHeight: "250px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};
const Sidebar = () => (
  <Layout style={{ minHeight: "100vh" }}>
    {/* Sidebar */}
    <Sider collapsible>
      <div
        className="logo"
        style={{
          height: "32px",
          margin: "16px",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Mahasantri
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  </Layout>
);
export default Sidebar;
