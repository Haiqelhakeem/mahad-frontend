import { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg";
import axios from "axios";
import { mentorAPI, santriAPI } from "../api/setoran.api";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mentor, setMentor] = useState()
  const [santri, setSantri] = useState([])
  const [filteredSantri, setFilteredSantri] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const [santriName, setSantriName] = useState()
  const [halaman, setHalaman] = useState()
  const [juz, setJuz] = useState()


  const fetchSantri = () => {
    axios
      .get(santriAPI)
      .then((res) => setSantri(res.data.data))
      .catch((err) => console.log(err));
  };

  const fetchMentor = () => {
    axios
      .get(mentorAPI)
      .then((res) => setMentor(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    try {
      setTimeout(() => {
        fetchSantri();
        fetchMentor();
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleFilter = (e) => {
    const { value } = e.target
    const filtered = santri.filter(santri => santri.mentorName === value)
    console.log(value);
    setFilteredSantri(filtered)
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleModal()
  }

  const submitData = (e) => {
    e.preventDefault()
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="hero min-h-screen flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="bg-white rounded-xl m-3 p-3 md:p-5 text-center">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-gray-800">
              Website Manajemen Setoran Santri
            </h1>
            <h3 className="text-md md:text-xl font-semibold text-gray-600">
              Ma&apos;had Tahfidz UIN Sunan Gunung Djati Bandung
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 mt-5"
            >
              <div className="flex gap-2">
                <label htmlFor="mentor" className="text-black text-left">Pilih Mentor</label>
                <select name="mentor" id="mentor" onChange={handleFilter} className="input-box text-black">
                  <option value="">Pilih Mentor</option>
                  {
                    mentor?.map(mentor => (
                      <option value={mentor.id} key={mentor.id}>{mentor.name}</option>
                    ))
                  }
                </select>
              </div>

              {/* pilih santri */}
              <div className="flex gap-5 md:gap-2">
                <label htmlFor="santri" className="text-black text-left">
                  Pilih Santri
                </label>
                <select
                  name="santri"
                  id="santri"
                  className="input-box text-black"
                  onChange={(e) => setSantriName(e.target.value)}
                >
                  <option value="">Pilih Santri</option>
                  {filteredSantri?.map((santri) => (
                    <option value={santri.id} key={santri.id}>
                      {santri.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* input halaman */}
              <div className="flex justify-center items-center gap-4">
                <label htmlFor="halaman" className="text-black mb-5 text-left">
                  Halaman
                </label>
                <input type="text" name="" id="" className="input-box text-black" onChange={(e) => setHalaman(e.target.value)} />
              </div>

              {/* pilih juz */}
              <div className="flex gap-[72px] md:gap-[60px] justify-start">
                <label htmlFor="juz" className="text-black text-left mt-3">
                  Juz
                </label>
                <select name="juz" id="juz" className="input-box text-black" onChange={(e) => setJuz(e.target.value)}>
                  <option value="">Juz</option>
                  {[...Array(30)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary">Submit</button>
            </form>
          </div>
          <Modal open={openModal} onClose={handleModal}>
            <div className="w-[340px] lg:container mx-auto px-2">
              <h1 className="text-center text-3xl font-semibold text-blue-400">Verifikasi Data</h1>
              <p className="mt-3 text-lg text-black text-left">
                Nama: {santriName} <br />
                Halaman: {halaman} <br />
                Juz: {juz}
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <button className="bg-red-600 text-white font-poppins rounded-md py-2.5 px-3" onClick={() => setOpenModal(false)}>Tidak, Kembali</button>
              <button className="bg-green-600 text-white font-poppins rounded-md py-2.5 px-3" onClick={submitData}>Ya, Lanjutkan</button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
