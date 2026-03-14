import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch all gallery images grouped by series
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const series = searchParams.get('series');

    let query = supabase
      .from('gallery_images')
      .select('*')
      .order('display_order', { ascending: true });

    // Filter by series if specified
    if (series) {
      query = query.eq('series', series);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch gallery images' },
        { status: 500 }
      );
    }

    // Group images by series if no specific series requested
    let responseData = data;
    if (!series && data) {
      const grouped = data.reduce((acc: any, image: any) => {
        const seriesName = image.series;
        if (!acc[seriesName]) {
          acc[seriesName] = {
            name: seriesName,
            description: image.series_name_cn,
            images: [],
          };
        }
        acc[seriesName].images.push({
          src: image.image_url,
          alt: image.alt_text,
          caption: image.caption,
        });
        return acc;
      }, {});

      // Convert to array
      responseData = Object.values(grouped);
    } else if (data) {
      // Format single series data
      responseData = data.map((image: any) => ({
        src: image.image_url,
        alt: image.alt_text,
        caption: image.caption,
      }));
    }

    return NextResponse.json({
      success: true,
      data: responseData || [],
    });
  } catch (error) {
    console.error('Gallery API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
