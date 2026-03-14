'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Aperture, BookOpen, Calendar, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/', icon: Camera },
  { name: 'Portfolio', path: '#galleries', icon: Aperture },
  { name: 'Journal', path: '#journal', icon: BookOpen },
  { name: 'Book a Session', path: '#booking', icon: Calendar },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="glass-card max-w-7xl mx-auto rounded-full px-2 py-2 shadow-glass"
      >
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-cream-200 to-warm-gray-200 border border-border flex items-center justify-center"
            >
              <Aperture className="w-4 h-4 text-foreground" />
            </motion.div>
            <span className="font-serif font-medium text-foreground hidden sm:block">
              Nayeam's
            </span>
          </Link>

          {/* Navigation Links - Film Tab Style (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname === '/' && item.path.startsWith('#'));
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative group"
                >
                  <motion.div
                    className="relative px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:bg-white/50 hover:shadow-glass-hover"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'} transition-colors`} />
                    <span className={`text-sm font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'} transition-colors`}>
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-full bg-white/70 border border-border shadow-glass"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          style={{ zIndex: -1 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-white/50">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-md">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl">Menu</SheetTitle>
                <SheetDescription>Navigate through Nayeam's Design Studio</SheetDescription>
              </SheetHeader>
              <nav className="mt-8 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path || (item.path !== '/' && pathname === '/' && item.path.startsWith('#'));
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? 'bg-foreground text-background' 
                          : 'hover:bg-white/50 text-foreground'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-background' : 'text-muted-foreground'}`} />
                      <span className={`font-medium ${isActive ? 'text-background' : 'text-foreground'}`}>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
              
              {/* Mobile Footer Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card-2 rounded-2xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    © 2025 Nayeam's Design Studio. All rights reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </nav>
  );
}
