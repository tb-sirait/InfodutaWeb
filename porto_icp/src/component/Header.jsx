import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <img
          alt="ICP logo with red and blue letters and text Infoduta Computindo Perkasa"
          className="w-10 h-10 object-contain"
          height="40"
          src="https://storage.googleapis.com/a1aa/image/9f7f4bd1-d3d6-40ad-0555-faf42a8263d4.jpg"
          width="40"
        />
        <div className="text-xs leading-tight">
          <p className="text-blue-900 font-normal">Infoduta</p>
          <p className="text-gray-600 font-light">Computindo Perkasa</p>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-6 text-blue-900 font-semibold text-sm">
          <li>
            <a className="hover:underline" href="#">
              Beranda
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Produk
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Layanan
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Tentang
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Karir
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;