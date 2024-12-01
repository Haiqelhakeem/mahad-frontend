import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";

const SetoranPage = () => {
    return (
        <>
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />
            <Content style={{ margin: "0 16px" }}>
                <h1 className="text-2xl font-bold p-5">Setoran</h1>
            </Content>
        </Layout>
        </>
    )
};

export default SetoranPage;