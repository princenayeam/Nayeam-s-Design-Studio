-- MonoGlass Gallery Database Schema for Supabase (English Version)
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- BOOKINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  shoot_type VARCHAR(50) NOT NULL,
  budget VARCHAR(50) NOT NULL,
  notes TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);

-- ============================================
-- GALLERY_IMAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  series VARCHAR(100) NOT NULL,
  series_name_cn VARCHAR(100) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(500) NOT NULL,
  caption VARCHAR(500) NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_gallery_series ON gallery_images(series);
CREATE INDEX IF NOT EXISTS idx_gallery_display_order ON gallery_images(series, display_order);

-- ============================================
-- JOURNAL_ENTRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS journal_entries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  image_url VARCHAR(500) NOT NULL,
  image_alt VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_journal_date ON journal_entries(date DESC);
CREATE INDEX IF NOT EXISTS idx_journal_tags ON journal_entries USING GIN(tags);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;

-- Bookings: Allow anyone to insert (for booking form)
-- Only allow reading for authenticated users or service role
CREATE POLICY "Allow public insert on bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role to read bookings"
  ON bookings
  FOR SELECT
  TO service_role
  USING (true);

-- Gallery Images: Allow public read (for displaying on website)
CREATE POLICY "Allow public read on gallery_images"
  ON gallery_images
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow service role to manage gallery_images"
  ON gallery_images
  FOR ALL
  TO service_role
  USING (true);

-- Journal Entries: Allow public read
CREATE POLICY "Allow public read on journal_entries"
  ON journal_entries
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow service role to manage journal_entries"
  ON journal_entries
  FOR ALL
  TO service_role
  USING (true);

-- ============================================
-- INITIAL DATA SEEDING (English)
-- ============================================

-- Seed Gallery Images
INSERT INTO gallery_images (series, series_name_cn, image_url, alt_text, caption, display_order) VALUES
-- Horizon City Series
('Horizon City', 'City of Horizons', '/images/horizon-city-1.png', 'Urban cityscape at golden hour', 'Gentle silhouette of city skyline at dusk', 1),
('Horizon City', 'City of Horizons', '/images/horizon-city-2.png', 'Contemporary building facade', 'Poetry of light and shadow on modern architecture', 2),
('Horizon City', 'City of Horizons', '/images/horizon-city-3.png', 'City street view', 'Architectural rhythm in quiet streets', 3),
('Horizon City', 'City of Horizons', '/images/horizon-city-4.png', 'Skyscraper vertical shot', 'Geometric aesthetics looking up at glass towers', 4),
('Horizon City', 'City of Horizons', '/images/horizon-city-5.png', 'Urban rooftop view', 'Composed view from city rooftops', 5),
('Horizon City', 'City of Horizons', '/images/horizon-city-6.png', 'City window reflection', 'Urban dreams reflected in window frames', 6),

-- Soft Wind Series
('Soft Wind', 'Gentle Breeze', '/images/soft-wind-1.png', 'Soft wind through grass field', 'Gentle ripples of breeze across the meadow', 1),
('Soft Wind', 'Gentle Breeze', '/images/soft-wind-2.png', 'Tree branches swaying', 'Light dancing steps of wind among branches', 2),
('Soft Wind', 'Gentle Breeze', '/images/soft-wind-3.png', 'Curtains blowing in wind', 'Elegant posture of curtains dancing with wind', 3),
('Soft Wind', 'Gentle Breeze', '/images/soft-wind-4.png', 'Dandelion seeds floating', 'Aerial journey of dandelion seeds', 4),
('Soft Wind', 'Gentle Breeze', '/images/soft-wind-5.png', 'Wheat field bending', 'Expressive brushstrokes of wind in wheat fields', 5),
('Soft Wind', 'Gentle Breeze', '/images/soft-wind-6.png', 'Fabric scarf flowing', 'Soft flowing lines of silk in the wind', 6),

-- Quiet Lake Series
('Quiet Lake', 'Serene Waters', '/images/quiet-lake-1.png', 'Serene lake at dawn', 'Peaceful reflection on lake surface at dawn', 1),
('Quiet Lake', 'Serene Waters', '/images/quiet-lake-2.png', 'Calm lake surface', 'Poetry of light in the ripples', 2),
('Quiet Lake', 'Serene Waters', '/images/quiet-lake-3.png', 'Lakeside dock reflection', 'Quiet beauty of dock reflections', 3),
('Quiet Lake', 'Serene Waters', '/images/quiet-lake-4.png', 'Water lily on lake', 'Serene moment of water lily blooming', 4),
('Quiet Lake', 'Serene Waters', '/images/quiet-lake-5.png', 'Mountain reflected in lake', 'Magnificent painting of mountain and lake', 5),
('Quiet Lake', 'Serene Waters', '/images/quiet-lake-6.png', 'Still water surface', 'Ethereal Zen of still water', 6)
ON CONFLICT DO NOTHING;

-- Seed Journal Entries (English)
INSERT INTO journal_entries (title, content, date, tags, image_url, image_alt) VALUES
('First Light of Morning', 'The morning light is exceptionally gentle, spilling through the gaps in curtains onto the desk. The coffee cup steams, and time seems to stand still in this moment. I think this is the meaning of photography—to capture those fleeting moments of beauty.', '2025-01-15', ARRAY['Light', 'Daily'], '/images/journal-1.png', 'Morning coffee scene'),
('Time on the Bookshelf', 'While organizing the bookshelf, I found old photographs—those frozen moments remain vivid. Every book is a journey, every photo is a story. We grow through reading and remember through recording.', '2025-01-12', ARRAY['Architecture', 'Life'], '/images/journal-2.png', 'Books on shelf'),
('The Weight of a Camera', 'The camera in hand is not just a tool, but an eye for observing the world. Each shutter press is a choice—choosing what enters the frame, choosing what to keep. This weight of choice is precisely the photographer''s mission.', '2025-01-10', ARRAY['Photography', 'Passion'], '/images/journal-3.png', 'Hand holding camera'),
('Order on the Desktop', 'Minimalist life aesthetics start with a clean desk. Everything in its place, each item useful. Photography is the same—subtract the superfluous, leave only the most essential expression.', '2025-01-08', ARRAY['Life', 'Minimalism'], '/images/journal-4.png', 'Minimalist desk setup'),
('The City Outside the Window', 'Looking down from the high building, the city unfolds like a chessboard. Everyone is a chess piece, yet each writes their own story. Photography taught me to look down from above, and also to gaze closely.', '2025-01-05', ARRAY['Architecture', 'Travel'], '/images/journal-5.png', 'Looking through window'),
('The Ritual of Tea', 'The ritual of tea lies in the focus of every movement. Water temperature, time, the amount of tea leaves—all are variables. Photography is the same: light, composition, timing, each essential.', '2025-01-03', ARRAY['Life', 'Ritual'], '/images/journal-6.png', 'Evening tea ritual')
ON CONFLICT DO NOTHING;

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'MonoGlass Gallery database schema created successfully!';
  RAISE NOTICE 'Tables created: bookings, gallery_images, journal_entries';
  RAISE NOTICE 'Data seeded: 18 gallery images, 6 journal entries';
  RAISE NOTICE 'All content in English';
END $$;
