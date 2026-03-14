'use client';

import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight, Camera, Play, Calendar, Mail, CheckCircle, Loader2,
  Award, Heart, Sparkles, ChevronRight,
  Instagram, Twitter, Linkedin, ArrowUpRight, Zap, Layers,
  Share2, Plus, X, Map, Clock, Copy, Github,
  Users, Lightbulb, Workflow, Trophy, ChevronDown, ChevronUp
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

  // FAQ and Newsletter state
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Data from backend
  const [galleryData, setGalleryData] = useState<any>(null);
  const [journalData, setJournalData] = useState<any[]>([]);
  const [recentBookings, setRecentBookings] = useState<any[]>([]);

  // Spring animations for kinetic typography (must be at top level)
  const scaleY = useSpring(1, { stiffness: 100, damping: 15 });
  const scaleX = useSpring(1, { stiffness: 100, damping: 15 });

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
    { value: '150+', label: 'Projects', icon: Camera },
    { value: '50K+', label: 'Photos', icon: Sparkles },
    { value: '8+', label: 'Years', icon: Award },
    { value: '98%', label: 'Satisfaction', icon: Heart },
  ];

  // Services
  const services = [
    { title: 'Portrait', description: 'Headshots & lifestyle', icon: Camera },
    { title: 'Architecture', description: 'Interiors & exteriors', icon: Layers },
    { title: 'Travel', description: 'Storytelling', icon: Map },
    { title: 'Events', description: 'Special occasions', icon: Calendar },
  ];

  const timeSlots = [
    'Mon - Fri: 9:00 - 18:00',
    'Sat: 10:00 - 16:00',
    'Sun: Closed'
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What types of photography do you specialize in?",
      answer: "We specialize in portrait photography, architectural photography, travel documentation, and event coverage. Each service is tailored to capture the unique essence of your vision."
    },
    {
      question: "How long does a typical photo session last?",
      answer: "Session lengths vary by project type. Portrait sessions typically last 1-2 hours, while event coverage can range from 4-8 hours. We'll discuss the specific timeline during our initial consultation."
    },
    {
      question: "What is included in your packages?",
      answer: "Our packages include pre-shoot consultation, on-location photography, professional editing and retouching, digital files in high resolution, and a private online gallery for easy sharing and downloading."
    },
    {
      question: "How far in advance should I book a session?",
      answer: "We recommend booking at least 2-4 weeks in advance for standard sessions. For larger events or weekend bookings, 4-8 weeks advance notice is preferred to ensure availability."
    },
    {
      question: "Do you travel for shoots?",
      answer: "Yes! We love traveling for projects. Travel fees apply for locations outside our local area. We've shot across the country and internationally for destination weddings and brand campaigns."
    }
  ];

  // Awards Data
  const awards = [
    { title: 'Best Portfolio 2024', organization: 'Design Awards', year: '2024' },
    { title: 'Visual Storytelling', organization: 'Creative Excellence', year: '2023' },
    { title: 'Top 100 Photographers', organization: 'Global Photo', year: '2023' },
    { title: "Editor's Choice", organization: 'Photography Monthly', year: '2022' }
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Consultation to understand your vision and story.',
      icon: Lightbulb
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed plan with locations and creative direction.',
      icon: Workflow
    },
    {
      step: '03',
      title: 'Creation',
      description: 'Capturing images with precision and artistry.',
      icon: Camera
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Professionally edited images in a private gallery.',
      icon: Sparkles
    }
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

  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast({
        title: 'Email Required',
        description: 'Please enter your email address.',
        variant: 'destructive',
      });
      return;
    }
    setNewsletterSubscribed(true);
    toast({
      title: 'Successfully Subscribed!',
      description: 'Thank you for subscribing to our newsletter.',
    });
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 3000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-stone-50 via-background to-stone-50/50">
      <Navigation />

      {/* ======================================== */}
      {/* HERO SECTION - REFINED */}
      {/* ======================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-16 px-4 md:px-8 overflow-hidden">
        {/* Animated Background - Subtler */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-background to-stone-100/50" />
          <div className="absolute top-20 left-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.h1
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] tracking-tight"
                  style={{ scaleY, scaleX }}
                >
                  Nayeam
                  <br />
                  <motion.span
                    className="block text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-normal tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Design Studio
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Photography is like a room—light determines the narrative. We capture moments that transcend time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center border border-stone-200/50"
                >
                  <Camera className="w-7 h-7 text-foreground" />
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">Nayeam</p>
                  <p className="text-sm text-muted-foreground/80">Designer & Creative Director</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <motion.a
                  href="#galleries"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/70 backdrop-blur-sm border-stone-200/50 hover:bg-white hover:shadow-md rounded-full px-8 py-3 text-sm sm:text-base font-medium transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.a>
                <motion.a
                  href="#booking"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg rounded-full px-8 py-3 text-sm sm:text-base font-medium transition-all">
                    Book Session
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl bg-stone-100 shadow-2xl shadow-stone-200/50">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/hero-featured.png"
                    alt="Featured photography"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl inline-block shadow-sm">
                    <p className="text-foreground/70 text-xs font-medium tracking-wider uppercase mb-0.5">Featured</p>
                    <p className="text-foreground text-sm font-medium">Glass & Light</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* STATS SECTION - COMPACT */}
      {/* ======================================== */}
      <section className="py-12 px-4 md:px-8 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-stone-100 hover:bg-white hover:shadow-md transition-all">
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground/60" />
                  <motion.div
                    className="font-serif text-2xl sm:text-3xl text-foreground font-semibold tabular-nums"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-xs text-muted-foreground/80 mt-0.5 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* SERVICES - CLEAN BENTO GRID */}
      {/* ======================================== */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">Services</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base max-w-xl mx-auto">
              Professional photography tailored to your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-stone-100 hover:bg-white hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-3 group-hover:bg-stone-200 transition-colors">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg text-foreground mb-1">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* FEATURED WORKS CAROUSEL */}
      {/* ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-stone-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">Featured Works</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base max-w-xl mx-auto">
              A curated selection of our finest photography
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }
              }}
              style={{ width: 'max-content' }}
            >
              {allGalleryImages.map((image, idx) => (
                <motion.div
                  key={`${image.series}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveLightbox({ image, index: idx, series: image.series })}
                  className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white/90 text-xs font-medium mb-0.5">{image.series}</p>
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
      {/* PORTFOLIO GRID */}
      {/* ======================================== */}
      <section id="galleries" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">Portfolio</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base max-w-xl mx-auto">
              Visual stories exploring creativity and innovation
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: seriesIndex * 0.15 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-stone-200/50">
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-1">{seriesName}</h3>
                    <p className="text-sm text-muted-foreground/70">{series.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground/60">
                    <span>{series.images.length} works</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {series.images.map((image: any, imageIndex: number) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: imageIndex * 0.08 }}
                      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                        imageIndex % 3 === 0 ? 'md:row-span-2' : ''
                      }`}
                      onClick={() => setActiveLightbox({ image, index: imageIndex, series: seriesName })}
                      whileHover={{ y: -4 }}
                    >
                      <div className={`${imageIndex % 3 === 0 ? 'aspect-square md:aspect-[3/4]' : 'aspect-square md:aspect-[4/3]'} relative bg-stone-100`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white/90 text-xs font-medium">{image.caption}</p>
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
      {/* JOURNAL SECTION */}
      {/* ======================================== */}
      <section id="journal" className="py-16 px-4 md:px-8 bg-stone-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">Journal</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base">
              Daily thoughts and captured moments
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="space-y-4">
              {journalEntries.slice(0, 3).map((entry: any, index: number) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setActiveJournal(activeJournal === index ? null : index)}
                    className="w-full text-left p-5 sm:p-6 group"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                      <div className="w-full sm:w-44 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 bg-stone-100">
                        <Image
                          src={entry.image}
                          alt={entry.imageAlt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <h3 className="font-serif text-lg sm:text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                            {entry.title}
                          </h3>
                          <span className="font-mono text-xs text-muted-foreground/60 bg-stone-100 px-2.5 py-1 rounded-md">
                            {entry.date}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-stone-100/80 text-xs text-muted-foreground/80 hover:text-foreground hover:bg-stone-200/80 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <motion.p
                          initial={false}
                          animate={{
                            display: activeJournal === index ? 'block' : '-webkit-box',
                            WebkitLineClamp: activeJournal === index ? 'unset' : 'line-clamp-2',
                            WebkitBoxOrient: activeJournal === index ? 'unset' : 'vertical',
                            overflow: activeJournal === index ? 'visible' : 'hidden',
                          }}
                          className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base"
                        >
                          {entry.content}
                        </motion.p>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeJournal === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0"
                      >
                        <button
                          onClick={() => copyQuote(entry.content)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-all"
                        >
                          Copy Quote
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
      {/* BOOK A SESSION */}
      {/* ======================================== */}
      <section id="booking" className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">Book a Session</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base max-w-xl mx-auto">
              Let's create something beautiful together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-stone-100">
                {bookingSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Request Sent!</h3>
                    <p className="text-muted-foreground/80 text-sm">We'll contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm">Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="px-4 py-3 rounded-xl bg-white/80 border-stone-200 focus:ring-2 focus:ring-stone-400/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">Email <span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="px-4 py-3 rounded-xl bg-white/80 border-stone-200 focus:ring-2 focus:ring-stone-400/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="shootType" className="text-sm">Shoot Type</Label>
                        <Select name="shootType">
                          <SelectTrigger className="px-4 py-3 rounded-xl bg-white/80 border-stone-200 focus:ring-2 focus:ring-stone-400/50">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Portrait">Portrait</SelectItem>
                            <SelectItem value="Architecture">Architecture</SelectItem>
                            <SelectItem value="Travel">Travel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-sm">Budget Range</Label>
                        <Select name="budget">
                          <SelectTrigger className="px-4 py-3 rounded-xl bg-white/80 border-stone-200 focus:ring-2 focus:ring-stone-400/50">
                            <SelectValue placeholder="Select budget" />
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
                      <Label htmlFor="notes" className="text-sm">Notes <span className="text-red-500">*</span></Label>
                      <textarea
                        id="notes"
                        name="notes"
                        required
                        minLength={10}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/80 border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400/50 transition-all resize-none text-sm"
                        placeholder="Tell us about your vision..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Request
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-stone-100">
                <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Connect
                </h3>
                <div className="space-y-2">
                  <motion.a
                    href="https://github.com/princenayeam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground/80 hover:text-foreground transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="mailto:hello@nayeams.studio"
                    className="flex items-center gap-2 text-sm text-muted-foreground/80 hover:text-foreground transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </motion.a>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-stone-100">
                <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Availability
                </h3>
                <div className="space-y-2">
                  {timeSlots.map((slot, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{slot}</span>
                    </div>
                  ))}
                </div>
              </div>

              {recentBookings.length > 0 && (
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-stone-100">
                  <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Recent
                  </h3>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{recentBookings[0].name}</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">
                      {recentBookings[0].shoot_type} · {recentBookings[0].budget}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* CTA SECTION */}
      {/* ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-stone-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-lg border border-stone-100"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
              Ready to Create?
            </h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Let's work together to capture your most precious moments with artistic vision.
            </p>
            <motion.a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[85vh]"
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
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-serif text-xl sm:text-2xl mb-1">{activeLightbox.image.alt}</h4>
                <p className="text-white/90 text-sm">{activeLightbox.image.caption}</p>
                <p className="text-white/60 text-xs mt-2 font-mono tabular-nums">
                  {activeLightbox.series} · {activeLightbox.index + 1} / {allGalleryImages.length}
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <button
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setActiveLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================== */}
      {/* PROCESS SECTION */}
      {/* ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">How We Work</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base max-w-xl mx-auto">
              A streamlined approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="h-full bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-stone-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground/60 font-mono mb-2">{step.step}</p>
                  <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* AWARDS SECTION */}
      {/* ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-stone-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">Awards</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base max-w-xl mx-auto">
              Recognized for commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-stone-100 hover:shadow-md transition-all h-full">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-stone-100 flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="font-serif text-sm sm:text-base text-foreground mb-1">{award.title}</h3>
                  <p className="text-xs text-muted-foreground/70 mb-2">{award.organization}</p>
                  <Badge variant="outline" className="text-xs border-stone-200">{award.year}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* FAQ SECTION */}
      {/* ======================================== */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">FAQ</h2>
            <p className="text-muted-foreground/80 text-sm sm:text-base">
              Everything you need to know
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-stone-50/50 transition-colors"
                  >
                    <span className="font-serif text-base text-foreground pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground/60" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-4">
                          <p className="text-sm text-muted-foreground/80 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================== */}
      {/* NEWSLETTER SECTION */}
      {/* ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-stone-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 md:p-16 shadow-lg border border-stone-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-foreground text-background hover:bg-foreground/90 mb-4">Newsletter</Badge>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground/80 text-sm sm:text-base leading-relaxed mb-6">
                  Subscribe for exclusive insights, behind-the-scenes content, and early access to new projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-foreground" />
                    <span className="text-sm text-muted-foreground/80">Weekly inspiration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-foreground" />
                    <span className="text-sm text-muted-foreground/80">No spam</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {newsletterSubscribed ? (
                  <div className="bg-stone-50 rounded-2xl p-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Welcome!</h3>
                    <p className="text-sm text-muted-foreground/80">Check your inbox for a welcome message.</p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubscribe} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="newsletter-email" className="text-sm">Email</Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="you@example.com"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="px-4 py-3 rounded-xl bg-white/80 border-stone-200 focus:ring-2 focus:ring-stone-400/50"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all text-sm font-medium hover:shadow-lg"
                    >
                      Subscribe
                      <Mail className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
