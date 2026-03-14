import { NextRequest, NextResponse } from 'next/server';
import { supabase, Booking } from '@/lib/supabase';

// POST - Create a new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, shootType, budget, notes } = body;

    // Validate required fields
    if (!name || !email || !notes) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, notes' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate notes length (minimum 10 characters)
    if (notes.length < 10) {
      return NextResponse.json(
        { error: 'Notes must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Insert booking into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert({
        name,
        email,
        shoot_type: shootType || 'Portrait',
        budget: budget || '2k-5k',
        notes,
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to create booking' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Booking created successfully',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Fetch recent bookings (for admin use - would need auth in production)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '5');

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch bookings' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data || [],
    });
  } catch (error) {
    console.error('Bookings GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
