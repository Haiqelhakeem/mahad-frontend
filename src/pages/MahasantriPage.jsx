import { useEffect, useState } from "react";
import axios from "axios";
import { Content } from "antd/es/layout/layout";
import { Layout, Table } from "antd";
import Sidebar from "../components/Sidebar";

import { santriAPI } from "../api/setoran.api";

const MahasantriPage = () => {
  const [santri, setSantri] = useState([]);
  const [santriName, setSantriName] = useState();

  const fetchSantri = () => {
    axios
      .get(santriAPI)
      .then((res) => setSantri(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSantri();
  }, []);

  console.log(santri);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text, record, index) => index + 1,
      width: "5%",
    },
    {
      title: "Nama Mahasantri",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <p>{record.name}</p>,
      width: "30%",
    },
    {
      title: "Mentor",
      dataIndex: "mentor",
      key: "mentor",
      render: (text, record) => <p>{record.mentorName}</p>,
      width: "30%",
    },
    {
      title: "Jurusan",
      dataIndex: "jurusan",
      key: "jurusan",
    },
  ];

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Content style={{ margin: "0 16px" }} className="p-5">
          <h1 className="text-2xl font-bold mb-5">Mahasantri</h1>
          <Table dataSource={santri} columns={columns} bordered></Table>
        </Content>
      </Layout>
    </>
  );
};

export default MahasantriPage;
