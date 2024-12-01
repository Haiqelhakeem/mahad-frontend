import { Content } from "antd/es/layout/layout";
import { Layout, Table, Input } from "antd";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { mentorAPI } from "../api/setoran.api";

const MentorPage = () => {
  const [mentor, setMentor] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredMentor, setFilteredMentor] = useState([]);

  const fetchMentor = () => {
    axios
      .get(mentorAPI)
      .then((res) => {
        setMentor(res.data.data);
        setFilteredMentor(res.data.data); // Initialize filtered data
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMentor();
  }, []);

  // Handle search
  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = mentor.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMentor(filteredData);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text, record, index) => index + 1,
      width: "10%",
    },
    {
      title: "Nama Mentor",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name), // Add sorting for name
      render: (text, record) => <p>{record.name}</p>,
    },
  ];

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Content style={{ margin: "0 32px" }} className="p-5">
          <h1 className="text-3xl font-bold mb-5">Mentor</h1>
          <Input
            placeholder="Search Mentor"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ marginBottom: 16, width: 300 }}
          />
          <Table
            dataSource={filteredMentor}
            columns={columns}
            bordered
            rowKey="_id"
          />
        </Content>
      </Layout>
    </>
  );
};

export default MentorPage;
