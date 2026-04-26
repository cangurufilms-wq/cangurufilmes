import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoLightbox from '@/components/VideoLightbox';
import VimeoThumbnail from '@/components/VimeoThumbnail';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('audiovisual');

  const videoItems = [
    // Vimeo — Eventos
    { id: '1176717013', title: 'Flipo 2026 - Castro Alves', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1185518583', title: 'Flipo 2026 - Castro Alves', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1185519271', title: 'Flipo 2026 - Castro Alves', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1185520229', title: 'Festival do Grau - Castro Alves', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1185521583', title: 'Festival do Grau - Castro Alves', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1185520729', title: 'Festival do Grau - Castro Alves', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1176719279', title: 'Carnaval 2026 - Salvador', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1176720014', title: 'Festa de Vaqueiros 2025', category: 'eventos', type: 'short', platform: 'vimeo' },
    { id: '1176734759', title: 'Have - Sydney Austrália', category: 'eventos', type: 'short', platform: 'vimeo' },
    // YouTube — Eventos (Botocenter)
    { id: 'I79qYkKU7DA', title: 'Botocenter - Convenção Nacional 2025 - Vol. 1', category: 'eventos', type: 'video', platform: 'youtube' },
    { id: 'Y2eIHh1ui0k', title: 'Botocenter - Convenção Nacional 2025 - Vol. 2', category: 'eventos', type: 'video', platform: 'youtube' },
    { id: 'bobRwqJ7oL0', title: 'Botocenter - Convenção Nacional 2025 - Vol. 3', category: 'eventos', type: 'video', platform: 'youtube' },
    // YouTube — Produtos
    { id: 'wDwKzhJTKFI', title: 'Barbearia - Vídeo 1', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: 'TqTNTvt0fFM', title: 'Barbearia - Vídeo 2', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: 'lW1LClqQECA', title: 'Personal Trainer', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: '9AuGv7XOLA0', title: 'Carol Lisboa - Fashion', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: 'gImWz5k6w5M', title: 'Loja FRIDA - Vídeo 1', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: 'jC5aVi5fPCY', title: 'Loja FRIDA - Vídeo 2', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: '7Hur4SOVyeI', title: 'FrufruStore', category: 'institucionais', type: 'short', platform: 'youtube' },
    // YouTube — Institucionais
    { id: '91Px_gPAmsI', title: 'Botocenter - Campanha 1', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: 'Tw6OOyumGes', title: 'Botocenter - Campanha 2', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: 'y_zEE2WuM8E', title: 'Ana Fook - Campanha', category: 'institucionais', type: 'short', platform: 'youtube' },
    { id: 'HU5cHT_QLfY', title: 'Thereza Priore', category: 'institucionais', type: 'short', platform: 'youtube' },
    // Vimeo — Empresarial
    { id: '1185528210', title: 'Ana Maria Restaurant - Sydney', category: 'institucionais', type: 'short', platform: 'vimeo' },
    { id: '1176736283', title: 'Bodytech RJ - Personal Jackie', category: 'institucionais', type: 'short', platform: 'vimeo' },
    { id: '1176735226', title: 'Personal Jason - Genesis GYM - Sydney Austrália', category: 'institucionais', type: 'short', platform: 'vimeo' },
    { id: '1176736548', title: 'Barbershop - Tres Brazilians - Sydney Austrália', category: 'institucionais', type: 'short', platform: 'vimeo' },
    { id: '1185523168', title: 'Rodrigo Boxer - Studio Brandão Fit - Lauro de Freitas', category: 'institucionais', type: 'short', platform: 'vimeo' },
  ];

  const photographyItems = [
    { url: 'https://nivaldofilho.pixieset.com/loreimprotamakigoff/', title: 'Lorena Improta', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/c38b75e49e8604e1b6be0a7b174faa1c.png', category: 'eventos' },
    { url: 'https://nivaldofilho.pixieset.com/djluana/', title: 'Dj Luana', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/f2315513281778a56758d49541b75b23.png', category: 'comercial' },
    { url: 'https://nivaldofilho.pixieset.com/brunaconi/', title: 'Bruna Coni', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/242925dfc5eb4fd27460ad4f353da8d4.png', category: 'comercial' },
    { url: 'https://nivaldofilho.pixieset.com/dudas15/', title: '15 anos de Duda', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/e0688900955c7f96c53f9b96d8013eff.png', category: 'comercial' },
    { url: 'https://nivaldofilho.pixieset.com/convencaobotocentersalvador/', title: 'Botocenter Convenção 2025', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/b4e0f9a44693c59d694de00c5deeda5a.png', category: 'eventos' },
    { url: 'https://nivaldofilho.pixieset.com/convencaobotocentersalvador2025festa/', title: 'Botocenter Convenção 2025 - Festa', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/752572f30cb8b3b937c68f15145f724a.png', category: 'eventos' },
    { url: 'https://nivaldofilho.pixieset.com/convencaobotocentersalvadordia2/', title: 'Botocenter Convenção 2025 - Dia 2', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/800056c73564d95a1306187873c9b43c.png', category: 'eventos' },
    { url: 'https://nivaldofilho.pixieset.com/carollisboafrufrulolita/', title: 'Carol Lisbôa', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/a5cb5157a91c575e5a87f0a582558800.png', category: 'comercial' },
    { url: 'https://nivaldofilho.pixieset.com/takiloc/', title: 'Takiloc', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/177f0f9d726f4875265c41e0d1a827e7.png', category: 'comercial' },
    { url: 'https://nivaldofilho.pixieset.com/fernandacolombo/', title: 'Fernanda Colombo', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/7c15882b82f272b25ca7df22513f8269.png', category: 'comercial' },
    { url: 'https://nivaldofilho.pixieset.com/jeuphotoshoot/', title: 'Jéssica Ribeiro', img: 'https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/55ca66929d96ba3a09f31c14bf5750a5.png', category: 'comercial' },
  ];

  const tabs = [
    { id: 'audiovisual', label: 'Audiovisual' },
    { id: 'fotografia', label: 'Fotografia' },
  ];

  const categoryLabels = {
    eventos: 'Eventos',
    institucionais: 'Institucionais',
    comercial: 'Comercial',
  };

  const videosByCategory = ['eventos', 'institucionais'].map(cat => ({
    category: cat,
    items: videoItems.filter(v => v.category === cat),
  })).filter(g => g.items.length > 0);

  const photosByCategory = ['eventos', 'comercial'].map(cat => ({
    category: cat,
    items: photographyItems.filter(p => p.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <>
      <Helmet>
        <title>Portfólio - Canguru Filmes</title>
        <meta name="description" content="Confira nossos trabalhos em audiovisual e fotografia. Eventos, produtos e institucionais em Salvador, BA." />
      </Helmet>

      <section className="pt-32 pb-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">Nosso Portfólio</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Explore nossos projetos e veja como transformamos ideias em conteúdo visual impactante.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center mb-12">
            <div className="flex bg-[#111111] rounded-full p-1 border border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-[#FF8C00] text-white shadow-lg' : 'text-gray-300 hover:text-white'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {activeTab === 'audiovisual' && (
            <div className="space-y-16">
              {videosByCategory.map(({ category, items }) => {
                const horizontais = items.filter(v => v.type === 'video');
                const verticais = items.filter(v => v.type === 'short');
                const renderCard = (item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`group relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-gray-800 ${item.type === 'short' ? 'aspect-[9/16]' : 'aspect-video'}`}
                    onClick={() => setSelectedVideo(item)}
                  >
                    {item.platform === 'vimeo' ? (
                      <VimeoThumbnail
                        videoId={item.id}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="h-0.5 bg-[#FF8C00]" />
                      <div className="bg-black/85 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
                        <img
                          src="https://horizons-cdn.hostinger.com/e2cc1ab3-147a-4b3d-b2a4-d06ef4d1dd8b/06bfbe75fd69105f2eece30e7e72898f.jpg"
                          alt="Canguru Filmes"
                          className="h-5 w-auto object-contain flex-shrink-0 opacity-90"
                        />
                        <div className="w-px h-4 bg-[#FF8C00] flex-shrink-0" />
                        <h3 className="text-white text-[10px] font-semibold font-montserrat leading-tight line-clamp-2 flex-1">{item.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                );
                return (
                  <div key={category}>
                    <h2 className="text-2xl font-bold font-montserrat text-white mb-8 border-b-2 border-[#FF8C00] pb-2 inline-block">
                      {categoryLabels[category]}
                    </h2>
                    {horizontais.length > 0 && (
                      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {horizontais.map((item, index) => renderCard(item, index))}
                      </motion.div>
                    )}
                    {verticais.length > 0 && (
                      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {verticais.map((item, index) => renderCard(item, index))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'fotografia' && (
            <div className="space-y-16">
              {photosByCategory.map(({ category, items }) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold font-montserrat text-white mb-8 border-b-2 border-[#FF8C00] pb-2 inline-block">
                    {categoryLabels[category]}
                  </h2>
                  <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-gray-800"
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                          <h3 className="text-white font-semibold font-montserrat">{item.title}</h3>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <VideoLightbox video={selectedVideo} isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
};

export default Portfolio;
