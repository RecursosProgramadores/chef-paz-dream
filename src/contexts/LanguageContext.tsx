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

  // Story
  'story.title': { es: 'Nuestra Historia', en: 'Our Story' },
  'story.p1': { es: 'En 2012, el chef Gabriel Garhy Nogueira Paz regresa a Iquitos tras su formación profesional en la Escuela Iberoamericana de Lima, con la visión de revalorizar la cocina amazónica desde una propuesta contemporánea y técnica. En 2013 funda Chef Paz Restaurant, un proyecto gastronómico que, a lo largo de más de una década, ha evolucionado bajo un enfoque de innovación constante, calidad estandarizada y mejora continua, consolidándose como un referente culinario en la región amazónica.', en: 'In 2012, Chef Gabriel Garhy Nogueira Paz returned to Iquitos after his professional training at the Escuela Iberoamericana in Lima, with a vision to revalue Amazonian cuisine through a contemporary and technical proposal. In 2013, he founded Chef Paz Restaurant, a gastronomic project that, over more than a decade, has evolved under a constant innovation approach, standardized quality, and continuous improvement, consolidating itself as a culinary benchmark in the Amazon region.' },
  'story.p2': { es: 'Su trayectoria incluye participación en ferias nacionales e internacionales como Perú Mucho Gusto, así como el Premio a la Innovación 2023 por su propuesta basada en el ingrediente tucupí. En 2024 fue nominado a los Premios Summum en la categoría Restaurantes de la Amazonía, reconocimiento que posiciona a Chef Paz entre los mejores exponentes gastronómicos del país, reafirmando su compromiso con la excelencia y la identidad amazónica.', en: 'His career includes participation in national and international fairs such as Perú Mucho Gusto, as well as the 2023 Innovation Award for his proposal based on the tucupí ingredient. In 2024, he was nominated for the Summum Awards in the Amazon Restaurants category, a recognition that positions Chef Paz among the best gastronomic exponents in the country, reaffirming its commitment to excellence and Amazonian identity.' },

  // Timeline
  'timeline.title': { es: 'Nuestro Camino', en: 'Our Journey' },
  'timeline.2023.nov': { es: 'Premio a la Innovación - Perú Mucho Gusto - Lima Nov 2023', en: 'Innovation Award - Perú Mucho Gusto - Lima Nov 2023' },
  'timeline.2024.jul': { es: 'Perú Mucho Gusto Tacna - Julio 2024', en: 'Perú Mucho Gusto Tacna - July 2024' },
  'timeline.2024.sep': { es: 'Nominación a los Premios Summum como Mejor Restaurante de la Amazonía - Setiembre 2024', en: 'Summum Awards Nomination as Best Restaurant of the Amazon - September 2024' },
  'timeline.2024.nov': { es: 'Perú Mucho Gusto Lima - Noviembre 2024', en: 'Perú Mucho Gusto Lima - November 2024' },
  'timeline.2025.jul': { es: 'Perú Mucho Gusto Tacna - Julio 2025', en: 'Perú Mucho Gusto Tacna - July 2025' },
  'timeline.2025.sep': { es: 'Nominación a los Premios Summum como Mejor Restaurante de la Amazonía - Setiembre 2025', en: 'Summum Awards Nomination as Best Restaurant of the Amazon - September 2025' },
  'month.nov': { es: 'Nov', en: 'Nov' },
  'month.jul': { es: 'Jul', en: 'Jul' },
  'month.sep': { es: 'Set', en: 'Sep' },
  'month.dec': { es: 'Dic', en: 'Dec' },

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
  'rest.mon.sat': { es: 'Lunes a Sábado', en: 'Monday to Saturday' },
  'rest.mon.sat.hours': { es: '12:00 – 16:00 y 19:00 – 21:00', en: '12:00 PM – 4:00 PM and 7:00 PM – 9:00 PM' },
  'rest.sun': { es: 'Domingo', en: 'Sunday' },
  'rest.sun.hours': { es: '12:00 – 16:00', en: '12:00 PM – 4:00 PM' },
  'rest.contact.phone': { es: '+51 990 512 048', en: '+51 990 512 048' },
  'rest.contact.insta': { es: '@chefpaz.iquitos', en: '@chefpaz.iquitos' },
  'rest.contact.fb': { es: 'Chef Paz', en: 'Chef Paz' },
  'rest.contact.email': { es: 'info@chefpaz.pe', en: 'info@chefpaz.pe' },
  'contact.status.open': { es: 'Abierto Ahora', en: 'Open Now' },
  'contact.status.closed': { es: 'Cerrado Ahora', en: 'Closed Now' },
  'contact.response.tag': { es: 'Respuesta en < 15 min', en: 'Replies in < 15 min' },
  'contact.welcome.note': { es: '¡La Amazonia te espera!', en: 'The Amazon awaits you!' },
  'contact.hero.tag': { es: 'Contacto con el Chef', en: 'Chef Connection' },
  'contact.hero.subtitle': { es: 'Llevemos la magia de la Amazonía a su mesa.', en: "Let's bring the magic of the Amazon to your table." },
  'contact.visit.title': { es: 'Visítanos', en: 'Visit Us' },
  'contact.form.title': { es: 'Envíanos un mensaje', en: 'Send a Message' },
  'contact.form.whatsapp.btn': { es: 'Enviar por WhatsApp', en: 'Send via WhatsApp' },
  'contact.form.whatsapp.note': { es: 'Atención preferencial inmediata', en: 'Immediate preferential attention' },

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
  'reserva.premium.title': { es: 'Reserva tu mesa en Chef Paz', en: 'Reserve your table at Chef Paz' },
  'reserva.premium.policy.title': { es: 'Menú y Política de Reserva', en: 'Menu & Reservation Policy' },
  'reserva.premium.menu.info': { es: 'El menú "Couleur du jour" tiene un costo de 480 OC por persona.', en: 'The "Couleur du jour" menu is 480 OC per person.' },
  'reserva.premium.prepay.info': { es: 'Para reservar solicitamos un prepago de 240 OC por persona (no reembolsable, pero canjeable por una nueva fecha).', en: 'To reserve, we request a prepayment of 240 OC per person (non-refundable, but exchangeable for a new date).' },
  'reserva.premium.covers.label': { es: '¿Cuántas personas?', en: 'How many people?' },
  'reserva.premium.date.label': { es: 'Selecciona la fecha', en: 'Select the date' },
  'reserva.premium.time.label': { es: 'Horarios disponibles', en: 'Available times' },
  'reserva.premium.cta': { es: 'Confirmar Reserva', en: 'Confirm Reservation' },
  'reserva.paris.hero.title': { es: 'Reserva', en: 'Reservations' },
  'reserva.paris.hero.brand': { es: 'Chef Paz restaurante', en: 'Chef Paz restaurant' },
  'reserva.paris.hero.cta': { es: 'Reservar una mesa', en: 'Reserve a table' },
  'reserva.paris.next': { es: 'Continuar', en: 'Continue' },
  'reserva.paris.back': { es: 'Atrás', en: 'Back' },
  'reserva.paris.success': { es: '¡Reserva Iniciada!', en: 'Reservation Initiated!' },
  'reserva.whatsapp.header': { es: 'Reserva Chef Paz 2026', en: 'Chef Paz Reservation 2026' },
  'reserva.whatsapp.name': { es: 'Nombre', en: 'Name' },
  'reserva.whatsapp.email': { es: 'Email', en: 'Email' },
  'reserva.whatsapp.phone': { es: 'Teléfono', en: 'Phone' },
  'reserva.whatsapp.guests': { es: 'Comensales', en: 'Guests' },
  'reserva.whatsapp.date': { es: 'Fecha', en: 'Date' },
  'reserva.whatsapp.time': { es: 'Hora', en: 'Time' },
  'reserva.whatsapp.footer': { es: 'Confirmado vía Web.', en: 'Confirmed via Web.' },

  // Testimonials
  'testimonials.title': { es: 'Experiencias compartidas por nuestros clientes', en: 'Experiences shared by our clients' },
  'testimonials.subtitle': { es: 'La experiencia Chef Paz a través de los sentidos de nuestros comensales', en: 'The Chef Paz experience through the senses of our diners' },
  'testimonials.p1.text': { es: 'Chef Paz logra interpretar la despensa amazónica con técnica y respeto. Aquí se siente identidad, producto y territorio en cada plato. Es una propuesta que aporta valor real a la cocina peruana contemporánea.', en: 'Chef Paz manages to interpret the Amazonian pantry with technique and respect. Here, identity, product, and territory are felt in every dish. It is a proposal that brings real value to contemporary Peruvian cuisine.' },
  'testimonials.p1.author': { es: 'Pedro Miguel Schiaffino', en: 'Pedro Miguel Schiaffino' },
  'testimonials.p1.role': { es: 'Chef & Propietario de Malabar', en: 'Chef & Owner of Malabar' },
  'testimonials.p2.text': { es: 'Es inspirador ver cómo un restaurante en la Amazonía eleva nuestros insumos locales a estándares nacionales. Chef Paz demuestra que desde regiones como Loreto se puede competir con excelencia gastronómica.', en: 'It is inspiring to see how a restaurant in the Amazon raises our local ingredients to national standards. Chef Paz proves that regions like Loreto can compete with gastronomic excellence.' },
  'testimonials.p2.author': { es: 'George Forsyth', en: 'George Forsyth' },
  'testimonials.p2.role': { es: 'Ex Seleccionado Nacional', en: 'Former National Team Player' },
  'testimonials.p3.text': { es: 'La experiencia en Chef Paz es auténtica y sofisticada a la vez. Me encantó cómo combinan sabores amazónicos con una presentación elegante y moderna. Es un lugar al que definitivamente volvería.', en: 'The experience at Chef Paz is both authentic and sophisticated. I loved how they combine Amazonian flavors with an elegant and modern presentation. It is a place I would definitely return to.' },
  'testimonials.p3.author': { es: 'Alondra García Miró', en: 'Alondra García Miró' },
  'testimonials.p3.role': { es: 'Modelo & Actriz', en: 'Model & Actress' },
  'testimonials.reviews.title': { es: 'Reseñas', en: 'Reviews' },
  'testimonials.reviews.tripadvisor': { es: 'Tripadvisor', en: 'Tripadvisor' },
  'testimonials.reviews.google': { es: 'Google', en: 'Google' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.developed': { es: 'Desarrollado por', en: 'Developed by' },
  'footer.slogan': { es: '"Donde la gastronomía amazónica se vuelve arte"', en: '"Where Amazonian gastronomy becomes art"' },
  'footer.terms': { es: 'Términos y condiciones', en: 'Terms & Conditions' },
  'footer.privacy': { es: 'Política de privacidad', en: 'Privacy Policy' },
  'common.back_to_home': { es: 'Volver al inicio', en: 'Back to home' },
  'common.links': { es: 'Links', en: 'Links' },
  'common.social': { es: 'Social', en: 'Social' },
  'contact.address.detail': { es: '(entre Tacna y Huallaga)', en: '(between Tacna and Huallaga)' },
  'contact.hours.tag': { es: 'Atención', en: 'Service' },

  // Legal Pages
  'legal.terms.title': { es: 'Términos y Condiciones', en: 'Terms & Conditions' },
  'legal.privacy.title': { es: 'Política de Privacidad', en: 'Privacy Policy' },
  'legal.last_update': { es: 'Última actualización: Marzo 2024', en: 'Last updated: March 2024' },
  'legal.terms.intro': {
    es: 'Al acceder a Chef Paz, aceptas estos términos y condiciones. Por favor, léelos detenidamente antes de realizar una reserva.',
    en: 'By accessing Chef Paz, you accept these terms and conditions. Please read them carefully before making a reservation.'
  },
  'legal.terms.reservations.title': { es: '1. Reservas', en: '1. Reservations' },
  'legal.terms.reservations.text': {
    es: 'Las reservas están sujetas a disponibilidad. Recomendamos llegar 15 minutos antes de la hora acordada.',
    en: 'Reservations are subject to availability. We recommend arriving 15 minutes before the agreed time.'
  },
  'legal.terms.cancellation.title': { es: '2. Cancelaciones', en: '2. Cancellations' },
  'legal.terms.cancellation.text': {
    es: 'Solicitamos avisar cualquier cambio o cancelación con al menos 24 horas de anticipación.',
    en: 'We request that any changes or cancellations be notified at least 24 hours in advance.'
  },
  'legal.privacy.intro': {
    es: 'En Chef Paz, valoramos tu privacidad. Esta política describe cómo manejamos tus datos personales al reservar o contactarnos.',
    en: 'At Chef Paz, we value your privacy. This policy describes how we handle your personal data when booking or contacting us.'
  },
  'legal.privacy.collection.title': { es: 'Información que recolectamos', en: 'Information we collect' },
  'legal.privacy.collection.text': {
    es: 'Recogemos nombre, email y teléfono únicamente para gestionar tus reservas y brindarte un mejor servicio.',
    en: 'We collect name, email, and phone number solely to manage your reservations and provide you with better service.'
  },
  'legal.privacy.use.title': { es: 'Uso de la información', en: 'Use of information' },
  'legal.privacy.use.text': {
    es: 'Tus datos no serán compartidos con terceros sin tu consentimiento explícito.',
    en: 'Your data will not be shared with third parties without your explicit consent.'
  },
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
