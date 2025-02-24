import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import logo from "@/assets/Logogris.png"; // Asegúrate de que la ruta del logo sea correcta

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1b1e28] to-[#12141b] text-white py-8">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">

        {/* 🔹 Sección Izquierda: Redes Sociales */}
        <div className="md:w-1/3 mb-4 md:mb-0">
          <p className="text-base font-semibold text-gray-300 mb-2 flex items-center gap-2">
            <span className="opacity-80 text-lg"></span> Follow us on social media
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.instagram.com/heliosraceupv/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-110"
            >
              <SiInstagram className="h-6 w-6 text-white transition-all duration-300 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/heliosraceupv/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-110"
            >
              <SiLinkedin className="h-6 w-6 text-white transition-all duration-300 hover:text-white" />
            </a>
            <a
              href="https://www.youtube.com/@HeliosRaceUPV"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition-all duration-300 hover:scale-110"
            >
              <SiYoutube className="h-6 w-6 text-white transition-all duration-300 hover:text-white" />
            </a>
          </div>
        </div>

        {/* 🔸 Sección Central: Logo */}
        <div className="md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="Helios Race UPV Logo"
            className="w-24 h-auto object-contain"
          />
        </div>

        {/* 🔹 Sección Derecha: Ubicación y Contacto */}
        <div className="md:w-1/3 mt-4 md:mt-0 text-gray-300 text-base">
          <p className="flex items-center justify-center md:justify-end gap-2 mb-2">
            <span className="opacity-80 text-lg">📍</span>
            <a
              href="https://maps.app.goo.gl/zjmDprXPrq7MXDPaA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Camí de Vera, s/n, Edificio 4H, UPV
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-end gap-2">
            <span className="opacity-80 text-lg">✉️</span>
            <a
              href="mailto:heliosraceupv@gmail.com"
              className="hover:text-yellow-400 transition-all duration-300"
            >
              heliosraceupv@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* 🔹 Línea Divisoria */}
      <div className="w-full my-4">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {/* Derechos Reservados */}
      <div className="text-center text-gray-400 text-base mt-2">
        &copy; {new Date().getFullYear()} Helios Race UPV. All rights reserved.
      </div>
    </footer>
  );
}