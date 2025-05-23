import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.id}`}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold group-hover:text-[#FCBF49] transition-colors">{category.name}</h3>
          <p className="text-sm text-gray-200 mt-1">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;