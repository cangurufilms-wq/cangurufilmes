import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Video, Camera, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Audiovisual',
      description:
        'Produção completa de vídeos institucionais, comerciais, eventos e conteúdo para redes sociais.',
      features: [
        'Vídeos institucionais e comerciais',
        'Cobertura de eventos',
        'Conteúdo para redes sociais',
        'Motion graphics e animações',
        'Edição e pós-produção',
      ],
    },
    {
      icon: Camera,
      title: 'Fotografia',
      description:
        'Ensaios fotográficos profissionais para produtos, eventos, moda e campanhas publicitárias.',
      features: [
        'Fotografia de produtos',
        'Ensaios editoriais e fashion',
        'Cobertura de eventos',
        'Fotografia publicitária',
        'Tratamento e edição de imagens',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description:
        'Estratégias completas de marketing digital para aumentar sua presença online e gerar resultados.',
      features: [
        'Gestão de redes sociais',
        'Criação de campanhas publicitárias',
        'Produção de conteúdo estratégico',
        'Análise de métricas e performance',
        'Consultoria de branding',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Canguru Filmes</title>
        <meta
          name="description"
          content="Audiovisual, fotografia e marketing digital. Conheça nossos serviços e transforme sua comunicação visual."
        />
      </Helmet>

      <section className="pt-32 pb-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
              Nossos Serviços
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Soluções completas em audiovisual, fotografia e marketing digital para elevar sua marca.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0a0a0a] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-800"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div>
                    <div className="w-16 h-16 bg-[#FF8C00] rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold font-montserrat text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <Button
                      asChild
                      className="bg-[#FF8C00] hover:bg-[#cc7000] text-white"
                    >
                      <a href="#contato" className="flex items-center gap-2">
                        <span>Pedir orçamento</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="bg-[#111111] rounded-xl p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold font-montserrat text-white mb-4">
                      O que oferecemos:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="contato"
            className="mt-20 bg-[#0a0a0a] rounded-2xl p-8 md:p-12 text-center border-2 border-[#FF8C00]"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Entre em contato e descubra como podemos transformar sua comunicação visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#FF8C00] hover:bg-[#cc7000] text-white"
              >
                <Link to="/contato">Enviar mensagem</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white"
              >
                <a
                  href="https://wa.me/5571993246708"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;