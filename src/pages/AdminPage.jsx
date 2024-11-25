import { Content } from "antd/es/layout/layout";
import { Layout, Card } from "antd";
import Sidebar from "../components/Sidebar";

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
        <Content style={{ margin: "0 16px"}}>
          <h1 className="text-2xl font-bold p-5">Dashboard</h1>
          <div className="flex gap-10">
            <Card title="Jumlah Mentor" style={{ width: "300px" }} className="shadow-xl">
              <p>{mentor?.length}</p>
            </Card>
            <Card title="Jumlah Mahasantri" style={{ width: "300px" }} className="shadow-xl">
              <p>{santri?.length}</p>
            </Card>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default AdminPage;
