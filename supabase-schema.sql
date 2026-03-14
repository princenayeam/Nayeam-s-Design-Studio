-- MonoGlass Gallery Database Schema for Supabase
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
-- INITIAL DATA SEEDING
-- ============================================

-- Seed Gallery Images
INSERT INTO gallery_images (series, series_name_cn, image_url, alt_text, caption, display_order) VALUES
-- Horizon City Series
('Horizon City', '地平线之城', '/images/horizon-city-1.png', 'Urban cityscape at golden hour', '城市天际线在黄昏时刻的温柔轮廓', 1),
('Horizon City', '地平线之城', '/images/horizon-city-2.png', 'Contemporary building facade', '现代建筑立面上的光影诗篇', 2),
('Horizon City', '地平线之城', '/images/horizon-city-3.png', 'City street view', '静谧街道中的建筑韵律', 3),
('Horizon City', '地平线之城', '/images/horizon-city-4.png', 'Skyscraper vertical shot', '仰望玻璃塔楼的几何美学', 4),
('Horizon City', '地平线之城', '/images/horizon-city-5.png', 'Urban rooftop view', '城市屋顶的从容视野', 5),
('Horizon City', '地平线之城', '/images/horizon-city-6.png', 'City window reflection', '窗棂折射出的城市梦境', 6),

-- Soft Wind Series
('Soft Wind', '柔软的风', '/images/soft-wind-1.png', 'Soft wind through grass field', '微风吹过草地的温柔涟漪', 1),
('Soft Wind', '柔软的风', '/images/soft-wind-2.png', 'Tree branches swaying', '枝叶间风的轻盈舞步', 2),
('Soft Wind', '柔软的风', '/images/soft-wind-3.png', 'Curtains blowing in wind', '窗帘随风的优雅姿态', 3),
('Soft Wind', '柔软的风', '/images/soft-wind-4.png', 'Dandelion seeds floating', '蒲公英种子的空中漫游', 4),
('Soft Wind', '柔软的风', '/images/soft-wind-5.png', 'Wheat field bending', '麦田中的风的写意', 5),
('Soft Wind', '柔软的风', '/images/soft-wind-6.png', 'Fabric scarf flowing', '丝巾在风中的柔美线条', 6),

-- Quiet Lake Series
('Quiet Lake', '静湖', '/images/quiet-lake-1.png', 'Serene lake at dawn', '黎明湖面的宁静倒影', 1),
('Quiet Lake', '静湖', '/images/quiet-lake-2.png', 'Calm lake surface', '涟漪中的光的诗', 2),
('Quiet Lake', '静湖', '/images/quiet-lake-3.png', 'Lakeside dock reflection', '码头倒影的寂静之美', 3),
('Quiet Lake', '静湖', '/images/quiet-lake-4.png', 'Water lily on lake', '睡莲静静绽放的瞬间', 4),
('Quiet Lake', '静湖', '/images/quiet-lake-5.png', 'Mountain reflected in lake', '山湖相映的壮丽画卷', 5),
('Quiet Lake', '静湖', '/images/quiet-lake-6.png', 'Still water surface', '水面的空灵禅意', 6)
ON CONFLICT DO NOTHING;

-- Seed Journal Entries
INSERT INTO journal_entries (title, content, date, tags, image_url, image_alt) VALUES
('清晨的第一缕光', '今天的晨光格外温柔，透过窗帘的缝隙洒在桌面上。咖啡杯冒着热气，时间仿佛在这一刻静止。我想这就是摄影的意义——捕捉那些转瞬即逝的美好。', '2025-01-15', ARRAY['Light', 'Daily'], '/images/journal-1.png', 'Morning coffee scene'),
('书架上的时光', '整理书架时发现旧照片，那些被定格的瞬间依然鲜活。每一本书都是一段旅程，每一张照片都是一个故事。我们在阅读中成长，在记录中铭记。', '2025-01-12', ARRAY['Architecture', 'Life'], '/images/journal-2.png', 'Books on shelf'),
('相机的重量', '手中的相机不仅是工具，更是观察世界的眼睛。每一次快门都是一次选择，选择什么入画，选择什么留下。这种选择的重量，正是摄影人的使命。', '2025-01-10', ARRAY['Photography', 'Passion'], '/images/journal-3.png', 'Hand holding camera'),
('桌面上的秩序', '极简的生活美学，从一张干净的桌子开始。物尽其用，各得其所。摄影也是如此，减去多余的元素，留下最本质的表达。', '2025-01-08', ARRAY['Life', 'Minimalism'], '/images/journal-4.png', 'Minimalist desk setup'),
('窗外的城市', '从高楼俯瞰，城市如棋盘般展开。每个人都是棋子，却也在书写自己的故事。摄影让我学会了俯瞰，也学会了凝视。', '2025-01-05', ARRAY['Architecture', 'Travel'], '/images/journal-5.png', 'Looking through window'),
('茶的仪式', '泡茶的仪式感，在于每一个动作的专注。水温、时间、茶叶的分量，都是变量。摄影也是如此，光线、构图、时机，缺一不可。', '2025-01-03', ARRAY['Life', 'Ritual'], '/images/journal-6.png', 'Evening tea ritual')
ON CONFLICT DO NOTHING;

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'MonoGlass Gallery database schema created successfully!';
  RAISE NOTICE 'Tables created: bookings, gallery_images, journal_entries';
  RAISE NOTICE 'Data seeded: 18 gallery images, 6 journal entries';
END $$;
