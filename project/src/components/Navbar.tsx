import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#FCBF49]">Çocuk</span>
              <span className="text-2xl font-bold text-[#1A759F]">Etkinlik</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50 transition-colors">
              Ana Sayfa
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50 transition-colors inline-flex items-center">
                Kategoriler
                <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1">
                <div className="p-2 space-y-1">
                  <Link 
                    to="/category/sensory" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 rounded-md group/item transition-colors"
                  >
                    <div>
                      <div className="font-medium group-hover/item:text-[#F77F00]">Duyusal Oyunlar</div>
                      <div className="text-xs text-gray-500">Duyuları geliştiren aktiviteler</div>
                    </div>
                  </Link>
                  <Link 
                    to="/category/crafts" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 rounded-md group/item transition-colors"
                  >
                    <div>
                      <div className="font-medium group-hover/item:text-[#F77F00]">El İşi</div>
                      <div className="text-xs text-gray-500">Yaratıcı el işi projeleri</div>
                    </div>
                  </Link>
                  <Link 
                    to="/category/paper-crafts" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 rounded-md group/item transition-colors"
                  >
                    <div>
                      <div className="font-medium group-hover/item:text-[#F77F00]">Kağıt Etkinlikleri</div>
                      <div className="text-xs text-gray-500">Kağıtla yapılan projeler</div>
                    </div>
                  </Link>
                  <Link 
                    to="/category/nature" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 rounded-md group/item transition-colors"
                  >
                    <div>
                      <div className="font-medium group-hover/item:text-[#F77F00]">Doğa Etkinlikleri</div>
                      <div className="text-xs text-gray-500">Doğa ile etkileşimli aktiviteler</div>
                    </div>
                  </Link>
                  <Link 
                    to="/category/educational" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 rounded-md group/item transition-colors"
                  >
                    <div>
                      <div className="font-medium group-hover/item:text-[#F77F00]">Eğitici Oyunlar</div>
                      <div className="text-xs text-gray-500">Öğrenmeyi destekleyen oyunlar</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50 transition-colors">
              Hakkımızda
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link to="/search" className="p-2 rounded-full text-gray-500 hover:text-[#F77F00] hover:bg-gray-50 transition-colors">
              <Search size={20} />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#F77F00] hover:bg-gray-50 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/category/sensory" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Duyusal Oyunlar
            </Link>
            <Link 
              to="/category/crafts" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              El İşi
            </Link>
            <Link 
              to="/category/paper-crafts" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Kağıt Etkinlikleri
            </Link>
            <Link 
              to="/category/nature" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Doğa Etkinlikleri
            </Link>
            <Link 
              to="/category/educational" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Eğitici Oyunlar
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/search" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#F77F00] hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Ara
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;