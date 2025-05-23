export interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  ageRange: string[];
  materials: string[];
  instructions: string[];
  imageUrl: string;
  timeRequired: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  featured?: boolean;
}

export type Category = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};