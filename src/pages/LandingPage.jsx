import { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg";
import axios from "axios";
import { mentorAPI, santriAPI } from "../api/setoran.api";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [mentor, setMentor] = useState();
  const [santri, setSantri] = useState([]);
  const [filteredSantri, setFilteredSantri] = useState([]);

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
    const { value } = e.target;
    const filtered = santri.filter((santri) => santri.mentorName === value);
    setFilteredSantri(filtered);
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="hero min-h-screen flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="bg-white rounded-xl m-3 p-3 -mt-32 md:p-5 text-center">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-gray-800">
              Website Manajemen Setoran Santri
            </h1>
            <h3 className="text-md md:text-xl font-semibold text-gray-600">
              Ma&apos;had Tahfidz UIN Sunan Gunung Djati Bandung
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-3 mt-5">
                {/* pilih mentor */}
                <div className="flex justify-start gap-2 md:flex md:gap-2">
                  <label htmlFor="mentor" className="text-black">
                    Pilih Mentor
                  </label>
                  <select
                    className="w-1/2 rounded-md p-1"
                    name="mentor"
                    id="mentor"
                    onChange={handleFilter}
                  >
                    <option value="" className="text-gray-500 bg-white">
                      Pilih Mentor
                    </option>
                    {mentor?.map((mentor) => (
                      <option value={mentor.id} key={mentor.id}>
                        {mentor.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* pilih santri */}
                <div className="flex gap-5 md:gap-2">
                  <label htmlFor="santri" className="text-black">
                    Pilih Santri
                  </label>
                  <select
                    name="santri"
                    id="santri"
                    className="w-1/2 rounded-md p-1"
                  >
                    <option value="">Pilih Santri</option>
                    {filteredSantri?.map((santri) => (
                      <option value={santri.id} key={santri.id}>
                        {santri.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* pilih halaman */}
                <div className="flex gap-8 justify-start">
                  <label htmlFor="halaman" className="text-black">
                    Halaman
                  </label>
                  <input type="text" name="" id="" className="rounded-md p-1 w-1/2" />
                </div>
                {/* pilih juz */}
                <div className="flex gap-[72px] md:gap-[60px] justify-start">
                  <label htmlFor="juz" className="text-black">
                    Juz
                  </label>
                  <select name="juz" id="juz" className="w-1/2 p-1 rounded-md">
                    <option value="">Juz</option>
                    {[...Array(30)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn w-3/4 m-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
