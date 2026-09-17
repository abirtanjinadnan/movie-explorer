import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieModal from "./components/MovieModal";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

export const API_BASE = "https://api.tvmaze.com";

function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedShow ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedShow]);

  return (
    <div className="min-h-screen bg-[#090a0d] text-[#f6f2ec]"> 
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/movies"
            element={<Movies onSelect={setSelectedShow} />}
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />

      {selectedShow && (
        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </div>
  );
}

export default App;