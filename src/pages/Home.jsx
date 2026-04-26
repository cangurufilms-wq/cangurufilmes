import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, MessageCircle } from 'lucide-react';
import VideoCarousel from '@/components/VideoCarousel';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Canguru Filmes - Audiovisual, Fotografia e Marketing Digital</title>
        <meta
          name="description"
          content="Audiovisual ágil, estética precisa. Vídeos, fotografia e campanhas que performam e impressionam."
        />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center"
          >
            <img
              src="https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/cangurufilms-gmail.com-g9SO4.png"
              alt="Canguru Filmes Logo"
              className="w-full h-auto max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,140,0,0.3)]"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat text-white mb-8 leading-tight opacity-90">
                Audiovisual ágil,{' '}
                <span className="text-[#FF8C00]">estética precisa</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF8C00] hover:bg-[#cc7000] text-white text-base px-8 py-6 h-auto"
                >
                  <Link to="/portfolio" className="flex items-center gap-2">
                    <Play className="w-5 h-5 fill-current" />
                    <span>Ver Portfólio</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white text-base px-8 py-6 h-auto transition-all"
                >
                  <a
                    href="https://wa.me/5571993246708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <VideoCarousel />

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-6">
              Por que escolher a Canguru Filmes?
            </h2>
            <p className="text-lg text-gray-300">
              Combinamos criatividade, estratégia e execução impecável para entregar resultados que superam expectativas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Estética Impecável',
                description: 'Cada frame é pensado para impressionar e comunicar com precisão visual.',
              },
              {
                title: 'Eficiência Comprovada',
                description: 'Processos ágeis que entregam qualidade sem comprometer prazos.',
              },
              {
                title: 'Estratégia que Performa',
                description: 'Conteúdo que não apenas encanta, mas gera resultados mensuráveis.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111111] p-10 rounded-2xl border border-gray-800 hover:border-[#FF8C00] transition-all group"
              >
                <div className="w-14 h-14 bg-[#FF8C00]/10 border border-[#FF8C00]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF8C00] transition-colors duration-300">
                  <span className="text-[#FF8C00] group-hover:text-white text-2xl font-bold font-montserrat">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;