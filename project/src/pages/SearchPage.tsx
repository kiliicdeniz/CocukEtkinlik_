import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, Search } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import SearchBar from '../components/SearchBar';
import { activities } from '../data/activities';
import { Activity } from '../types';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<Activity[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q') || '';
    setSearchQuery(query);
    
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      const results = activities.filter(activity => {
        return (
          activity.title.toLowerCase().includes(lowercaseQuery) ||
          activity.description.toLowerCase().includes(lowercaseQuery) ||
          activity.materials.some(material => material.toLowerCase().includes(lowercaseQuery)) ||
          activity.instructions.some(instruction => instruction.toLowerCase().includes(lowercaseQuery))
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [location.search]);

  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-[#1A759F] hover:text-[#F77F00] mb-6 transition-colors">
          <ChevronLeft size={20} className="mr-1" />
          Ana Sayfaya Dön
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Etkinlik Ara</h1>
          <SearchBar />
        </div>

        {searchQuery ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                "{searchQuery}" için arama sonuçları
              </h2>
              <p className="text-gray-600">{searchResults.length} sonuç bulundu</p>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map(activity => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-600">
                  "{searchQuery}" için sonuç bulunamadı. Lütfen farklı bir arama terimi deneyin.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <Search size={48} className="mx-auto text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Aramaya Başlayın
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Yukarıdaki arama çubuğunu kullanarak etkinlik, malzeme veya konu arayabilirsiniz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;