# ✅ Supabase Connection Setup - Ready for Configuration

I've prepared your MonoGlass Gallery project to connect with your Supabase account!

## 📋 What I've Done

### ✅ Completed Setup

1. **Extracted your project information:**
   - Project Reference: `mgdpbgguxinwmkwotdbo`
   - Project URL: `https://mgdpbgguxinwmkwotdbo.supabase.co`

2. **Created backend API routes:**
   - `/api/bookings` - POST/GET for booking requests
   - `/api/gallery` - GET for gallery images
   - `/api/journal` - GET for journal entries

3. **Prepared database schema:**
   - `supabase-schema.sql` - Complete database structure
   - Includes 18 gallery images (3 series)
   - Includes 6 journal entries
   - Row Level Security policies

4. **Configured environment:**
   - Created `.env.local` with your project URL
   - Added TypeScript types for database tables
   - Updated frontend to use backend APIs

5. **Created setup guides:**
   - `QUICK_SETUP.md` - Step-by-step setup instructions
   - `SUPABASE_PROJECT_INFO.md` - Your project details & quick links
   - `setup-supabase.sh` - Automated setup script

## 🔧 What You Need to Do (5 minutes)

### Step 1: Get Your Anon Key (2 min)

1. **Open this URL:**
   ```
   https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/settings/api
   ```

2. **Copy the "anon public" key** (starts with `eyJ...`)

### Step 2: Add Anon Key to Project

Open `.env.local` and replace `your_anon_key_here` with your actual key:

```env
NEXT_PUBLIC_SUPABASE_URL=https://mgdpbgguxinwmkwotdbo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... # Paste your key here
```

### Step 3: Run Database Schema (3 min)

1. **Open SQL Editor:**
   ```
   https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/sql
   ```

2. **Copy & Run Schema:**
   - Open `supabase-schema.sql` from this project
   - Copy all the SQL
   - Paste into SQL Editor
   - Click **Run**

### Step 4: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
bun run dev
```

### Step 5: Test It!

1. Open website in Preview Panel
2. Scroll to "Book a Session"
3. Submit a booking request
4. Check "Most Recent Request" updates
5. Verify in Supabase Table Editor:
   ```
   https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/editor
   ```

## 📁 Files Created/Modified

### New Files:
- `src/lib/supabase.ts` - Supabase client & types
- `src/app/api/bookings/route.ts` - Booking API
- `src/app/api/gallery/route.ts` - Gallery API
- `src/app/api/journal/route.ts` - Journal API
- `supabase-schema.sql` - Database schema
- `.env.local` - Environment variables (needs your key)
- `.env.example` - Template
- `setup-supabase.sh` - Setup script
- `QUICK_SETUP.md` - Setup guide
- `SUPABASE_PROJECT_INFO.md` - Project info
- `SUPABASE_SETUP.md` - Detailed docs

### Modified Files:
- `src/app/page.tsx` - Updated to use backend APIs

## 🎯 After Setup - What You Get

### 1. **Persistent Data Storage**
- All bookings saved to your Supabase database
- Accessible via Supabase dashboard
- No data loss on page refresh

### 2. **Dynamic Content Management**
- Add/edit gallery images via SQL
- Add journal entries without code changes
- Real-time updates to website

### 3. **Full API Access**
```
POST   /api/bookings              # Create booking
GET    /api/bookings?limit=5      # Get recent bookings
GET    /api/gallery               # Get all gallery images
GET    /api/gallery?series=Name   # Filter by series
GET    /api/journal               # Get journal entries
GET    /api/journal?tag=Light     # Filter by tag
```

### 4. **Database Management**
- View data in Table Editor
- Run queries in SQL Editor
- Monitor logs in dashboard
- Export data anytime

## 🔍 Your Supabase Quick Links

| Feature | URL |
|---------|-----|
| **Dashboard** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo |
| **SQL Editor** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/sql |
| **Table Editor** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/editor |
| **API Settings** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/settings/api |
| **Logs** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/logs |

## 💡 Tips

### Adding New Gallery Images:
```sql
INSERT INTO gallery_images (series, series_name_cn, image_url, alt_text, caption, display_order)
VALUES ('Series Name', '系列名称', '/images/photo.png', 'Alt text', 'Caption', 1);
```

### Adding Journal Entries:
```sql
INSERT INTO journal_entries (title, content, date, tags, image_url, image_alt)
VALUES ('Title', 'Content...', '2025-01-20', ARRAY['Tag'], '/images/journal.png', 'Alt');
```

### Viewing Bookings:
- Go to Table Editor
- Select `bookings` table
- View all booking requests

## ⚠️ Important Notes

1. **Never share your service_role key** - only use anon key in frontend
2. **The current setup is for development** - add auth for production
3. **Images must be in `public/images/`** - the database only stores paths
4. **Restart dev server** after changing `.env.local`

## 🆘 Need Help?

- **Quick Setup:** See `QUICK_SETUP.md`
- **Detailed Docs:** See `SUPABASE_SETUP.md`
- **Project Info:** See `SUPABASE_PROJECT_INFO.md`
- **Supabase Docs:** https://supabase.com/docs
- **Your Dashboard:** https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo

---

## ✨ You're Almost There!

Just complete the 4 steps above and your MonoGlass Gallery will be fully connected to Supabase!

**Ready? Start with Step 1:**
👉 https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/settings/api

Get your anon key, paste it in `.env.local`, run the schema, and you're done! 🚀
