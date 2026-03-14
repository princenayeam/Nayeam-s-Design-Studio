import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase environment variables not set. Using fallback mode.');
}

// Database types
export interface Booking {
  id?: string;
  name: string;
  email: string;
  shoot_type: string;
  budget: string;
  notes: string;
  created_at?: string;
}

export interface GalleryImage {
  id?: string;
  series: string;
  series_name_cn: string;
  image_url: string;
  alt_text: string;
  caption: string;
  display_order: number;
  created_at?: string;
}

export interface JournalEntry {
  id?: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  image_url: string;
  image_alt: string;
  created_at?: string;
}

export { supabase };
