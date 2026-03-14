# 🚀 Quick Setup - Connect MonoGlass Gallery to Your Supabase

Your Supabase project reference: `mgdpbgguxinwmkwotdbo`

## Step 1: Get Your Anon Key (2 minutes)

1. **Open this URL in your browser:**
   ```
   https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/settings/api
   ```

2. **Copy your credentials:**
   - Scroll down to "Project API Keys" section
   - Copy the **"anon public"** key (starts with `eyJ...`)
   - Keep this key handy!

## Step 2: Configure Environment Variables

Your `.env.local` file already has your project URL configured. You just need to add your anon key.

**Option A: Manual Edit**
1. Open `.env.local` in this project
2. Replace `your_anon_key_here` with your actual anon key
3. Save the file

**Option B: Run the Setup Script**
```bash
bash setup-supabase.sh
```

## Step 3: Run Database Schema (3 minutes)

1. **Open SQL Editor:**
   ```
   https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/sql
   ```

2. **Copy and run the schema:**
   - Open `supabase-schema.sql` from this project
   - Copy all the SQL code
   - Paste it into the SQL Editor
   - Click **"Run"** button (or press `Ctrl+Enter`)

This will create:
- ✅ `bookings` table
- ✅ `gallery_images` table (with 18 images)
- ✅ `journal_entries` table (with 6 entries)
- ✅ Row Level Security policies
- ✅ Indexes for performance

## Step 4: Restart Development Server

```bash
# Stop current server (Ctrl+C)
# Then restart:
bun run dev
```

## Step 5: Test the Connection

1. Open the website in the Preview Panel
2. Scroll down to "Book a Session"
3. Fill out the form and submit
4. Check that "Most Recent Request" updates
5. Verify data in Supabase Table Editor:
   ```
   https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/editor
   ```

## ✅ Verification Checklist

- [ ] Anon key added to `.env.local`
- [ ] Database schema ran successfully
- [ ] Dev server restarted
- [ ] Booking form tested
- [ ] Data appears in Supabase dashboard

## 📊 Your Supabase Dashboard Quick Links

| Feature | URL |
|---------|-----|
| **Project Home** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo |
| **SQL Editor** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/sql |
| **Table Editor** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/editor |
| **API Settings** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/settings/api |
| **Database Logs** | https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo/logs/database |

## 🔍 Troubleshooting

### "Missing Supabase environment variables"
- Make sure `.env.local` exists and has both variables
- Restart the dev server after editing `.env.local`

### API returning 500 errors
- Check the database schema was run successfully
- Look at Database Logs in Supabase dashboard
- Verify your anon key is correct

### Data not appearing
- Open Table Editor to verify data was seeded
- Check browser console for errors
- Ensure images exist in `public/images/`

## 🎯 What You Get After Setup

1. **Persistent Booking Storage**
   - All booking requests saved to Supabase
   - Viewable in Table Editor
   - Queryable via API

2. **Dynamic Gallery Data**
   - 18 gallery images stored in database
   - Easy to update via Supabase dashboard
   - No code changes needed

3. **Journal Management**
   - 6 journal entries in database
   - Add/edit entries via SQL Editor or Table Editor
   - Tags and dates queryable

4. **Real-time Updates**
   - Changes in Supabase reflect on website
   - No redeployment needed for content updates

## 📝 Next Steps

Once connected, you can:

1. **Add more images** to gallery:
   ```sql
   INSERT INTO gallery_images (series, series_name_cn, image_url, alt_text, caption, display_order)
   VALUES ('New Series', '新系列', '/images/new-image.png', 'Description', 'Caption', 1);
   ```

2. **Add journal entries**:
   ```sql
   INSERT INTO journal_entries (title, content, date, tags, image_url, image_alt)
   VALUES ('New Entry', 'Content here...', '2025-01-20', ARRAY['Life'], '/images/journal-7.png', 'Description');
   ```

3. **View bookings** in Table Editor

4. **Export data** anytime from Supabase

## Need Help?

- [Supabase Docs](https://supabase.com/docs)
- [Project Dashboard](https://supabase.com/dashboard/project/mgdpbgguxinwmkwotdbo)
- Check the `SUPABASE_SETUP.md` file for detailed instructions
