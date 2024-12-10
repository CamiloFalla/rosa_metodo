

export default function Footer() {
  return (
    <>
      <footer className="bg-white text-gray-800 py-8 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          
          {/* Columna 1: Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Address: </p>
            <p className="mb-2">Email: <a href="mailto:camiloafalla@gmail.com" className="text-blue-700 hover:underline">camiloafalla@gmail.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+573114935020" className="text-blue-700 hover:underline">+57-3114935020</a></p>
            <p className="mb-2">Location: Bogota D.C., Colombia</p>
            <p className="mb-2">Website: <a href="https://www.buildbusiness.click" className="text-blue-700 hover:underline">www.buildbusiness.click</a></p>
          </div>

          {/* Columna 2: Redes sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <a href="https://wa.me/573114935020" className="flex items-center text-blue-700 hover:underline mb-2 transition duration-300">
              <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-6 w-6 mr-2" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Columna 3: Recomendación de habilidades */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
            <ul className="space-y-2">
              <li><a href="/solutions/cybersecurity" className="text-gray-800 hover:text-blue-700 transition-colors duration-300">Registrarse</a></li>
              <li><a href="/solutions/database-protection" className="text-gray-800 hover:text-blue-700 transition-colors duration-300">Login</a></li>
              <li><a href="/solutions/website-protection" className="text-gray-800 hover:text-blue-700 transition-colors duration-300">Sobre nosotros</a></li>
              
            </ul>
          </div>
        </div>
      </footer>

      {/* Sección de derechos de autor */}
      <div className="bg-orange-500 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Evaluación Rosa. All rights reserved. | 
          <a href="/privacy-policy" className="text-white hover:underline mx-2">Privacy Policy</a> | 
          <a href="/cookies-policy" className="text-white hover:underline mx-2">Cookies Policy</a>
        </p>
      </div>
    </>
  );
}