#!/bin/bash

# MonoGlass Gallery - Supabase Setup Script
# This script helps you connect your project to Supabase

echo "========================================="
echo "MonoGlass Gallery - Supabase Setup"
echo "========================================="
echo ""

# Project reference from URL
PROJECT_REF="mgdpbgguxinwmkwotdbo"
PROJECT_URL="https://${PROJECT_REF}.supabase.co"

echo "Your Supabase Project URL: $PROJECT_URL"
echo "Project Reference: $PROJECT_REF"
echo ""
echo "========================================="
echo "STEP 1: Get Your Anon Key"
echo "========================================="
echo ""
echo "1. Open this URL in your browser:"
echo "   https://supabase.com/dashboard/project/${PROJECT_REF}/settings/api"
echo ""
echo "2. Scroll down to 'Project API Keys'"
echo "3. Copy the 'anon public' key (it starts with 'eyJ...')"
echo ""
read -p "Paste your anon key here: " ANON_KEY

# Update .env.local file
cat > .env.local << EOF
# Supabase Configuration for MonoGlass Gallery
# Project: ${PROJECT_REF}

NEXT_PUBLIC_SUPABASE_URL=${PROJECT_URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${ANON_KEY}
EOF

echo ""
echo "✓ Environment variables saved to .env.local"
echo ""
echo "========================================="
echo "STEP 2: Run Database Schema"
echo "========================================="
echo ""
echo "1. Open this URL in your browser:"
echo "   https://supabase.com/dashboard/project/${PROJECT_REF}/sql"
echo ""
echo "2. Copy the contents of 'supabase-schema.sql' from this project"
echo "3. Paste it into the SQL Editor"
echo "4. Click 'Run' (or press Ctrl+Enter)"
echo ""
read -p "Have you run the database schema? (y/n): " SCHEMA_DONE

if [ "$SCHEMA_DONE" = "y" ]; then
    echo ""
    echo "✓ Database schema created"
else
    echo ""
    echo "⚠ Please complete step 2 before continuing"
    exit 1
fi

echo ""
echo "========================================="
echo "✓ Setup Complete!"
echo "========================================="
echo ""
echo "Your MonoGlass Gallery is now connected to Supabase!"
echo ""
echo "Next steps:"
echo "1. Restart your dev server: bun run dev"
echo "2. Visit the website in the Preview Panel"
echo "3. Try submitting a booking request"
echo ""
echo "Your data will now be saved to Supabase!"
echo ""
