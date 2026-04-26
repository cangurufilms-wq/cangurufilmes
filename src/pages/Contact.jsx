import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, Instagram, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.message) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha todos os campos do formulário.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: '🚧 Funcionalidade em desenvolvimento',
      description:
        'O envio de formulário ainda não está implementado. Use o WhatsApp para entrar em contato!',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Contato - Canguru Filmes</title>
        <meta
          name="description"
          content="Entre em contato com a Canguru Filmes. Estamos prontos para transformar suas ideias em realidade visual."
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
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
              Vamos conversar?
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos ajudar a transformar sua comunicação visual.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold font-montserrat text-white mb-6">
                Envie uma mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    E-mail ou WhatsApp
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                    placeholder="seu@email.com ou (71) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FF8C00] hover:bg-[#cc7000] text-white"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensagem
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold font-montserrat text-white mb-6">
                  Outras formas de contato
                </h2>

                <div className="space-y-4">
                  <a
                    href="mailto:cangurufilms@gmail.com"
                    className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg hover:bg-[#111111] transition-colors group border border-gray-800"
                  >
                    <div className="w-12 h-12 bg-[#FF8C00] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">E-mail</p>
                      <p className="text-sm text-gray-400">
                        cangurufilms@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5571996755661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg hover:bg-[#111111] transition-colors group border border-gray-800"
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-sm text-gray-400">(71) 99675-5661</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/canguru.films"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg hover:bg-[#111111] transition-colors group border border-gray-800"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Instagram</p>
                      <p className="text-sm text-gray-400">@canguru.films</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#0a0a0a] rounded-2xl p-8 border-2 border-[#FF8C00]">
                <h3 className="text-xl font-bold font-montserrat mb-3 text-white">
                  Atendimento rápido via WhatsApp
                </h3>
                <p className="mb-6 text-gray-300">
                  Prefere falar diretamente? Clique no botão abaixo e inicie uma conversa agora mesmo!
                </p>
                <Button
                  asChild
                  className="w-full bg-[#FF8C00] text-white hover:bg-[#cc7000]"
                  size="lg"
                >
                  <a
                    href="https://wa.me/5571996755661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Abrir WhatsApp</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;