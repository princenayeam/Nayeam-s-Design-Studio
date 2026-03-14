import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch all journal entries
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const tag = searchParams.get('tag');

    let query = supabase
      .from('journal_entries')
      .select('*')
      .order('date', { ascending: false })
      .limit(limit);

    // Filter by tag if specified
    if (tag) {
      query = query.contains('tags', [tag]);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch journal entries' },
        { status: 500 }
      );
    }

    // Format data for frontend
    const formattedData = data?.map((entry: any) => ({
      id: entry.id,
      title: entry.title,
      content: entry.content,
      date: entry.date,
      tags: entry.tags || [],
      image: entry.image_url,
      imageAlt: entry.image_alt,
    })) || [];

    return NextResponse.json({
      success: true,
      data: formattedData,
    });
  } catch (error) {
    console.error('Journal API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
