# Supabase Backend Setup Guide

This guide will help you set up Supabase for the MonoGlass Gallery backend.

## Prerequisites

- A Supabase account (free tier works)
- Your Supabase project URL and anon key

## Setup Steps

### 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Choose a name (e.g., "monoglass-gallery")
5. Set a database password (save this!)
6. Select a region close to your users
7. Click "Create new project"
8. Wait for the project to be ready (2-3 minutes)

### 2. Get Your Credentials

1. Go to your project dashboard
2. Navigate to **Settings** → **API**
3. Copy the following:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

### 3. Set Environment Variables

Create a `.env.local` file in your project root (if it doesn't exist):

```bash
# Copy the example file
cp .env.example .env.local
```

Then edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Important:** Replace the placeholder values with your actual credentials.

### 4. Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the contents of `supabase-schema.sql` from this project
4. Paste it into the SQL Editor
5. Click "Run" or press `Ctrl+Enter`

This will:
- Create 3 tables: `bookings`, `gallery_images`, `journal_entries`
- Set up Row Level Security (RLS) policies
- Seed initial data (18 gallery images, 6 journal entries)

### 5. Restart the Development Server

After setting up the environment variables, restart your dev server:

```bash
# Stop the current server (Ctrl+C)
bun run dev
```

## API Endpoints

### Bookings API

**Create a booking:**
```http
POST /api/bookings
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "shootType": "Portrait",
  "budget": "5k-10k",
  "notes": "I want a photoshoot in..."
}
```

**Get recent bookings:**
```http
GET /api/bookings?limit=5
```

### Gallery API

**Get all gallery images (grouped by series):**
```http
GET /api/gallery
```

**Get images from a specific series:**
```http
GET /api/gallery?series=Horizon%20City
```

### Journal API

**Get all journal entries:**
```http
GET /api/journal
```

**Get entries with limit:**
```http
GET /api/journal?limit=5
```

**Filter by tag:**
```http
GET /api/journal?tag=Light
```

## Database Schema

### bookings
- `id` (UUID, primary key)
- `name` (text)
- `email` (text)
- `shoot_type` (text)
- `budget` (text)
- `notes` (text)
- `created_at` (timestamp)

### gallery_images
- `id` (UUID, primary key)
- `series` (text)
- `series_name_cn` (text)
- `image_url` (text)
- `alt_text` (text)
- `caption` (text)
- `display_order` (integer)
- `created_at` (timestamp)

### journal_entries
- `id` (UUID, primary key)
- `title` (text)
- `content` (text)
- `date` (date)
- `tags` (text array)
- `image_url` (text)
- `image_alt` (text)
- `created_at` (timestamp)

## Security Notes

- The current setup allows public INSERT on `bookings` for the booking form
- In production, you should add additional authentication
- Consider adding rate limiting to prevent abuse
- Never expose your `service_role` key in client-side code

## Troubleshooting

### "Missing Supabase environment variables" error

Make sure you've:
1. Created `.env.local` file
2. Added both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Restarted the dev server after adding the variables

### API returning 500 errors

Check the Supabase logs in your dashboard:
1. Go to **Logs** → **Database** or **API**
2. Look for error messages
3. Verify your SQL schema was applied correctly

### Data not appearing

1. Verify the SQL schema was run successfully
2. Check that images exist in `public/images/`
3. Look at browser console for any errors

## Admin Interface (Optional)

To manage your data visually, you can use Supabase's built-in Table Editor:

1. Go to **Table Editor** in your Supabase dashboard
2. Select a table to view/edit data
3. You can add, edit, or delete rows directly

## Next Steps

- Add authentication with Supabase Auth
- Implement file upload for new images using Supabase Storage
- Add email notifications for new bookings
- Create an admin panel to manage content
- Add analytics with Supabase Analytics

## Support

For issues with Supabase:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase GitHub Issues](https://github.com/supabase/supabase/issues)
- [Supabase Discord](https://discord.gg/supabase)
