import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: { es: string; en: string };
}

const translations: Translations = {
  // Nav
  'nav.chef': { es: 'Chef', en: 'Chef' },
  'nav.experiencia': { es: 'Experiencia', en: 'Experience' },
  'nav.restaurante': { es: 'Restaurante', en: 'Restaurant' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },
  'nav.reservar': { es: 'Reservar', en: 'Reserve' },

  // Hero
  'hero.slogan': { es: 'Donde la gastronomía amazónica se vuelve arte', en: 'Where Amazonian gastronomy becomes art' },
  'hero.tagline': { es: 'Experiencia culinaria única en el corazón de la Amazonía peruana', en: 'A unique culinary experience in the heart of the Peruvian Amazon' },
  'hero.cta': { es: 'Reservar Mesa', en: 'Reserve a Table' },
  'hero.discover': { es: 'Descubrir', en: 'Discover' },

  // Story
  'story.title': { es: 'Nuestra Historia', en: 'Our Story' },
  'story.p1': { es: 'Chef Paz nació de la pasión de Maritza Paz por compartir los sabores únicos de la Amazonía peruana con el mundo. Con más de 10 años de experiencia, ha transformado ingredientes ancestrales como el paiche, camu camu y aguaje en creaciones culinarias que celebran la biodiversidad de la selva.', en: 'Chef Paz was born from Maritza Paz\'s passion for sharing the unique flavors of the Peruvian Amazon with the world. With over 10 years of experience, she has transformed ancestral ingredients like paiche, camu camu, and aguaje into culinary creations that celebrate the jungle\'s biodiversity.' },
  'story.p2': { es: 'Desde nuestro restaurante en el corazón de Iquitos, cada plato es un viaje sensorial por los ríos, bosques y tradiciones que hacen de la gastronomía amazónica una de las más fascinantes del planeta.', en: 'From our restaurant in the heart of Iquitos, every dish is a sensory journey through the rivers, forests, and traditions that make Amazonian gastronomy one of the most fascinating on the planet.' },

  // Timeline
  'timeline.title': { es: 'Nuestro Camino', en: 'Our Journey' },
  'timeline.2013': { es: 'Nace Chef Paz en Iquitos con una pequeña cocina y un gran sueño', en: 'Chef Paz is born in Iquitos with a small kitchen and a big dream' },
  'timeline.2015': { es: 'Reconocimiento como mejor restaurante amazónico emergente', en: 'Recognized as best emerging Amazonian restaurant' },
  'timeline.2017': { es: 'Expansión del local y creación del menú degustación amazónico', en: 'Venue expansion and creation of the Amazonian tasting menu' },
  'timeline.2019': { es: 'Participación en festivales gastronómicos internacionales', en: 'Participation in international gastronomic festivals' },
  'timeline.2021': { es: 'Lanzamiento de nuestra línea de productos amazónicos artesanales', en: 'Launch of our artisanal Amazonian product line' },
  'timeline.2024': { es: 'Consolidación como referente de la alta cocina amazónica en Perú', en: 'Established as a benchmark for haute Amazonian cuisine in Peru' },

  // Experiencia
  'exp.title': { es: 'La Experiencia', en: 'The Experience' },
  'exp.subtitle': { es: 'Cada visita es un viaje por los sentidos, donde la selva cobra vida en cada plato y cada momento.', en: 'Every visit is a journey through the senses, where the jungle comes alive in every dish and every moment.' },
  'exp.food': { es: 'Sabores Ancestrales', en: 'Ancestral Flavors' },
  'exp.food.desc': { es: 'Ingredientes nativos de la Amazonía transformados en alta cocina', en: 'Native Amazonian ingredients transformed into haute cuisine' },
  'exp.ambiance': { es: 'Ambiente Único', en: 'Unique Ambiance' },
  'exp.ambiance.desc': { es: 'Un espacio donde la elegancia se encuentra con el alma de la selva', en: 'A space where elegance meets the soul of the jungle' },
  'exp.drinks': { es: 'Coctelería Amazónica', en: 'Amazonian Cocktails' },
  'exp.drinks.desc': { es: 'Creaciones únicas con frutas exóticas de la región', en: 'Unique creations with exotic regional fruits' },
  'exp.ceviche': { es: 'Ceviche Amazónico', en: 'Amazonian Ceviche' },
  'exp.ceviche.desc': { es: 'Nuestra interpretación del clásico peruano con ingredientes de la selva', en: 'Our interpretation of the Peruvian classic with jungle ingredients' },

  // Restaurante
  'rest.title': { es: 'El Restaurante', en: 'The Restaurant' },
  'rest.carta': { es: 'Nuestra Carta', en: 'Our Menu' },
  'rest.carta.desc': { es: 'Explora nuestra selección de platos que celebran la biodiversidad amazónica', en: 'Explore our selection of dishes celebrating Amazonian biodiversity' },
  'rest.ver.carta': { es: 'Ver Carta Completa', en: 'View Full Menu' },
  'rest.horario': { es: 'Horario de Atención', en: 'Opening Hours' },
  'rest.lun.vie': { es: 'Lunes a Viernes', en: 'Monday to Friday' },
  'rest.sabado': { es: 'Sábados', en: 'Saturdays' },
  'rest.domingo': { es: 'Domingos', en: 'Sundays' },
  'rest.cerrado': { es: 'Cerrado', en: 'Closed' },

  // Contacto
  'contact.title': { es: 'Contáctanos', en: 'Contact Us' },
  'contact.address': { es: 'Dirección', en: 'Address' },
  'contact.form.name': { es: 'Nombre', en: 'Name' },
  'contact.form.email': { es: 'Correo electrónico', en: 'Email' },
  'contact.form.message': { es: 'Mensaje', en: 'Message' },
  'contact.form.send': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.form.whatsapp': { es: 'Enviar por WhatsApp', en: 'Send via WhatsApp' },

  // Reserva
  'reserva.title': { es: 'Reserva tu Mesa', en: 'Reserve Your Table' },
  'reserva.subtitle': { es: 'Vive una experiencia gastronómica inolvidable', en: 'Live an unforgettable gastronomic experience' },
  'reserva.nombre': { es: 'Nombre completo', en: 'Full name' },
  'reserva.email': { es: 'Correo electrónico', en: 'Email' },
  'reserva.telefono': { es: 'Teléfono', en: 'Phone' },
  'reserva.personas': { es: 'Cantidad de personas', en: 'Number of guests' },
  'reserva.fecha': { es: 'Fecha', en: 'Date' },
  'reserva.hora': { es: 'Hora', en: 'Time' },
  'reserva.tipo': { es: 'Tipo de consumo', en: 'Dining type' },
  'reserva.ligero': { es: 'Ligero', en: 'Light' },
  'reserva.medio': { es: 'Medio', en: 'Medium' },
  'reserva.alto': { es: 'Alto', en: 'High' },
  'reserva.degustacion': { es: 'Degustación', en: 'Tasting' },
  'reserva.mensaje': { es: 'Mensaje opcional', en: 'Optional message' },
  'reserva.enviar': { es: 'Confirmar por WhatsApp', en: 'Confirm via WhatsApp' },
  'reserva.pick.date': { es: 'Selecciona una fecha', en: 'Pick a date' },
  'reserva.pick.time': { es: 'Selecciona hora', en: 'Select time' },
  'reserva.pick.type': { es: 'Selecciona tipo', en: 'Select type' },
  'reserva.pick.guests': { es: 'Selecciona', en: 'Select' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.slogan': { es: 'Donde la gastronomía amazónica se vuelve arte', en: 'Where Amazonian gastronomy becomes art' },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const t = useCallback((key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
