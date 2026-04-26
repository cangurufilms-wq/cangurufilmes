import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Dra. Cristiane Lobato',
      role: 'Terapeuta em Sydney, Aus.',
      review: 'Eu não queria apenas vídeos bonitos, mas conteúdo que inspirasse confiança. A Canguru Filmes planejou cada roteiro com base na minha rotina, minha linguagem e meus valores. O resultado foi uma presença digital com credibilidade e pacientes que dizem "te escolhi depois de ver teus vídeos".',
      rating: 5,
    },
    {
      name: 'Leo Borges',
      role: 'Empresário de Artistas Musicais',
      review: 'O que a Canguru Filmes entrega vai além do audiovisual é branding em movimento. Desde o primeiro roteiro, sentimos que havia uma estratégia por trás de cada corte. Eles cuidaram de tudo: conceito, gravação, edição e performance nas redes. Resultado? Crescemos 4x em engajamento.',
      rating: 5,
    },
    {
      name: 'Dr. Rafael Antunes',
      role: 'Ortopedista',
      review: 'Eu queria conteúdo técnico sem perder empatia. A Canguru Filmes conseguiu o equilíbrio perfeito. O vídeo ficou didático, visualmente impecável e gerou muitos comentários positivos de pacientes. Eles entendem o que é comunicar com credibilidade.',
      rating: 5,
    },
    {
      name: 'Isabela Moraes',
      role: 'Arquiteta',
      review: 'A Canguru Filmes tem um olhar que entende o design. Eles valorizam luz, textura, enquadramento e ritmo. O vídeo que fizemos virou minha principal vitrine para novos clientes. A direção foi impecável e o processo, leve.',
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Reviews - Canguru Filmes</title>
        <meta
          name="description"
          content="Veja o que nossos clientes dizem sobre o trabalho da Canguru Filmes. Qualidade, profissionalismo e resultados."
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
              O que nossos clientes dizem
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nosso maior orgulho é a satisfação de quem confia em nosso trabalho.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0a0a0a] rounded-xl p-8 border border-gray-800 hover:border-[#FF8C00] transition-all flex flex-col"
              >
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FF8C00] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{item.review}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;