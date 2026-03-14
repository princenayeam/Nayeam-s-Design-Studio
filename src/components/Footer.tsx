'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-foreground text-lg mb-2">Nayeam's Design Studio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Design is intelligence made visible. Creating experiences that inspire and delight.
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-medium text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#galleries" className="hover:text-foreground transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-foreground transition-colors">Journal</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-foreground transition-colors">Book a Session</a>
              </li>
            </ul>
          </motion.div>

          {/* Right: Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-medium text-foreground mb-3">Connect</h4>
            <div className="flex items-center space-x-4">
              <motion.a
                href="mailto:hello@nayeams.studio"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-glass-hover transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/princenayeam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-glass-hover transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-glass-hover transition-all"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground"
        >
          <p>© 2025 Nayeam's Design Studio. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> by Nayeam
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
