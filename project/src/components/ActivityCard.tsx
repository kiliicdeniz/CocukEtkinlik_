import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  featured?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, featured = false }) => {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };

  return (
    <Link 
      to={`/activity/${activity.id}`}
      className={`
        block group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300
        transform hover:-translate-y-1 ${featured ? 'md:col-span-2 lg:col-span-2' : ''}
      `}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={activity.imageUrl}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 m-3">
          <span className={`px-2 py-1 text-xs font-medium rounded ${difficultyColor[activity.difficulty]}`}>
            {activity.difficulty === 'Easy' ? 'Kolay' : activity.difficulty === 'Medium' ? 'Orta' : 'Zor'}
          </span>
        </div>
        {featured && (
          <div className="absolute top-0 left-0 m-3">
            <span className="px-2 py-1 text-xs font-medium rounded bg-[#F77F00] text-white">
              Öne Çıkan
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#F77F00] transition-colors mb-2">
          {activity.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{activity.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{activity.timeRequired}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{activity.ageRange.join(', ')} yaş</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;