import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Etkinlik veya materyal ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 pl-10 rounded-full border border-gray-300 focus:border-[#1A759F] focus:ring-2 focus:ring-[#1A759F]/20 focus:outline-none transition-all"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <button
        type="submit"
        className="absolute right-1 top-1 bottom-1 px-4 bg-[#1A759F] text-white rounded-full hover:bg-[#0E6185] transition-colors"
      >
        Ara
      </button>
    </form>
  );
};

export default SearchBar;