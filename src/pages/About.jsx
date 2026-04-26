import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Zap, Award, Camera, Film, Aperture, Palette, UserCheck, MonitorPlay } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Estética',
      description:
        'Cada projeto é pensado nos mínimos detalhes para entregar uma experiência visual impecável e memorável.',
    },
    {
      icon: Zap,
      title: 'Eficiência',
      description:
        'Processos ágeis e bem estruturados que garantem entregas rápidas sem comprometer a qualidade.',
    },
    {
      icon: Award,
      title: 'Estratégia',
      description:
        'Conteúdo que vai além do visual, pensado estrategicamente para gerar resultados e impacto real.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre - Canguru Filmes</title>
        <meta
          name="description"
          content="Conheça a Canguru Filmes. Estética, eficiência e estratégia em cada projeto de audiovisual, fotografia e marketing digital."
        />
      </Helmet>

      <section className="pt-32 pb-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
              Quem Somos
            </h1>
            <div className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>
                A Canguru Filmes nasceu da união entre experiência internacional e paixão por contar histórias com autenticidade. Nosso olhar foi moldado em três continentes, Austrália, Estados Unidos e Nova Zelândia, onde vivenciamos as novas linguagens do audiovisual e as tendências globais do marketing digital.
              </p>
              <p>
                Com formação em Cinema e Produção Audiovisual no exterior e Marketing Digital Internacional, trazemos para o Brasil uma visão que une estética cinematográfica, estratégia e performance. Cada projeto é conduzido com padrão técnico internacional, sensibilidade artística e compreensão profunda das dinâmicas digitais que movem o mercado atual.
              </p>
              <p>
                Somos especialistas em transformar marcas em experiências visuais que inspiram, conectam e permanecem. Mais do que vídeos, criamos narrativas com propósito produzindo conteúdo que emociona, comunica e gera resultados reais.
              </p>
              <p>
                Da câmera à campanha, da ideia à execução, a Canguru Filmes é o ponto onde arte, estratégia e tecnologia se encontram.
              </p>
            </div>
          </motion.div>

          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold font-montserrat text-white mb-4 text-center"
            >
              Nosso Time
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            >
              Contamos com uma equipe multidisciplinar de profissionais especializados, prontos para atender desde coberturas de eventos até produções corporativas completas.
            </motion.p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Film, label: 'Filmmakers' },
                { icon: Camera, label: 'Fotógrafos' },
                { icon: Aperture, label: 'Op. de Drone\nNormal & FPV' },
                { icon: Palette, label: 'Diretor\nde Arte' },
                { icon: UserCheck, label: 'Produtor' },
                { icon: MonitorPlay, label: 'Editores' },
              ].map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex flex-col items-center gap-3 bg-[#0a0a0a] rounded-xl p-6 border border-gray-800 hover:border-[#FF8C00] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center group-hover:bg-[#FF8C00] transition-colors">
                    <role.icon className="w-6 h-6 text-[#FF8C00] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white text-sm font-semibold font-montserrat text-center leading-tight whitespace-pre-line">{role.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold font-montserrat text-white mb-12 text-center"
            >
              Nossos Valores
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0a0a0a] rounded-xl p-8 border border-gray-800 hover:border-[#FF8C00] transition-all"
                >
                  <div className="w-14 h-14 bg-[#FF8C00] rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] rounded-2xl p-8 md:p-12 text-center border-2 border-[#FF8C00]"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
              Vamos criar juntos?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Estamos prontos para transformar suas ideias em realidade visual.
              Entre em contato e vamos conversar sobre seu próximo projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#FF8C00] text-white rounded-lg font-semibold hover:bg-[#cc7000] transition-colors"
              >
                Falar com a gente
              </a>
              <a
                href="https://wa.me/5571996755661"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FF8C00] text-[#FF8C00] rounded-lg font-semibold hover:bg-[#FF8C00] hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;