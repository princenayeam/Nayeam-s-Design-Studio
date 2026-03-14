import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const results = {
      updated: [] as string[],
      skipped: [] as string[],
      errors: [] as string[],
      timestamp: new Date().toISOString(),
    };

    // ============================================
    // UPDATE GALLERY IMAGES
    // ============================================
    
    const galleryData = {
      'Horizon City': {
        description: 'City of Horizons',
        images: [
          { url: '/images/horizon-city-1.png', caption: 'Gentle silhouette of city skyline at dusk' },
          { url: '/images/horizon-city-2.png', caption: 'Poetry of light and shadow on modern architecture' },
          { url: '/images/horizon-city-3.png', caption: 'Architectural rhythm in quiet streets' },
          { url: '/images/horizon-city-4.png', caption: 'Geometric aesthetics looking up at glass towers' },
          { url: '/images/horizon-city-5.png', caption: 'Composed view from city rooftops' },
          { url: '/images/horizon-city-6.png', caption: 'Urban dreams reflected in window frames' },
        ]
      },
      'Soft Wind': {
        description: 'Gentle Breeze',
        images: [
          { url: '/images/soft-wind-1.png', caption: 'Gentle ripples of breeze across the meadow' },
          { url: '/images/soft-wind-2.png', caption: 'Light dancing steps of wind among branches' },
          { url: '/images/soft-wind-3.png', caption: 'Elegant posture of curtains dancing with wind' },
          { url: '/images/soft-wind-4.png', caption: 'Aerial journey of dandelion seeds' },
          { url: '/images/soft-wind-5.png', caption: 'Expressive brushstrokes of wind in wheat fields' },
          { url: '/images/soft-wind-6.png', caption: 'Soft flowing lines of silk in the wind' },
        ]
      },
      'Quiet Lake': {
        description: 'Serene Waters',
        images: [
          { url: '/images/quiet-lake-1.png', caption: 'Peaceful reflection on lake surface at dawn' },
          { url: '/images/quiet-lake-2.png', caption: 'Poetry of light in the ripples' },
          { url: '/images/quiet-lake-3.png', caption: 'Quiet beauty of dock reflections' },
          { url: '/images/quiet-lake-4.png', caption: 'Serene moment of water lily blooming' },
          { url: '/images/quiet-lake-5.png', caption: 'Magnificent painting of mountain and lake' },
          { url: '/images/quiet-lake-6.png', caption: 'Ethereal Zen of still water' },
        ]
      }
    };

    // Update each series
    for (const [seriesName, data] of Object.entries(galleryData)) {
      // Update series description
      const { data: existingSeries } = await supabase
        .from('gallery_images')
        .select('series_name_cn')
        .eq('series', seriesName)
        .limit(1)
        .single();

      if (existingSeries && existingSeries.series_name_cn !== data.description) {
        await supabase
          .from('gallery_images')
          .update({ series_name_cn: data.description })
          .eq('series', seriesName);
        results.updated.push(`Updated series: ${seriesName} → ${data.description}`);
      } else if (existingSeries) {
        results.skipped.push(`Series already configured: ${seriesName}`);
      }

      // Update image captions
      for (const img of data.images) {
        const { data: existingImage } = await supabase
          .from('gallery_images')
          .select('caption')
          .eq('image_url', img.url)
          .limit(1)
          .single();

        if (existingImage && existingImage.caption !== img.caption) {
          const { error } = await supabase
            .from('gallery_images')
            .update({ caption: img.caption })
            .eq('image_url', img.url);
          
          if (!error) {
            results.updated.push(`Updated: ${img.url}`);
          } else {
            results.errors.push(`Failed: ${img.url} - ${error.message}`);
          }
        } else if (existingImage) {
          results.skipped.push(`Already configured: ${img.url}`);
        }
      }
    }

    // ============================================
    // UPDATE JOURNAL ENTRIES
    // ============================================

    const journalUpdates = [
      {
        date: '2025-01-15',
        title: 'First Light of Morning',
        content: 'The morning light is exceptionally gentle, spilling through the gaps in curtains onto the desk. The coffee cup steams, and time seems to stand still in this moment. I think this is the meaning of photography—to capture those fleeting moments of beauty.'
      },
      {
        date: '2025-01-12',
        title: 'Time on the Bookshelf',
        content: 'While organizing the bookshelf, I found old photographs—those frozen moments remain vivid. Every book is a journey, every photo is a story. We grow through reading and remember through recording.'
      },
      {
        date: '2025-01-10',
        title: 'The Weight of a Camera',
        content: 'The camera in hand is not just a tool, but an eye for observing the world. Each shutter press is a choice—choosing what enters the frame, choosing what to keep. This weight of choice is precisely the photographer\'s mission.'
      },
      {
        date: '2025-01-08',
        title: 'Order on the Desktop',
        content: 'Minimalist life aesthetics start with a clean desk. Everything in its place, each item useful. Photography is the same—subtract the superfluous, leave only the most essential expression.'
      },
      {
        date: '2025-01-05',
        title: 'The City Outside the Window',
        content: 'Looking down from the high building, the city unfolds like a chessboard. Everyone is a chess piece, yet each writes their own story. Photography taught me to look down from above, and also to gaze closely.'
      },
      {
        date: '2025-01-03',
        title: 'The Ritual of Tea',
        content: 'The ritual of tea lies in the focus of every movement. Water temperature, time, the amount of tea leaves—all are variables. Photography is the same: light, composition, timing, each essential.'
      },
    ];

    for (const entry of journalUpdates) {
      const { data: existingEntry } = await supabase
        .from('journal_entries')
        .select('title')
        .eq('date', entry.date)
        .limit(1)
        .single();

      if (existingEntry && existingEntry.title !== entry.title) {
        const { error } = await supabase
          .from('journal_entries')
          .update({ title: entry.title, content: entry.content })
          .eq('date', entry.date);
        
        if (!error) {
          results.updated.push(`Updated journal: ${entry.title}`);
        } else {
          results.errors.push(`Failed to update journal for ${entry.date}: ${error.message}`);
        }
      } else if (existingEntry) {
        results.skipped.push(`Journal already configured: ${entry.title}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Database setup completed successfully!',
      results: {
        updatedCount: results.updated.length,
        skippedCount: results.skipped.length,
        errorCount: results.errors.length,
        updated: results.updated,
        skipped: results.skipped,
        errors: results.errors,
        timestamp: results.timestamp,
      },
    });
  } catch (error: any) {
    console.error('Setup error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to configure database',
      },
      { status: 500 }
    );
  }
}
