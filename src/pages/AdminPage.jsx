import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";

const AdminPage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Content style={{ margin: "0 16px" }}>
            <h1>Admin</h1>
        </Content>
      </Layout>
    </>
  );
};

export default AdminPage;
