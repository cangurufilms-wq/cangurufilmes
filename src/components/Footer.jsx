import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/06bfbe75fd69105f2eece30e7e72898f.jpg"
              alt="Canguru Filmes"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-400">
              Audiovisual ágil, estética precisa.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold font-montserrat mb-4 block">
              Navegação
            </span>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="block text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                Portfólio
              </Link>
              <Link
                to="/servicos"
                className="block text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                Serviços
              </Link>
              <Link
                to="/sobre"
                className="block text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                Sobre
              </Link>
              <Link
                to="/reviews"
                className="block text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                Reviews
              </Link>
              <Link
                to="/contato"
                className="block text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold font-montserrat mb-4 block">
              Contato
            </span>
            <div className="space-y-3">
              <a
                href="mailto:cangurufilms@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>cangurufilms@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/canguru.films"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@canguru.films</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © Canguru Filmes — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;