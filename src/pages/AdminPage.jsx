import { Content } from "antd/es/layout/layout";
import { Layout, Card } from "antd";
import Sidebar from "../components/Sidebar";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";

import { useEffect, useState } from "react";
import axios from "axios";

import { mentorAPI, santriAPI } from "../api/setoran.api";

const AdminPage = () => {
  const [mentor, setMentor] = useState();
  const [santri, setSantri] = useState([]);

  const fetchMentor = () => {
    axios
      .get(mentorAPI)
      .then((res) => setMentor(res.data.data))
      .catch((err) => console.log(err));
  };

  const fetchSantri = () => {
    axios
      .get(santriAPI)
      .then((res) => setSantri(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMentor();
    fetchSantri();
  }, []);
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Content style={{ margin: "0 32px" }}>
          <h1 className="text-3xl font-bold p-5">Dashboard</h1>
          <div className="flex gap-10">
            <Card
              title={
                <span>
                  <TeamOutlined style={{ marginRight: 8 }} /> Jumlah Mentor
                </span>
              }
              style={{ width: "300px" }}
              className="shadow-xl"
            >
              <p className="text-2xl font-semibold">{mentor?.length}</p>
            </Card>
            <Card
              title={
                <span>
                  <UserOutlined style={{ marginRight: 8 }} /> Jumlah Mahasantri
                </span>
              }
              style={{ width: "300px" }}
              className="shadow-xl"
            >
              <p className="text-2xl font-semibold">{santri?.length}</p>
            </Card>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default AdminPage;
