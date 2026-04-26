import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Zap, Gift, Camera } from 'lucide-react';

const BlackFridayPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('seenBlackFridayPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('seenBlackFridayPopup', 'true');
      }
    }, 20000); // Changed to 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const whatsappMessage = encodeURIComponent(
    'Olá, quero aproveitar a promoção Black Friday PXL.'
  );
  const whatsappUrl = `https://wa.me/5571993246708?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6A00] to-[#D94E00]" />
            <Button
              onClick={handleClose}
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="p-8 text-center">
              <div className="mx-auto w-16 h-16 mb-4 bg-black text-white rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold font-montserrat text-black mb-2">
                BLACK FRIDAY PXL!
              </h2>
              <p className="text-gray-600 mb-6">
                Ofertas imperdíveis para impulsionar sua marca.
              </p>

              <div className="space-y-4 text-left mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-[#111111]">Pacote Audiovisual Smartphone</h3>
                  <p className="text-2xl font-bold text-[#FF6A00]">4 Vídeos por R$1000</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-[#111111]">Pacote Audiovisual Câmera Pro</h3>
                  <p className="text-2xl font-bold text-[#FF6A00]">5 Vídeos por R$1500</p>
                </div>
              </div>

              <div className="bg-orange-100 border-l-4 border-[#FF6A00] text-orange-800 p-4 rounded-r-lg mb-8 text-left flex items-center gap-4">
                <Gift className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-bold">BÔNUS DE NOVEMBRO</p>
                  <p>Na compra de qualquer pacote, ganhe 1 sessão de fotos profissional.</p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-[#FF6A00] hover:bg-[#D94E00] text-white text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Camera className="w-5 h-5 mr-2" />
                  Agende agora
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlackFridayPopup;