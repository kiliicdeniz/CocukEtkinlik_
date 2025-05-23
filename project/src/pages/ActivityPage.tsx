import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChevronLeft, CircleCheck } from 'lucide-react';
import { activities } from '../data/activities';
import { Activity } from '../types';
import ActivityCard from '../components/ActivityCard';

const ActivityPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [relatedActivities, setRelatedActivities] = useState<Activity[]>([]);

  useEffect(() => {
    if (id) {
      const foundActivity = activities.find(a => a.id === id) || null;
      setActivity(foundActivity);

      if (foundActivity) {
        // Find related activities from the same category
        const related = activities
          .filter(a => a.category === foundActivity.category && a.id !== id)
          .slice(0, 3);
        setRelatedActivities(related);
      }
    }
  }, [id]);

  if (!activity) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Etkinlik bulunamadı</h2>
          <Link to="/" className="text-[#1A759F] hover:text-[#F77F00] transition-colors">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-[#1A759F] hover:text-[#F77F00] mb-6 transition-colors">
          <ChevronLeft size={20} className="mr-1" />
          Ana Sayfaya Dön
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-72 md:h-96 relative">
            <img 
              src={activity.imageUrl}
              alt={activity.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 text-sm font-medium rounded ${
                activity.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                activity.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {activity.difficulty === 'Easy' ? 'Kolay' : activity.difficulty === 'Medium' ? 'Orta' : 'Zor'}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{activity.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Clock size={18} className="mr-2" />
                <span>{activity.timeRequired}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={18} className="mr-2" />
                <span>{activity.ageRange.join(', ')} yaş</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8">{activity.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Malzemeler</h2>
              <ul className="space-y-2">
                {activity.materials.map((material, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#F77F00] mr-2">•</span>
                    <span>{material}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Yapılışı</h2>
              <div className="space-y-4">
                {activity.instructions.map((instruction, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A759F] text-white flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700">{instruction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Activities */}
        {relatedActivities.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Benzer Etkinlikler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedActivities.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;