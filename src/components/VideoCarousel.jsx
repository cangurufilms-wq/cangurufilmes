import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const videoItems = [
  { id: 'I79qYkKU7DA', title: 'Convenção Botocenter' },
  { id: 'wDwKzhJTKFI', title: 'Barbearia' },
  { id: '91Px_gPAmsI', title: 'Botocenter Campanha' },
  { id: 'lW1LClqQECA', title: 'Personal Trainer' },
  { id: '9AuGv7XOLA0', title: 'Carol Lisboa Fashion' },
  { id: 'gImWz5k6w5M', title: 'Loja FRIDA' },
  { id: 'HU5cHT_QLfY', title: 'Thereza Priore' },
];

const VideoCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev === videoItems.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const getVisibleIndices = () => {
    const len = videoItems.length;
    const prev = (index - 1 + len) % len;
    const next = (index + 1) % len;
    return [prev, index, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#111111]">
            Nossos Destaques
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Uma amostra do nosso trabalho em movimento.
          </p>
        </motion.div>
        <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false}>
            {visibleIndices.map((itemIndex, i) => {
              const item = videoItems[itemIndex];
              const isCenter = i === 1;

              return (
                <motion.div
                  key={item.id + itemIndex}
                  className="absolute"
                  initial={{
                    x: i === 0 ? '-100%' : i === 2 ? '100%' : 0,
                    scale: isCenter ? 1 : 0.7,
                    opacity: isCenter ? 1 : 0.5,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  animate={{
                    x: i === 0 ? '-70%' : i === 2 ? '70%' : 0,
                    scale: isCenter ? 1.2 : 0.7,
                    opacity: isCenter ? 1 : 0.4,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  exit={{
                    x: i === 0 ? '-150%' : i === 2 ? '150%' : 0,
                    opacity: 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <Link to="/portfolio" className="group relative w-[250px] h-[140px] md:w-[400px] md:h-[225px] rounded-xl overflow-hidden shadow-lg block cursor-pointer">
                    <img
                      src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    {isCenter && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-bold text-lg font-montserrat">{item.title}</h3>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;