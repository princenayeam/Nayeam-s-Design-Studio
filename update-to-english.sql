-- ============================================
-- UPDATE SUPABASE DATA TO ENGLISH
-- Run this in your Supabase SQL Editor to update all existing data
-- ============================================

-- UPDATE GALLERY IMAGES CAPTIONS AND DESCRIPTIONS
UPDATE gallery_images SET series_name_cn = 'City of Horizons' WHERE series = 'Horizon City';
UPDATE gallery_images SET caption = 'Gentle silhouette of city skyline at dusk' WHERE image_url = '/images/horizon-city-1.png';
UPDATE gallery_images SET caption = 'Poetry of light and shadow on modern architecture' WHERE image_url = '/images/horizon-city-2.png';
UPDATE gallery_images SET caption = 'Architectural rhythm in quiet streets' WHERE image_url = '/images/horizon-city-3.png';
UPDATE gallery_images SET caption = 'Geometric aesthetics looking up at glass towers' WHERE image_url = '/images/horizon-city-4.png';
UPDATE gallery_images SET caption = 'Composed view from city rooftops' WHERE image_url = '/images/horizon-city-5.png';
UPDATE gallery_images SET caption = 'Urban dreams reflected in window frames' WHERE image_url = '/images/horizon-city-6.png';

UPDATE gallery_images SET series_name_cn = 'Gentle Breeze' WHERE series = 'Soft Wind';
UPDATE gallery_images SET caption = 'Gentle ripples of breeze across the meadow' WHERE image_url = '/images/soft-wind-1.png';
UPDATE gallery_images SET caption = 'Light dancing steps of wind among branches' WHERE image_url = '/images/soft-wind-2.png';
UPDATE gallery_images SET caption = 'Elegant posture of curtains dancing with wind' WHERE image_url = '/images/soft-wind-3.png';
UPDATE gallery_images SET caption = 'Aerial journey of dandelion seeds' WHERE image_url = '/images/soft-wind-4.png';
UPDATE gallery_images SET caption = 'Expressive brushstrokes of wind in wheat fields' WHERE image_url = '/images/soft-wind-5.png';
UPDATE gallery_images SET caption = 'Soft flowing lines of silk in the wind' WHERE image_url = '/images/soft-wind-6.png';

UPDATE gallery_images SET series_name_cn = 'Serene Waters' WHERE series = 'Quiet Lake';
UPDATE gallery_images SET caption = 'Peaceful reflection on lake surface at dawn' WHERE image_url = '/images/quiet-lake-1.png';
UPDATE gallery_images SET caption = 'Poetry of light in the ripples' WHERE image_url = '/images/quiet-lake-2.png';
UPDATE gallery_images SET caption = 'Quiet beauty of dock reflections' WHERE image_url = '/images/quiet-lake-3.png';
UPDATE gallery_images SET caption = 'Serene moment of water lily blooming' WHERE image_url = '/images/quiet-lake-4.png';
UPDATE gallery_images SET caption = 'Magnificent painting of mountain and lake' WHERE image_url = '/images/quiet-lake-5.png';
UPDATE gallery_images SET caption = 'Ethereal Zen of still water' WHERE image_url = '/images/quiet-lake-6.png';

-- UPDATE JOURNAL ENTRIES TO ENGLISH
UPDATE journal_entries SET
  title = 'First Light of Morning',
  content = 'The morning light is exceptionally gentle, spilling through the gaps in curtains onto the desk. The coffee cup steams, and time seems to stand still in this moment. I think this is the meaning of photography—to capture those fleeting moments of beauty.'
WHERE date = '2025-01-15';

UPDATE journal_entries SET
  title = 'Time on the Bookshelf',
  content = 'While organizing the bookshelf, I found old photographs—those frozen moments remain vivid. Every book is a journey, every photo is a story. We grow through reading and remember through recording.'
WHERE date = '2025-01-12';

UPDATE journal_entries SET
  title = 'The Weight of a Camera',
  content = 'The camera in hand is not just a tool, but an eye for observing the world. Each shutter press is a choice—choosing what enters the frame, choosing what to keep. This weight of choice is precisely the photographer''s mission.'
WHERE date = '2025-01-10';

UPDATE journal_entries SET
  title = 'Order on the Desktop',
  content = 'Minimalist life aesthetics start with a clean desk. Everything in its place, each item useful. Photography is the same—subtract the superfluous, leave only the most essential expression.'
WHERE date = '2025-01-08';

UPDATE journal_entries SET
  title = 'The City Outside the Window',
  content = 'Looking down from the high building, the city unfolds like a chessboard. Everyone is a chess piece, yet each writes their own story. Photography taught me to look down from above, and also to gaze closely.'
WHERE date = '2025-01-05';

UPDATE journal_entries SET
  title = 'The Ritual of Tea',
  content = 'The ritual of tea lies in the focus of every movement. Water temperature, time, the amount of tea leaves—all are variables. Photography is the same: light, composition, timing, each essential.'
WHERE date = '2025-01-03';

-- SUCCESS MESSAGE
DO $$
BEGIN
  RAISE NOTICE 'All data has been updated to English!';
  RAISE NOTICE 'Gallery images: 18 captions and series descriptions updated';
  RAISE NOTICE 'Journal entries: 6 titles and contents updated';
END $$;
