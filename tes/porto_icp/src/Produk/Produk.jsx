import React, { useState } from "react"

import Navbar from "../Navigation/Navbar"
import "./produk.css"
import Footer from "../Navigation/footer"

export default function Produk() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [brandClickCount, setBrandClickCount] = useState(0)
  const [isNoProductModalOpen, setIsNoProductModalOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "OptiPlex 3000 Tower",
      brand: "Dell",
      images: [
        "../src/assets/produk/Dell_optiplex_3000_Tower.png",
        "../src/assets/produk/Dell_optiplex_3000_Tower_side.png"
      ],
      specs: {
        cpu: "Intel Core i5",
        ram: "8GB",
        storage: "256GB SSD",
        gpu: "Integrated Graphics",
        os: "Windows 10",
      },
    },
    {
      id: 2,
      name: "Optiplex 7010 PLUS SFF",
      brand: "Dell",
      images: [
        "../src/assets/produk/Dell_optiplex_7010_plus_sff.png",
        "../src/assets/produk/Dell_optiplex_7010_plus_sff_back.png"
      ],
      specs: {
        cpu: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        gpu: "Integrated Graphics",
        os: "Windows 10",
      },
    },
    {
      id: 3,
      name: "Precision Workstation 5490",
      brand: "Dell",
      images: [
        "../src/assets/produk/Dell_Mobile_Precision_Workstation_5490_Ultra7.png"
      ],
      specs: {
        cpu: "Intel Xeon",
        ram: "32GB",
        storage: "1TB SSD",
        gpu: "NVIDIA Quadro",
        os: "Windows 10 Pro",
      },
    },
    {
      id: 4,
      name: "Latitude 3440 Laptop",
      brand: "Dell",
      images: [
        "../src/assets/produk/Dell_latitude_3440_laptop.png"
      ],
      specs: {
        cpu: "Intel Core i5",
        ram: "8GB",
        storage: "256GB SSD",
        gpu: "Integrated Graphics",
        os: "Windows 10",
      },
    },
    {
      id: 5,
      name: "Notebook V14-IIL",
      brand: "Lenovo",
      images: [
        "../src/assets/produk/Notebook_V14-IIL.png"
      ],
      specs: {
        cpu: "AMD Ryzen 5",
        ram: "8GB",
        storage: "512GB SSD",
        gpu: "Integrated Graphics",
        os: "Windows 10",
      },
    },
    {
      id: 6,
      name: "OptiPlex 3000 Tower",
      brand: "Dell",
      images: [
        "../src/assets/produk/Dell_optiplex_3000_tower.png"
      ],
      specs: {
        cpu: "Intel Core i5",
        ram: "8GB",
        storage: "256GB SSD",
        gpu: "Integrated Graphics",
        os: "Windows 10",
      },
    },
  ]

  const brands = [
    { name: "Dell", logo: "../src/assets/Dell_logo.png" },
    { name: "Lenovo", logo: "../src/assets/lenovo_logo.png" },
    { name: "Cisco", logo: "../src/assets/Cisco_logo.png" },
    { name: "Samsung", logo: "../src/assets/samsung_logo.png" },
    { name: "Asus", logo: "../src/assets/Asus_logo.png" },
    { name: "HP", logo: "../src/assets/hp_logo.png" },
    { name: "InFocus", logo: "../src/assets/Infocus_logo.png" },
    { name: "Apple", logo: "../src/assets/Apple_logo.png" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0);
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(false)
  }

  const closeNoProductModal = () => {
    setIsNoProductModalOpen(false)
  }

  return (
    <>
      <Navbar />
      {/* Main Content */}
      <main className="container mx-auto px-6 py-10">
        <div className="page-content max-w-7xl mx-auto">
          <div className="content px-4">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Produk</h1>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              Kami menjual dan menyewakan perangkat IT untuk kebutuhan bisnis mu
              dengan menawarkan beberapa merk terbaik:
            </p>

            {/* Brand Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="brand-logo flex items-center justify-center w-24 h-16 p-2 bg-white rounded-lg shadow-md"
                  onClick={() => {
                    if (selectedBrand === brand.name) {
                      setBrandClickCount(brandClickCount + 1)
                      if (brandClickCount + 1 === 2) {
                        setSelectedBrand(null)
                        setBrandClickCount(0)
                      }
                    } else {
                      setSelectedBrand(brand.name)
                      setBrandClickCount(1)
                    }
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {selectedBrand ? `Produk ${selectedBrand}` : "Produk Populer"}
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(selectedBrand
                ? products.filter((product) => product.brand === selectedBrand)
                : products
              ).length > 0 ? (
                (selectedBrand
                  ? products.filter((product) => product.brand === selectedBrand)
                  : products
                ).map((product) => (
                  <div
                    key={product.id}
                    className="product-card bg-blue-900 rounded-3xl p-8 flex flex-row text-white items-start shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                    style={{ cursor: "pointer" }}
                    onClick={() => openModal(product)}
                  >
                    <div className="flex flex-col items-center mr-8 separator-line">
                  <img
                    src={product.images && product.images.length > 0 ? product.images[0] : ""}
                    alt={product.name}
                    className="w-32 h-auto object-contain mb-4 rounded-lg"
                  />
                      <h4 className="text-2xl font-semibold" style={{fontSize: "18px"}}>{product.name}</h4>
                      <h4 className="text-md font-medium text-gray-300"  style={{fontSize: "14px"}}>{product.brand}</h4>
                    </div>

                    <div className="flex-1">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                          <span>🧠</span> {product.specs.cpu}
                        </li>
                        <li className="flex items-center gap-3">
                          <span>🎮</span> {product.specs.gpu}
                        </li>
                        <li className="flex items-center gap-3">
                          <span>💾</span> {product.specs.ram}
                        </li>
                        <li className="flex items-center gap-3">
                          <span>🗄️</span> {product.specs.storage}
                        </li>
                        <li className="flex items-center gap-3">
                          <span>🖥️</span> {product.specs.os}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>

          </div>
        </div>
      </main>

      {/* Modal */}
              {isModalOpen && selectedProduct && (
                <div
                  className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                  onClick={closeModal}
                >
                  <div
                    className="modal-content bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full text-gray-900 dark:text-white shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-4">
                <button
                  className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
                    );
                  }}
                >
                  Prev
                </button>
                <img
                  src={selectedProduct.images && selectedProduct.images.length > 0 ? selectedProduct.images[currentImageIndex] : ""}
                  alt={selectedProduct.name}
                  className="w-48 h-auto object-contain rounded-lg shadow-md"
                />
                <button
                  className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
                    );
                  }}
                >
                  Next
                </button>
              </div>
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              <p className="font-semibold">Brand: {selectedProduct.brand}</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-3">
                  <span>🧠</span> {selectedProduct.specs.cpu}
                </li>
                <li className="flex items-center gap-3">
                  <span>🎮</span> {selectedProduct.specs.gpu}
                </li>
                <li className="flex items-center gap-3">
                  <span>💾</span> {selectedProduct.specs.ram}
                </li>
                <li className="flex items-center gap-3">
                  <span>🗄️</span> {selectedProduct.specs.storage}
                </li>
                <li className="flex items-center gap-3">
                  <span>🖥️</span> {selectedProduct.specs.os}
                </li>
              </ul>
              <div className="flex space-x-6">
                <a
                  href={`https://wa.me/628975808407?text=${encodeURIComponent(`Saya berminat pada unit produk ${selectedProduct.name} untuk perusahaan saya. Bisa diskusi untuk produknya?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 inline-block text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  Hubungi kami
                </a>
                <button
                  className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* No Product Modal */}
      {isNoProductModalOpen && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeNoProductModal}
        >
          <div
            className="modal-content bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full text-gray-900 dark:text-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center space-y-6">
              <h3 className="text-2xl font-bold">Produk Tidak Ditemukan</h3>
              <p className="text-center">Maaf, produk dari merk ini tidak tersedia.</p>
              <button
                className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                onClick={closeNoProductModal}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
