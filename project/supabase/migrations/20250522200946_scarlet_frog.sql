/*
  # Create games and activities tables

  1. New Tables
    - `games`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `description` (text, required)
      - `category` (text, required)
      - `age_range` (text[], required)
      - `materials` (text[], required)
      - `instructions` (text[], required)
      - `image_url` (text, required)
      - `time_required` (text, required)
      - `difficulty` (text, required)
      - `featured` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `games` table
    - Add policies for authenticated users to:
      - Read all games
      - Create their own games
      - Update their own games
      - Delete their own games
*/

-- Create enum for difficulty levels
CREATE TYPE difficulty_level AS ENUM ('Easy', 'Medium', 'Hard');

-- Create games table
CREATE TABLE IF NOT EXISTS games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  age_range text[] NOT NULL,
  materials text[] NOT NULL,
  instructions text[] NOT NULL,
  image_url text NOT NULL,
  time_required text NOT NULL,
  difficulty difficulty_level NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

-- Enable RLS
ALTER TABLE games ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Games are viewable by everyone" 
  ON games 
  FOR SELECT 
  USING (true);

CREATE POLICY "Users can create their own games" 
  ON games 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own games" 
  ON games 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own games" 
  ON games 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_games_updated_at
  BEFORE UPDATE
  ON games
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();