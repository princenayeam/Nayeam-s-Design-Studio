import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Check if database needs setup
    const { data: galleryData, error: galleryError } = await supabase
      .from('gallery_images')
      .select('series, series_name_cn, caption')
      .limit(1);
    
    const { data: journalData, error: journalError } = await supabase
      .from('journal_entries')
      .select('title, date')
      .limit(1);

    const needsSetup = 
      !galleryError && 
      !journalError &&
      galleryData && 
      journalData &&
      (galleryData[0]?.series_name_cn?.match(/[\u4e00-\u9fff]/) || // Contains Chinese
       journalData[0]?.title?.match(/[\u4e00-\u9fff]/)); // Contains Chinese

    return NextResponse.json({
      success: true,
      needsSetup,
      hasData: !!(galleryData && journalData),
      gallerySample: galleryData?.[0] || null,
      journalSample: journalData?.[0] || null,
      connected: !galleryError && !journalError,
    });
  } catch (error: any) {
    console.error('Status check error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        connected: false,
      },
      { status: 500 }
    );
  }
}
