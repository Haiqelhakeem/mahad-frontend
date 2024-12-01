import { useEffect, useState } from "react";
import axios from "axios";
import { Content } from "antd/es/layout/layout";
import { Button, Layout, Table, Modal } from "antd";
import Sidebar from "../components/Sidebar";

import { santriAPI } from "../api/setoran.api"; // Replace with your API for fetching santri
import { setoranAPI } from "../api/setoran.api"; // Replace with your API for fetching setoran

const MahasantriPage = () => {
  const [santri, setSantri] = useState([]); // All santri data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedSantri, setSelectedSantri] = useState(null); // Selected santri data
  const [setoranData, setSetoranData] = useState([]); // Setoran data for selected santri

  // Fetch santri data
  const fetchSantri = () => {
    axios
      .get(santriAPI)
      .then((res) => setSantri(res.data.data))
      .catch((err) => console.log(err));
  };

  // Fetch setoran data for the selected santri
  const fetchSetoran = async (santriId) => {
    try {
      const response = await axios.get(setoranAPI);
      const filteredSetoran = response.data.data.filter(
        (setoran) => setoran.santriId === santriId
      );
      setSetoranData(filteredSetoran);
    } catch (error) {
      console.error("Error fetching setoran data:", error);
    }
  };

  useEffect(() => {
    fetchSantri();
  }, []);

  // Open modal and fetch data for selected santri
  const showModal = (record) => {
    setSelectedSantri(record); // Set selected santri
    fetchSetoran(record._id); // Fetch setoran data for the selected santri
    setIsModalOpen(true); // Show modal
  };

  const handleOk = () => {
    setIsModalOpen(false); // Close modal
    setSetoranData([]); // Clear setoran data
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal
    setSetoranData([]); // Clear setoran data
  };

  // Table columns
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text, record, index) => index + 1,
      width: "5%",
      align: "center",
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "10%",
      align: "center",
      render: (_, record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          Lihat Setoran
        </Button>
      ),
    },
  ];

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Content style={{ margin: "0 16px" }} className="p-5">
          <h1 className="text-2xl font-bold mb-5">Mahasantri</h1>
          <Table dataSource={santri} columns={columns} bordered rowKey="_id" />
        </Content>
      </Layout>

      {selectedSantri && (
        <Modal
          title={`Setoran - ${selectedSantri.name}`}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          mask={false}
        >
          {setoranData.length > 0 ? (
            <ul>
              {setoranData.map((setoran) => (
                <li key={setoran._id}>
                  <strong>Kategori:</strong> {setoran.kategori}, <strong>Juz:</strong>{" "}
                  {setoran.juz}, <strong>Halaman:</strong> {setoran.halaman},{" "}
                  <strong>Total:</strong> {setoran.total}
                </li>
              ))}
            </ul>
          ) : (
            <p>Belum ada setoran untuk santri ini.</p>
          )}
        </Modal>
      )}
    </>
  );
};

export default MahasantriPage;
