import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/footer';
import './homepage.css';

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="relative">
        <img
          alt="Modern office building with blue sky and green leaves on the right side"
          className="w-full h-auto object-cover"
          src="src/assets/kantor_icp.png"
        />
        
        <div
          className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white max-w-md text-lg leading-relaxed sm:max-w-sm sm:right-5 sm:top-auto sm:bottom-5 sm:left-5 sm:transform-none text-img"
          style={{ textShadow: '0 0 10px rgba(0,0,0,0.6)', zIndex: 1 }}
        >
          <p>
            Solusi kebutuhan Software
            <br />
            dan Hardware Pilihan Anda
          </p>
          <div style={{display: "flex", flexDirection: "row", alignItems: "justify", gap: "10px"}}>
            <button
              aria-label="Eksplor button"
              className="mt-4 bg-blue-900 font-semibold text-white rounded-md px-4 py-2 flex items-center space-x-2 hover:bg-blue-800 explore-button"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              <span>Eksplor</span>
            </button>
            <img className='arrow' src='../src/assets/arrow.png'></img>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 px-6 text-center max-w-6xl mx-auto">
        <h1 className="font-extrabold text-2xl mb-1">Eksplor Infoduta</h1>
        <p className="font-semibold text-sm mb-10">Lebih dekat dengan perusahaan kami:</p>
          <div className="flex flex-sc-mbl sm:flex-row justify-center gap-8">
          <div
            className="bg-blue-900 rounded-lg flex flex-col items-center justify-center p-8 w-full max-w-xs h-auto text-white font-bold text-xl cursor-pointer larger-button"
            onClick={() => navigate('/produk')}
          >
            <img
              alt=""
              className="mb-6"
              height={80}
              src="../src/assets/Workstation.png"
              width={80}
            />
            Produk
          </div>
          <div
            className="bg-blue-900 rounded-lg flex flex-col items-center justify-center p-8 w-full max-w-xs h-auto text-white font-bold text-xl cursor-pointer larger-button"
            onClick={() => navigate('/layanan')}
          >
            <img
              alt="White line icon of two interlocking gears on blue background"
              className="mb-6"
              height={80}
              src="../src/assets/Services.png"
              width={80}
            />
            Layanan
          </div>
          <div
            className="bg-blue-900 rounded-lg flex flex-col items-center justify-center p-8 w-full max-w-xs h-auto text-white font-bold text-xl cursor-pointer larger-button"
            onClick={() => navigate('/tentang')}
          >
            <img
              alt="White line icon of a speech bubble with letter i inside on blue background"
              className="mb-6"
              height={80}
              src="../src/assets/About.png"
              width={80}
            />
            Tentang
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Homepage;
