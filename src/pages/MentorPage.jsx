import { Content } from "antd/es/layout/layout";
import { Layout, Table } from "antd";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { mentorAPI } from "../api/setoran.api";

const MentorPage = () => {
  const [mentor, setMentor] = useState();

  const fetchMentor = () => {
    axios
      .get(mentorAPI)
      .then((res) => setMentor(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMentor();
  }, []);
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Nama Mentor",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <p>{record.name}</p>,
    },
  ];
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Content style={{ margin: "0 16px" }} className="p-5">
            <h1 className="text-2xl font-bold mb-5">Mentor</h1>
          <Table dataSource={mentor} columns={columns}/>
        </Content>
      </Layout>
    </>
  );
};

export default MentorPage;
