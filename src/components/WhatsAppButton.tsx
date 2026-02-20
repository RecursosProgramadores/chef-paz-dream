import React from 'react';
import { motion } from 'framer-motion';
import whatsappIcon from '@/assets/logos/whatsapp.svg';

const WhatsAppButton = () => {
    const phoneNumber = "51965903960";
    const message = encodeURIComponent("Hola Chef Paz, me gustaría realizar una consulta.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex items-center">
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center group"
            >
                {/* Professional Tooltip - Left side */}
                <div
                    className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none"
                >
                    <div className="bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-xl shadow-2xl border border-white/10 whitespace-nowrap flex items-center gap-2">
                        <span className="font-sans-body font-bold text-sm tracking-wide">¡Escríbenos!</span>
                        {/* Little triangle arrow */}
                        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-black/80 rotate-45 border-r border-t border-white/10" />
                    </div>
                </div>

                {/* WhatsApp Icon Circle */}
                <div className="bg-[#25D366] p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.5)] hover:bg-[#20ba59] transition-all duration-300">
                    <img
                        src={whatsappIcon}
                        alt="WhatsApp"
                        className="w-8 h-8 filter brightness-0 invert"
                    />
                </div>
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
