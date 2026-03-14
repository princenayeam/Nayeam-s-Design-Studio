'use client';

import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight, Camera, Play, Calendar, Mail, CheckCircle, Loader2,
  Award, Heart, Sparkles, ChevronRight,
  Instagram, Twitter, Linkedin, ArrowUpRight, Zap, Layers,
  Share2, Plus, X, Map, Clock, Copy, Github
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function HomePage() {
  const [activeLightbox, setActiveLightbox] = useState<{ image: any; index: number; series: string } | null>(null);
  const [activeJournal, setActiveJournal] = useState<number | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Data from backend
  const [galleryData, setGalleryData] = useState<any>(null);
  const [journalData, setJournalData] = useState<any[]>([]);
  const [recentBookings, setRecentBookings] = useState<any[]>([]);

  // Auto-setup on component mount
  useEffect(() => {
    const checkAndRunSetup = async () => {
      try {
        const statusRes = await fetch('/api/setup/status');
        const statusData = await statusRes.json();
        
        if (statusData.success && statusData.needsSetup) {
          console.log('Running automatic database setup...');
          const setupRes = await fetch('/api/setup');
          const setupData = await setupRes.json();
          
          if (setupData.success) {
            console.log('Auto-setup completed:', setupData.results);
            toast({
              title: 'Database Configured',
              description: `Updated ${setupData.results.updatedCount} items to English automatically.`,
            });
          }
        }
      } catch (error) {
        console.log('Auto-setup check failed, continuing with data fetch');
      }
    };

    const fetchData = async () => {
      const [galleryRes, journalRes, bookingsRes] = await Promise.all([
        fetch('/api/gallery').then(res => res.json()),
        fetch('/api/journal').then(res => res.json()),
        fetch('/api/bookings?limit=1').then(res => res.json()),
      ]);

      if (galleryRes.success) {
        const galleryObj = galleryRes.data.reduce((acc: any, series: any) => {
          acc[series.name] = {
            description: series.description,
            images: series.images,
          };
          return acc;
        }, {});
        setGalleryData(galleryObj);
      }
      if (journalRes.success) {
        setJournalData(journalRes.data);
      }
      if (bookingsRes.success) {
        setRecentBookings(bookingsRes.data);
      }
      setLoading(false);
    };

    checkAndRunSetup().then(() => fetchData()).catch(() => {
      setLoading(false);
      toast({
        title: 'Warning',
        description: 'Using fallback data. Backend connection failed.',
        variant: 'destructive',
      });
    });
  }, []);

  // Fallback data
  const fallbackGallerySeries = {
    'Horizon City': {
      description: 'City of Horizons',
      images: [
        { src: '/images/horizon-city-1.png', alt: 'Urban cityscape at golden hour', caption: 'Gentle silhouette of city skyline at dusk' },
        { src: '/images/horizon-city-2.png', alt: 'Contemporary building facade', caption: 'Poetry of light and shadow on modern architecture' },
        { src: '/images/horizon-city-3.png', alt: 'City street view', caption: 'Architectural rhythm in quiet streets' },
        { src: '/images/horizon-city-4.png', alt: 'Skyscraper vertical shot', caption: 'Geometric aesthetics looking up at glass towers' },
        { src: '/images/horizon-city-5.png', alt: 'Urban rooftop view', caption: 'Composed view from city rooftops' },
        { src: '/images/horizon-city-6.png', alt: 'City window reflection', caption: 'Urban dreams reflected in window frames' },
      ]
    },
    'Soft Wind': {
      description: 'Gentle Breeze',
      images: [
        { src: '/images/soft-wind-1.png', alt: 'Soft wind through grass field', caption: 'Gentle ripples of breeze across the meadow' },
        { src: '/images/soft-wind-2.png', alt: 'Tree branches swaying', caption: 'Light dancing steps of wind among branches' },
        { src: '/images/soft-wind-3.png', alt: 'Curtains blowing in wind', caption: 'Elegant posture of curtains dancing with wind' },
        { src: '/images/soft-wind-4.png', alt: 'Dandelion seeds floating', caption: 'Aerial journey of dandelion seeds' },
        { src: '/images/soft-wind-5.png', alt: 'Wheat field bending', caption: 'Expressive brushstrokes of wind in wheat fields' },
        { src: '/images/soft-wind-6.png', alt: 'Fabric scarf flowing', caption: 'Soft flowing lines of silk in the wind' },
      ]
    },
    'Quiet Lake': {
      description: 'Serene Waters',
      images: [
        { src: '/images/quiet-lake-1.png', alt: 'Serene lake at dawn', caption: 'Peaceful reflection on lake surface at dawn' },
        { src: '/images/quiet-lake-2.png', alt: 'Calm lake surface', caption: 'Poetry of light in the ripples' },
        { src: '/images/quiet-lake-3.png', alt: 'Lakeside dock reflection', caption: 'Quiet beauty of dock reflections' },
        { src: '/images/quiet-lake-4.png', alt: 'Water lily on lake', caption: 'Serene moment of water lily blooming' },
        { src: '/images/quiet-lake-5.png', alt: 'Mountain reflected in lake', caption: 'Magnificent painting of mountain and lake' },
        { src: '/images/quiet-lake-6.png', alt: 'Still water surface', caption: 'Ethereal Zen of still water' },
      ]
    }
  };

  const fallbackJournalEntries = [
    {
      title: 'First Light of Morning',
      date: '2025-01-15',
      tags: ['Light', 'Daily'],
      image: '/images/journal-1.png',
      imageAlt: 'Morning coffee scene',
      content: 'The morning light is exceptionally gentle, spilling through the gaps in curtains onto the desk. The coffee cup steams, and time seems to stand still in this moment. I think this is the meaning of photography—to capture those fleeting moments of beauty.'
    },
    {
      title: 'Time on the Bookshelf',
      date: '2025-01-12',
      tags: ['Architecture', 'Life'],
      image: '/images/journal-2.png',
      imageAlt: 'Books on shelf',
      content: 'While organizing the bookshelf, I found old photographs—those frozen moments remain vivid. Every book is a journey, every photo is a story. We grow through reading and remember through recording.'
    },
    {
      title: 'The Weight of a Camera',
      date: '2025-01-10',
      tags: ['Photography', 'Passion'],
      image: '/images/journal-3.png',
      imageAlt: 'Hand holding camera',
      content: 'The camera in hand is not just a tool, but an eye for observing the world. Each shutter press is a choice—choosing what enters the frame, choosing what to keep. This weight of choice is precisely the photographer\'s mission.'
    },
    {
      title: 'Order on the Desktop',
      date: '2025-01-08',
      tags: ['Life', 'Minimalism'],
      image: '/images/journal-4.png',
      imageAlt: 'Minimalist desk setup',
      content: 'Minimalist life aesthetics start with a clean desk. Everything in its place, each item useful. Photography is the same—subtract the superfluous, leave only the most essential expression.'
    },
    {
      title: 'The City Outside the Window',
      date: '2025-01-05',
      tags: ['Architecture', 'Travel'],
      image: '/images/journal-5.png',
      imageAlt: 'Looking through window',
      content: 'Looking down from the high building, the city unfolds like a chessboard. Everyone is a chess piece, yet each writes their own story. Photography taught me to look down from above, and also to gaze closely.'
    },
    {
      title: 'The Ritual of Tea',
      date: '2025-01-03',
      tags: ['Life', 'Ritual'],
      image: '/images/journal-6.png',
      imageAlt: 'Evening tea ritual',
      content: 'The ritual of tea lies in the focus of every movement. Water temperature, time, the amount of tea leaves—all are variables. Photography is the same: light, composition, timing, each essential.'
    }
  ];

  const gallerySeries = galleryData || fallbackGallerySeries;
  const journalEntries = journalData.length > 0 ? journalData : fallbackJournalEntries;

  // Stats for bento grid
  const stats = [
    { value: '150+', label: 'Projects Completed', icon: Camera },
    { value: '50K+', label: 'Photos Captured', icon: Sparkles },
    { value: '8+', label: 'Years Experience', icon: Award },
    { value: '98%', label: 'Client Satisfaction', icon: Heart },
  ];

  // Services
  const services = [
    { title: 'Portrait Photography', description: 'Professional headshots, editorial portraits, and lifestyle photography', icon: Camera },
    { title: 'Architecture', description: 'Building interiors, exteriors, and architectural details', icon: Layers },
    { title: 'Travel Documentation', description: 'Destination photography and travel storytelling', icon: Map },
    { title: 'Event Coverage', description: 'Corporate events, weddings, and special occasions', icon: Calendar },
  ];

  const timeSlots = [
    'Mon - Fri: 9:00 - 18:00',
    'Sat: 10:00 - 16:00',
    'Sun: Closed'
  ];

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const booking = {
      name: formData.get('name'),
      email: formData.get('email'),
      shootType: formData.get('shootType'),
      budget: formData.get('budget'),
      notes: formData.get('notes'),
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking');
      }

      setBookingSubmitted(true);
      toast({
        title: 'Booking Request Sent',
        description: 'Thank you! We will contact you within 24 hours.',
      });

      const bookingsRes = await fetch('/api/bookings?limit=1');
      const bookingsData = await bookingsRes.json();
      if (bookingsData.success) {
        setRecentBookings(bookingsData.data);
      }

      setTimeout(() => {
        setBookingSubmitted(false);
        e.currentTarget.reset();
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to submit booking',
        variant: 'destructive',
      });
    }
  };

  const copyQuote = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Quote Copied',
      description: 'The text has been copied to your clipboard.',
    });
  };

  // Get flat array of all gallery images for carousel
  const allGalleryImages = Object.entries(gallerySeries).flatMap(([seriesName, series]: [string, any]) =>
    series.images.map((img: any, idx: number) => ({ ...img, series: seriesName, originalIndex: idx }))
  );

  // Get current lightbox image and navigate
  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!activeLightbox) return;
    
    const flatImages = Object.entries(gallerySeries).flatMap(([seriesName, series]: [string, any]) =>
      series.images.map((img: any, idx: number) => ({ ...img, series: seriesName, originalIndex: idx }))
    );
    
    const currentIndex = flatImages.findIndex(img => img.src === activeLightbox.image.src);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % flatImages.length
      : (currentIndex - 1 + flatImages.length) % flatImages.length;
    
    setActiveLightbox({ image: flatImages[newIndex], index: newIndex, series: flatImages[newIndex].series });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream-50 via-background to-warm-gray-50/30">
      <Navigation />

      {/* ======================================== */}
      {/* HERO SECTION WITH KINETIC TYPOGRAPHY */}
      {/* ======================================== */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 md:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-50/80 via-background to-warm-gray-50/60" />
          <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`
            }}
          />
          <div className="absolute top-0 left-0 w-96 h-96 bg-cream-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-gray-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Text with Kinetic Typography */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.h1 
                  className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1] tracking-tight"
                  style={{
                    scaleY: useSpring(1, { stiffness: 100, damping: 15 }),
                    scaleX: useSpring(1, { stiffness: 100, damping:15 })
                  }}
                >
                  Nayeam's
                  <br />
                  <motion.span 
                    className="block text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Design Studio
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Photography is like a room, light determines the narrative. We capture moments that transcend time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center space-x-3 sm:space-x-4"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-card flex items-center justify-center shadow-glass flex-shrink-0">
                  <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-base sm:text-lg">Nayeam</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Designer & Creative Director</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <motion.a
                  href="#galleries"
                  whileHover={{ x: 8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" size="lg" className="glass-card hover:shadow-xl transition-all duration-200 hover:-translate-y-1 bg-white/70 backdrop-blur-md border-0 px-6 py-4 sm:px-8 sm:py-6 rounded-full h-auto group w-full sm:w-auto">
                    <span className="font-medium text-sm sm:text-base">Explore Galleries</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </Button>
                </motion.a>
                <motion.a
                  href="#booking"
                  whileHover={{ x: 8, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 px-6 py-4 sm:px-8 sm:py-6 rounded-full h-auto w-full sm:w-auto">
                    <span className="font-medium text-sm sm:text-base">Book a Session</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Featured Image with Enhanced Glass Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl glass-card-2 shadow-glass">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: "easeOutCirc" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/hero-featured.png"
                    alt="Today's featured photography"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-card-2 inline-block px-4 py-2 rounded-2xl backdrop-blur-sm">
                    <p className="text-white/90 text-xs font-medium tracking-wide uppercase">Today's Featured</p>
                    <p className="text-white text-sm mt-1">Glass and Light Interplay</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-20, 0, -20],
                  rotate: [-5, 0, -5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden sm:flex absolute -right-4 sm:-right-8 top-1/4 w-16 h-16 sm:w-20 sm:h-20 glass-card-2 rounded-2xl items-center justify-center shadow-glass"
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* BENTO GRID STATS SECTION */}
      {/* ======================================== */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">Our Impact</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Numbers that tell our story of visual excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border-0">
                  <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br from-cream-100 to-warm-gray-100 flex items-center justify-center shadow-sm"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                    </motion.div>
                    <motion.div
                      className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-1.5 sm:mb-2 tabular-nums"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* SERVICES BENTO GRID */}
      {/* ======================================== */}
      <section className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">What We Offer</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Professional photography services tailored to your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Large card - Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="md:row-span-2"
            >
              <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full cursor-pointer group border-0">
                <CardHeader className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-cream-100 to-warm-gray-100 flex items-center justify-center shadow-sm">
                    <Camera className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
                  </div>
                  <CardTitle className="font-serif text-xl sm:text-2xl mb-2 sm:mb-3">Portrait Photography</CardTitle>
                  <CardDescription className="leading-relaxed text-sm sm:text-base">
                    Professional headshots, editorial portraits, and lifestyle photography that capture your authentic self.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-cream-100 text-foreground hover:bg-cream-200 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-1.5">Headshots</Badge>
                    <Badge variant="secondary" className="bg-warm-gray-100 text-foreground hover:bg-warm-gray-200 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-1.5">Editorial</Badge>
                  </div>
                </CardContent>
                <motion.div
                  className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border px-6 sm:px-8 pb-6 sm:pb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2">Starting from ¥3,000</p>
                  <div className="flex items-center text-foreground font-medium text-sm sm:text-base">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full cursor-pointer group border-0">
                <CardHeader className="p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br from-cream-100 to-warm-gray-100 flex items-center justify-center shadow-sm">
                    <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                  </div>
                  <CardTitle className="font-serif text-lg sm:text-xl mb-1.5 sm:mb-2">Architecture</CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    Building interiors, exteriors, and architectural details.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Travel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full cursor-pointer group border-0">
                <CardHeader className="p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br from-cream-100 to-warm-gray-100 flex items-center justify-center shadow-sm">
                    <Map className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                  </div>
                  <CardTitle className="font-serif text-lg sm:text-xl mb-1.5 sm:mb-2">Travel Docs</CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    Destination photography and travel storytelling.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full cursor-pointer group border-0">
                <CardHeader className="p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br from-cream-100 to-warm-gray-100 flex items-center justify-center shadow-sm">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                  </div>
                  <CardTitle className="font-serif text-lg sm:text-xl mb-1.5 sm:mb-2">Events</CardTitle>
                  <CardDescription className="text-xs sm:text-sm leading-relaxed">
                    Corporate events, weddings, and special occasions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Large card - Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -4 }}
              className="md:col-span-2"
            >
              <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full cursor-pointer group border-0">
                <CardHeader className="p-6 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cream-100 to-warm-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-xl sm:text-2xl mb-1.5 sm:mb-2">Our Philosophy</CardTitle>
                      <CardDescription className="leading-relaxed text-sm sm:text-base">
                        We believe every photograph should evoke emotion and tell a story. Our approach combines technical precision with artistic vision, creating images that are not just seen, but felt.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 'auto' }}
                  viewport={{ once: true }}
                  className="pt-3 sm:pt-4 border-t border-border px-6 sm:px-8 pb-6 sm:pb-8"
                >
                  <p className="text-xs sm:text-sm text-muted-foreground italic">
                    "Photography is the story I fail to put into words."
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* INFINITE CAROUSEL - FEATURED WORKS */}
      {/* ======================================== */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-gradient-to-b from-background via-cream-50/30 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">Featured Works</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              A curated selection of our finest photography
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: ['0%', '-50%']
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              style={{ width: 'max-content' }}
            >
              {allGalleryImages.map((image, idx) => (
                <motion.div
                  key={`${image.series}-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveLightbox({ image, index: idx, series: image.series })}
                  className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white/90 text-xs font-medium mb-1">{image.series}</p>
                      <p className="text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* GALLERIES SECTION - ENHANCED */}
      {/* ======================================== */}
      <section id="galleries" className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">Portfolio</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              A collection of visual stories, each project exploring creativity, design, and innovation
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            Object.entries(gallerySeries).map(([seriesName, series]: [string, any], seriesIndex: number) => (
              <motion.div
                key={seriesName}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: seriesIndex * 0.2 }}
                className="mb-24 last:mb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-0 mb-6 sm:mb-8 border-b border-border pb-3 sm:pb-4">
                  <div className="text-center sm:text-left">
                    <motion.h3 
                      className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-1.5 sm:mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      {seriesName}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground text-sm sm:text-base md:text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, delay: 0.1 }}
                    >
                      {series.description}
                    </motion.p>
                  </div>
                  <motion.div 
                    className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, delay: 0.2 }}
                  >
                    <span>{series.images.length} works</span>
                    <span>•</span>
                    <span>View Series</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                  {/* Mobile work count display */}
                  <motion.div 
                    className="md:hidden text-xs text-muted-foreground text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, delay: 0.2 }}
                  >
                    {series.images.length} works
                  </motion.div>
                </div>

                {/* Staggered Grid with Enhanced Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {series.images.map((image: any, imageIndex: number) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                      className={`group relative overflow-hidden rounded-3xl glass-card-2 cursor-pointer ${
                        imageIndex % 3 === 0 ? 'md:row-span-2' : ''
                      }`}
                      onClick={() => setActiveLightbox({ image, index: imageIndex, series: seriesName })}
                      whileHover={{ y: -8 }}
                    >
                      <div className={`${imageIndex % 3 === 0 ? 'aspect-square md:aspect-[3/4]' : 'aspect-square md:aspect-[4/3]'} relative`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white/90 text-xs sm:text-sm font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* ======================================== */}
      {/* JOURNAL SECTION - ENHANCED */}
      {/* ======================================== */}
      <section id="journal" className="py-16 sm:py-20 px-4 md:px-8 bg-gradient-to-b from-background via-warm-gray-50/20 to-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">Journal</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Daily thoughts and moments captured through the lens
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="space-y-6">
              {journalEntries.map((entry: any, index: number) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-2 rounded-3xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveJournal(activeJournal === index ? null : index)}
                    className="w-full text-left p-5 sm:p-6 md:p-8 group"
                  >
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                      {/* Image with hover effect */}
                      <div className="w-full md:w-52 aspect-[4/3] md:aspect-[3/4] rounded-2xl overflow-hidden flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={entry.image}
                            alt={entry.imageAlt}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2 sm:space-y-3">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <motion.h3 
                            className="font-serif text-lg sm:text-xl md:text-2xl text-foreground"
                            whileHover={{ x: 4 }}
                          >
                            {entry.title}
                          </motion.h3>
                          <span className="font-mono text-xs text-muted-foreground tabular-nums bg-cream-100 px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg">
                            {entry.date}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full glass-card-2 text-xs text-muted-foreground hover:text-foreground transition-colors border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <motion.p
                          initial={false}
                          animate={{
                            display: activeJournal === index ? 'block' : '-webkit-box',
                            WebkitLineClamp: activeJournal === index ? 'unset' : 'line-clamp-2 sm:line-clamp-3',
                            WebkitBoxOrient: activeJournal === index ? 'unset' : 'vertical',
                            overflow: activeJournal === index ? 'visible' : 'hidden',
                          }}
                          className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                        >
                          {entry.content}
                        </motion.p>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Actions */}
                  <AnimatePresence>
                    {activeJournal === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8"
                      >
                        <button
                          onClick={() => copyQuote(entry.content)}
                          className="flex items-center space-x-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full glass-card-2 hover:bg-white/80 border border-border text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-all"
                          whileHover={{ x: 4 }}
                        >
                          <span>Copy Quote</span>
                          <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ======================================== */}
      {/* BOOK A SESSION SECTION - ENHANCED */}
      {/* ======================================== */}
      <section id="booking" className="py-16 sm:py-20 px-4 md:px-8 bg-gradient-to-b from-background via-cream-50/30 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">Book a Session</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Let's create something beautiful together. Share your vision and we'll make it happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 border-0 h-full">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  {bookingSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </div>
                      <h3 className="font-serif text-2xl text-foreground mb-2">Request Sent!</h3>
                      <p className="text-muted-foreground">Thank you for your inquiry. We'll contact you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-border focus:ring-2 focus:ring-foreground/30"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-border focus:ring-2 focus:ring-foreground/30"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="shootType">Shoot Type</Label>
                          <Select name="shootType">
                            <SelectTrigger className="px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-border focus:ring-2 focus:ring-foreground/30">
                              <SelectValue placeholder="Select shoot type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Portrait">Portrait</SelectItem>
                              <SelectItem value="Architecture">Architecture</SelectItem>
                              <SelectItem value="Travel">Travel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select name="budget">
                            <SelectTrigger className="px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-border focus:ring-2 focus:ring-foreground/30">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2k-5k">¥2,000 - ¥5,000</SelectItem>
                              <SelectItem value="5k-10k">¥5,000 - ¥10,000</SelectItem>
                              <SelectItem value="10k-15k">¥10,000 - ¥15,000</SelectItem>
                              <SelectItem value="15k-20k">¥15,000 - ¥20,000</SelectItem>
                              <SelectItem value="20k+">¥20,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">
                          Notes <span className="text-red-500">*</span>
                        </Label>
                        <textarea
                          id="notes"
                          name="notes"
                          required
                          minLength={10}
                          rows={4}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-border focus:outline-none focus:ring-2 focus:ring-foreground/30 transition-all resize-none"
                          placeholder="Tell me about your vision, location preferences, and any specific requirements..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full py-4 sm:py-5 rounded-2xl bg-foreground text-background font-semibold hover:bg-foreground/90 hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-base sm:text-lg transition-all duration-200 hover:-translate-y-1"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Send Booking Request</span>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Panel with Bento Layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Social Links */}
              <motion.div
                whileHover={{ y: -4 }}
              >
                <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Share2 className="w-5 h-5" />
                      Connect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <motion.a
                      href="https://github.com/princenayeam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Play className="w-5 h-5" />
                      <span>Behance</span>
                    </motion.a>
                    <motion.a
                      href="mailto:hello@nayeams.studio"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Available Time Slots */}
              <motion.div
                whileHover={{ y: -4 }}
              >
                <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    {timeSlots.map((slot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <Clock className="w-4 h-4" />
                        <span>{slot}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Booking */}
              <motion.div
                whileHover={{ y: -4 }}
              >
                <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Most Recent
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {recentBookings.length > 0 ? (
                      <div className="space-y-2 text-sm">
                        <p className="font-medium text-foreground">{recentBookings[0].name}</p>
                        <p className="text-muted-foreground text-xs">{recentBookings[0].email}</p>
                        <p className="text-muted-foreground text-xs">
                          {recentBookings[0].shoot_type} · {recentBookings[0].budget}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No recent bookings</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                whileHover={{ y: -4 }}
              >
                <Card className="glass-card-2 shadow-lg hover:shadow-xl transition-all duration-200 border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span>Projects this month:</span>
                      <span className="font-medium text-foreground">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Response time:</span>
                      <span className="font-medium text-foreground">&lt; 24h</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* CTA SECTION */}
      {/* ======================================== */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-gradient-to-b from-warm-gray-50/20 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card-2 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's work together to capture your most precious moments with artistic vision and technical excellence.
            </p>
            <motion.a
              href="#booking"
              className="inline-flex items-center justify-center space-x-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-foreground text-background font-semibold hover:shadow-glass-hover transition-all text-base sm:text-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ======================================== */}
      {/* LIGHTBOX */}
      {/* ======================================== */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
            onClick={() => setActiveLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[85vh] sm:max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50">
                <Image
                  src={activeLightbox.image.src}
                  alt={activeLightbox.image.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-serif text-xl sm:text-2xl mb-1.5 sm:mb-2">{activeLightbox.image.alt}</h4>
                <p className="text-white/90 text-xs sm:text-sm">{activeLightbox.image.caption}</p>
                <p className="text-white/60 text-[10px] sm:text-xs mt-1.5 sm:mt-2 font-mono tabular-nums">
                  {activeLightbox.series} · {activeLightbox.index + 1} / {allGalleryImages.length}
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <button
              className="absolute top-3 sm:top-4 right-3 sm:right-4 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              onClick={() => setActiveLightbox(null)}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
