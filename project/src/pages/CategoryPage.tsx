import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import { activities } from '../data/activities';
import { categories } from '../data/categories';
import { Activity, Category } from '../types';

const CategoryPage: React.FC = () => {
  const { category: categoryId } = useParams<{ category: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [ageFilter, setAgeFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  useEffect(() => {
    if (categoryId) {
      if (categoryId === 'all') {
        setCategory({
          id: 'all',
          name: 'Tüm Etkinlikler',
          description: 'Tüm etkinlikleri keşfedin',
          imageUrl: ''
        });
        filterActivities('all', ageFilter, difficultyFilter);
      } else {
        const foundCategory = categories.find(c => c.id === categoryId) || null;
        setCategory(foundCategory);
        filterActivities(categoryId, ageFilter, difficultyFilter);
      }
    }
  }, [categoryId, ageFilter, difficultyFilter]);

  const filterActivities = (catId: string, age: string, difficulty: string) => {
    let filtered = activities;
    
    // Filter by category
    if (catId !== 'all') {
      filtered = filtered.filter(activity => activity.category === catId);
    }
    
    // Filter by age
    if (age !== 'all') {
      filtered = filtered.filter(activity => activity.ageRange.includes(age));
    }
    
    // Filter by difficulty
    if (difficulty !== 'all') {
      filtered = filtered.filter(activity => 
        difficulty === 'Easy' ? activity.difficulty === 'Easy' :
        difficulty === 'Medium' ? activity.difficulty === 'Medium' :
        difficulty === 'Hard' ? activity.difficulty === 'Hard' :
        true
      );
    }
    
    setFilteredActivities(filtered);
  };

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kategori bulunamadı</h2>
          <Link to="/" className="text-[#1A759F] hover:text-[#F77F00] transition-colors">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-[#1A759F] hover:text-[#F77F00] mb-6 transition-colors">
          <ChevronLeft size={20} className="mr-1" />
          Ana Sayfaya Dön
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filtrele</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ageFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Yaş Aralığı
              </label>
              <select
                id="ageFilter"
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#1A759F] focus:border-[#1A759F]"
              >
                <option value="all">Tümü</option>
                <option value="1-3">1-3 yaş</option>
                <option value="3-5">3-5 yaş</option>
                <option value="6-8">6-8 yaş</option>
                <option value="9-12">9-12 yaş</option>
              </select>
            </div>
            <div>
              <label htmlFor="difficultyFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Zorluk Seviyesi
              </label>
              <select
                id="difficultyFilter"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#1A759F] focus:border-[#1A759F]"
              >
                <option value="all">Tümü</option>
                <option value="Easy">Kolay</option>
                <option value="Medium">Orta</option>
                <option value="Hard">Zor</option>
              </select>
            </div>
          </div>
        </div>

        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-600 mb-4">Seçtiğiniz filtre kriterlerine uygun etkinlik bulunamadı.</p>
            <button
              onClick={() => {
                setAgeFilter('all');
                setDifficultyFilter('all');
              }}
              className="px-4 py-2 bg-[#1A759F] text-white rounded-md hover:bg-[#0E6185] transition-colors"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;