import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Users, Star, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchBar';
import { activities } from '../data/activities';
import { categories } from '../data/categories';
import { Activity } from '../types';

const HomePage: React.FC = () => {
  const [featuredActivities, setFeaturedActivities] = useState<Activity[]>([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [popularActivities, setPopularActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const featured = activities.filter(activity => activity.featured);
    setFeaturedActivities(featured);

    // Get popular activities (for this example, we'll use activities with 'Easy' difficulty)
    const popular = activities
      .filter(activity => activity.difficulty === 'Easy')
      .slice(0, 4);
    setPopularActivities(popular);

    // Rotate hero section every 5 seconds
    const interval = setInterval(() => {
      setHeroIndex(prevIndex => (prevIndex + 1) % featured.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      {featuredActivities.length > 0 && (
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          <img 
            src={featuredActivities[heroIndex]?.imageUrl}
            alt={featuredActivities[heroIndex]?.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Çocuklarla <span className="text-[#FCBF49]">Eğlenceli</span> ve <br/>
              <span className="text-[#FCBF49]">Eğitici</span> Etkinlikler
            </h1>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl">
              Evde kolayca yapabileceğiniz yaratıcı oyun ve etkinlik tarifleri ile çocuğunuzun gelişimini destekleyin.
            </p>
            <div className="max-w-lg w-full">
              <SearchBar />
            </div>
            <div className="mt-12 flex gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center">
                <Clock className="text-[#FCBF49] mr-3" size={24} />
                <div className="text-white">
                  <div className="text-sm opacity-80">Etkinlik Süresi</div>
                  <div className="font-semibold">15-90 Dakika</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center">
                <Users className="text-[#FCBF49] mr-3" size={24} />
                <div className="text-white">
                  <div className="text-sm opacity-80">Yaş Aralığı</div>
                  <div className="font-semibold">1-12 Yaş</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center">
                <Star className="text-[#FCBF49] mr-3" size={24} />
                <div className="text-white">
                  <div className="text-sm opacity-80">Zorluk Seviyesi</div>
                  <div className="font-semibold">Kolay-Zor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Neden ÇocukEtkinlik?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#F77F00]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Güvenli ve Eğlenceli</h3>
              <p className="text-gray-600">Tüm etkinliklerimiz çocukların güvenliği düşünülerek tasarlanmıştır.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#F77F00]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Eğitici İçerik</h3>
              <p className="text-gray-600">Her etkinlik çocuğunuzun gelişimine katkı sağlamak için özenle hazırlanır.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-[#F77F00]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kolay Uygulama</h3>
              <p className="text-gray-600">Evde bulunan malzemelerle kolayca yapabileceğiniz etkinlikler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Öne Çıkan Etkinlikler</h2>
            <Link to="/category/all" className="text-[#1A759F] hover:text-[#F77F00] flex items-center transition-colors">
              Tümünü Gör <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredActivities.map(activity => (
              <ActivityCard 
                key={activity.id} 
                activity={activity} 
                featured={activity.id === featuredActivities[0]?.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kategoriler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Activities */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popüler Etkinlikler</h2>
            <Link to="/category/all" className="text-[#1A759F] hover:text-[#F77F00] flex items-center transition-colors">
              Tümünü Gör <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1A759F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Çocuğunuzla Kaliteli Zaman Geçirin</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Birlikte öğrenin, keşfedin ve eğlenin. Tüm etkinliklerimiz çocuğunuzun yaratıcılığını ve gelişimini desteklemek için tasarlanmıştır.
          </p>
          <Link 
            to="/category/all"
            className="inline-block px-8 py-4 bg-[#FCBF49] text-gray-900 text-lg font-medium rounded-full hover:bg-[#F8A932] transition-colors"
          >
            Etkinlikleri Keşfet
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;