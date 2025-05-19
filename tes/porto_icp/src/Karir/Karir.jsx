
import React, { useState, useEffect } from "react";

import Navbar from "../Navigation/Navbar";
import "./karir.css";
import Footer from "../Navigation/footer";

function Karir() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cv: null,
  });
  const [jobTitle, setJobTitle] = useState("");

  const openModal = (title) => {
    setJobTitle(title);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      cv: null,
    });
    setJobTitle("");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData((prev) => ({ ...prev, cv: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log("Form submitted:", formData);
    alert("Lamaran terkirim! Terima kasih.");
    closeModal();
  };

  return (
    <>
      <Navbar />
      <>
        <div className="background-image"></div>
        <div className="blue-overlay"></div>
        <main className="max-w-5xl mx-auto px-6 py-10 relative z-10">
          <h1 className="context text-2xl font-extrabold mb-3">Karir</h1>
          <p className="text1 text-base mb-20 max-w-3xl">
            PT. Infoduta Computindo Perkasa membuka lowongan untuk mengembangkan
            tim, demi membantu masa depan yang lebih baik.
          </p>
          <h2 className="what-is text-center font-bold text-lg mb-6">
            Lowongan Terbuka
          </h2>
          <section className="karir-section shadow-md max-w-4xl mx-auto">
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-black">
              <h3 className="title1 font-bold text-lg mb-4">Sales officer</h3>
              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>lorem ipsum dolor sit amet</li>
                <li>lorem ipsum dolor sit amet</li>
                <li>lorem ipsum dolor sit amet</li>
                <li>lorem ipsum dolor sit amet</li>
              </ol>
              <button
                onClick={() => openModal("Sales officer")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
            <div className="flex-1 p-8">
              <h3 className="title2 font-bold text-lg mb-4">Marketing</h3>
              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>lorem ipsum dolor sit amet</li>
                <li>lorem ipsum dolor sit amet</li>
                <li>lorem ipsum dolor sit amet</li>
                <li>lorem ipsum dolor sit amet</li>
              </ol>
              <button
                onClick={() => openModal("Marketing")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </section>
        </main>
      </>
      <Footer />

      {modalOpen && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
        >
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Form Lamaran {jobTitle && `(${jobTitle})`}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">
                  Nomor Telpon
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="cv" className="block font-semibold mb-1">
                  CV (file)
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  onChange={handleChange}
                  required
                  className="w-full"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="submit-btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Karir;
