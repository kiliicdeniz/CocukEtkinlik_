import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A759F] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#FCBF49]">Çocuk</span>
              <span className="text-2xl font-bold text-white">Etkinlik</span>
            </div>
            <p className="text-gray-100 mt-2">
              Çocuklarınızla yapabileceğiniz eğlenceli ve eğitici etkinlikler için en iyi kaynak.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-100 hover:text-[#FCBF49] transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/category/sensory" className="text-gray-100 hover:text-[#FCBF49] transition-colors">Duyusal Oyunlar</Link>
              </li>
              <li>
                <Link to="/category/crafts" className="text-gray-100 hover:text-[#FCBF49] transition-colors">El İşi</Link>
              </li>
              <li>
                <Link to="/category/paper-crafts" className="text-gray-100 hover:text-[#FCBF49] transition-colors">Kağıt Etkinlikleri</Link>
              </li>
              <li>
                <Link to="/category/nature" className="text-gray-100 hover:text-[#FCBF49] transition-colors">Doğa Etkinlikleri</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-100 hover:text-[#FCBF49] transition-colors">Hakkımızda</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:iletisim@cocuketkinlik.com" className="text-gray-100 hover:text-[#FCBF49] transition-colors">
                  iletisim@cocuketkinlik.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+905556584005" className="text-gray-100 hover:text-[#FCBF49] transition-colors">
                  +90 (555) 658 40 05
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700">
          <p className="text-center text-gray-200">
            &copy; {new Date().getFullYear()} ÇocukEtkinlik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;