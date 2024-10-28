import { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg"
import axios from "axios";
import { mentorAPI, santriAPI } from "../api/setoran.api";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mentor, setMentor] = useState()
  const [santri, setSantri] = useState([])
  const [filteredSantri, setFilteredSantri] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const fetchSantri = () => {
    axios.get(santriAPI)
      .then(res => setSantri(res.data.data))
      .catch(err => console.log(err))
  }

  const fetchMentor = () => {
    axios.get(mentorAPI)
      .then(res => setMentor(res.data.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    try {
      setTimeout(() => {
        fetchSantri()
        fetchMentor()
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  const handleFilter = (e) => {
    const { value } = e.target
    const filtered = santri.filter(santri => santri.mentorName === value)
    setFilteredSantri(filtered)
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOpenModal(true)
  }

  return (
    <>
      <Navbar />
      {
        isLoading
          ? <Loader />
          :
          <div
            className="hero min-h-screen flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          >
            <div className="bg-white rounded-xl p-5 text-center">
              <h1 className="mb-5 text-5xl font-bold text-gray-800">
                Website Manajemen Setoran Santri
              </h1>
              <h3 className="text-xl font-semibold text-gray-600">
                Ma&apos;had Tahfidz UIN Sunan Gunung Djati Bandung
              </h3>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 mt-5"
              >
                <div className="flex gap-2">
                  <label htmlFor="mentor">Pilih Mentor</label>
                  <select name="mentor" id="mentor" onChange={handleFilter}>
                    <option value="">Pilih Mentor</option>
                    {
                      mentor?.map(mentor => (
                        <option value={mentor.id} key={mentor.id}>{mentor.name}</option>
                      ))
                    }
                  </select>
                </div>

                <div className="flex gap-3">
                  <label htmlFor="santri">Pilih Santri</label>
                  <select name="santri" id="santri">
                    <option value="">Pilih Santri</option>
                    {
                      filteredSantri?.map(santri => (
                        <option value={santri.id} key={santri.id}>{santri.name}</option>
                      ))
                    }
                  </select>
                </div>

                <button type="submit" className="btn">Submit</button>
              </form>
            </div>
            <Modal open={openModal} onClose={handleModal}>
              {/* <div className="w-[340px] lg:container mx-auto">
                <h1 className="text-center text-3xl font-semibold">Verifikasi Data</h1>
                <p className="text-center mt-2 text-lg">Anda akan diarahkan ke halaman raport milik santri <span className="font-semibold">{data.find((item) => item.nim == search)?.nama}</span>, Lanjutkan?</p>
              </div>
              <div className="flex justify-center gap-3 mt-3">
                <button className="bg-red-600 text-white font-poppins rounded-md py-2.5 px-3" onClick={() => setOpenModal(false)}>Tidak, Kembali</button>
                <button className="bg-green-600 text-white font-poppins rounded-md py-2.5 px-3" onClick={handleSearch}>Ya, Lanjutkan</button>
              </div> */}
            </Modal>
          </div>
      }
    </>
  );
}

