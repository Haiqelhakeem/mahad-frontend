import React from "react";
import { Flex, Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

import { Link } from "react-router-dom";

const Sidebar = () => (
  <Sider collapsible>
    <div className="flex items-center justify-center p-7">
      <img src="/mahadFullColor.svg" alt="Logo Ma'had" width={50} />
    </div>
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/admin">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        <Link to="/mahasantri">Mahasantri</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<BookOutlined />}>
        <Link to="/mentor">Mentor</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<LogoutOutlined style={{ color: "#dc2626" }} />}>
        <Link to="/">
          <p className="text-red-600">Logout</p>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
);
export default Sidebar;
