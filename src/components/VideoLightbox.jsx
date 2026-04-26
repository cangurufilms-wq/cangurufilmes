import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoLightbox = ({ video, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!video) return null;

  const isShort = video.type === 'short';
  const isVimeo = video.platform === 'vimeo';

  const lightboxClass = isShort
    ? 'relative w-full max-w-sm aspect-[9/16]'
    : 'relative w-full max-w-5xl aspect-video';

  const embedSrc = isVimeo
    ? `https://player.vimeo.com/video/${video.id}?autoplay=1&title=0&byline=0&portrait=0`
    : `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&autoplay=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={lightboxClass}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-[#FF6A00] hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </Button>

            <iframe
              src={embedSrc}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLightbox;