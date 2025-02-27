import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'nav.join': 'Join Us',
    'hero.title': 'Racing Towards a Sustainable Future',
    'hero.subtitle': 'Driving the next generation of solar-powered mobility with a commitment to sustainable innovation and cutting-edge technology.',
    'hero.learnMore': 'Learn More',
    'hero.joinTeam': 'Join the Team',
    'countdown.title': 'Time Until Race Day',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    'home.title': 'The Future of Solar Racing',
    'home.subtitle': 'Driving the next generation of solar-powered mobility with a commitment to sustainable innovation and cutting-edge technology.',
    'home.features.innovation.title': 'Innovation',
    'home.features.innovation.description': 'We continuously explore new frontiers in aerodynamics, energy efficiency, and solar mobility. By integrating state-of-the-art technologies, we optimize performance and push the limits of sustainable engineering.',
    'home.features.sustainability.title': 'Sustainability',
    'home.features.sustainability.description': 'Sustainability is at the heart of our mission. Through cutting-edge research in renewable energy, we aim to create eco-friendly transport solutions that contribute to a cleaner, more efficient future.',
    'home.features.education.title': 'Education',
    'home.features.education.description': 'Our team fosters knowledge-sharing and hands-on experience, empowering the next generation of engineers. We provide real-world challenges that enhance technical skills and drive future innovation.',
    'about.title': 'About HeliosRace UPV',
    'about.subtitle': 'From the land of the sun, for the rest of the world. Learn about our history, mission, and values.',
    'about.mission.title': 'Our Mission',
    'about.mission.text1': 'To advance innovation in sustainable transportation by designing, constructing, and optimizing high-performance solar electric vehicles. We strive to challenge the boundaries of energy efficiency, encourage the widespread use of clean technologies, and develop the next generation of engineers dedicated to a greener future.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'To be an international benchmark in the development of solar electric vehicles, leading research and the application of innovative solutions that contribute to the creation of a sustainable, efficient, and accessible transportation system. We aspire to inspire society to adopt a more environmentally friendly lifestyle, demonstrating the potential of solar energy as a clean and renewable energy source for mobility.',
    'about.values.title': 'Values',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.text': 'We foster creativity, experimentation, and the constant search for new solutions to improve the performance, efficiency, and sustainability of our vehicles.',
    'about.values.sustainability': 'Sustainability',
    'about.values.sustainability.text': 'We prioritize the use of environmentally friendly materials and technologies, minimizing the environmental impact of our processes and products.',
    'about.values.teamwork': 'Teamwork',
    'about.values.teamwork.text': 'We believe in collaboration, mutual respect, and open communication as fundamental pillars to achieve our goals.',
    'about.values.commitment': 'Commitment',
    'about.values.commitment.text': 'We are dedicated to the mission of HeliosRace UPV, taking responsibility for our actions and working with passion and determination to achieve our goals.',
    'about.competition.title': 'Competition',
    'about.competition.text': 'The ILumen European Solar Challenge (IESC) seeks the development of vehicle propulsion technology through solar energy, through friendly competition among participating teams. On August 22 and 23, 2024, the HeliosRace UPV team had the pleasure and opportunity to participate with their first prototype at the Zolder circuit in Heusden-Zolder, Belgium.',
    'about.vehicles.title': 'Meet Our Vehicles',
    'about.vehicles.prototype1': 'Our first prototype. The beginning of a legacy.',
    'about.vehicles.prototype2': 'Our second bet. The future of Helios Race UPV.',
    'about.findUs.title': 'Find Us',
    'team.title': 'Meet Our Team',
    'team.subtitle': 'Students working together to push the boundaries of solar racing and develop the sustainable mobility of the future.',
    'team.description': 'Our team consists of passionate students from various engineering disciplines, working together to create innovative solar-powered racing solutions. Each member brings unique skills and perspectives to the project.',
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Collaboration is key to our success. Meet the organizations that support our mission.',
    'partners.becomePartner.title': 'Become a Partner',
    'partners.becomePartner.text': 'Join us in our mission to advance sustainable transportation technology. Partner with HeliosRace UPV and be part of the future of solar racing.',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions or want to learn more about HeliosRace UPV? Get in touch with us.',
    'contact.nameLabel': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailLabel': 'Email',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messageLabel': 'Message',
    'contact.messagePlaceholder': 'Your message...',
    'contact.submitButton': 'Send Message',
    'contact.sendingButton': 'Sending...',
    'contact.successTitle': 'Message Sent!',
    'contact.successDescription': 'We will get back to you as soon as possible.',
    'contact.errorTitle': 'Error',
    'contact.errorDescription': 'There was a problem sending your message. Please try again later.',
    'join.title': 'Join Our Team',
    'join.subtitle': 'Be part of the future of sustainable racing technology',
    'join.readyTitle': 'Ready to Join?',
    'join.readyText': 'Apply now through our application form. We\'re looking forward to meeting you!',
    'join.apply': 'Apply Now',
    'join.titlend': 'Do you want to join?',
    'join.description': 'If you are passionate about technology, innovation and motorsports, join us! Work with us closely to develop a sustainable and efficient propulsion system. We are waiting for you!',
    'join.button': 'Apply Now',
  },
  es: {
    'nav.about': 'Acerca',
    'nav.team': 'Equipo',
    'nav.partners': 'Partners',
    'nav.contact': 'Contacto',
    'nav.join': 'Únete',
    'hero.title': 'Acelerando Hacia un Futuro Sostenible',
    'hero.subtitle': 'Impulsando la próxima generación de movilidad solar con un compromiso con la innovación sostenible y tecnología de vanguardia.',
    'hero.learnMore': 'Conoce Más',
    'hero.joinTeam': 'Únete al Equipo',
    'countdown.title': 'Tiempo Hasta la Carrera',
    'countdown.days': 'Días',
    'countdown.hours': 'Horas',
    'countdown.minutes': 'Minutos',
    'countdown.seconds': 'Segundos',
    'home.title': 'El Futuro de las Carreras Solares',
    'home.subtitle': 'Impulsando la próxima generación de movilidad solar con un compromiso con la innovación sostenible y tecnología de vanguardia.',
    'home.features.innovation.title': 'Innovación',
    'home.features.innovation.description': 'Exploramos continuamente nuevas fronteras en aerodinámica, eficiencia energética y movilidad solar. Al integrar tecnologías de vanguardia, optimizamos el rendimiento y empujamos los límites de la ingeniería sostenible.',
    'home.features.sustainability.title': 'Sostenibilidad',
    'home.features.sustainability.description': 'La sostenibilidad está en el corazón de nuestra misión. A través de la investigación avanzada en energía renovable, buscamos crear soluciones de transporte ecológicas que contribuyan a un futuro más limpio y eficiente.',
    'home.features.education.title': 'Educación',
    'home.features.education.description': 'Nuestro equipo fomenta el intercambio de conocimientos y la experiencia práctica, empoderando a la próxima generación de ingenieros. Proporcionamos desafíos del mundo real que mejoran las habilidades técnicas y promueven la innovación futura.',
    'about.title': 'Sobre Helios Race UPV',
    'about.subtitle': 'Desde la tierra del sol, para el resto del mundo. Conoce nuestra historia, nuestra misión y nuestros valores.',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.text1': 'Impulsar la innovación en movilidad sostenible mediante el diseño, la construcción y la optimización de vehículos eléctricos solares de alto rendimiento. Buscamos desafiar los límites de la eficiencia energética, promover la adopción de tecnologías limpias y formar a la próxima generación de ingenieros comprometidos con un futuro más verde.',
    'about.vision.title': 'Visión',
    'about.vision.text': 'Ser un referente internacional en el desarrollo de vehículos eléctricos solares, liderando la investigación y la aplicación de soluciones innovadoras que contribuyan a la creación de un sistema de transporte sostenible, eficiente y accesible. Aspiramos a inspirar a la sociedad a adoptar un estilo de vida más respetuoso con el medio ambiente, demostrando el potencial de la energía solar como fuente de energía limpia y renovable para la movilidad.',
    'about.values.title': 'Valores',
    'about.values.innovation': 'Innovación',
    'about.values.innovation.text': 'Fomentamos la creatividad, la experimentación y la búsqueda constante de nuevas soluciones para mejorar el rendimiento, la eficiencia y la sostenibilidad de nuestros vehículos.',
    'about.values.sustainability': 'Sostenibilidad',
    'about.values.sustainability.text': 'Priorizamos el uso de materiales y tecnologías respetuosas con el medio ambiente, minimizando el impacto ambiental de nuestros procesos y productos.',
    'about.values.teamwork': 'Trabajo en Equipo',
    'about.values.teamwork.text': 'Creemos en la colaboración, el respeto mutuo y la comunicación abierta como pilares fundamentales para alcanzar nuestros objetivos.',
    'about.values.commitment': 'Compromiso',
    'about.values.commitment.text': 'Estamos dedicados a la misión de HeliosRace UPV, asumiendo la responsabilidad de nuestros actos y trabajando con pasión y determinación para lograr nuestros objetivos.',
    'about.competition.title': 'Competición',
    'about.competition.text': 'La ILumen European Solar Challenge (IESC) busca el desarrollo de la tecnología de propulsión de vehículos por medio de energía de procedencia solar, mediante la competitividad amistosa entre los equipos participantes. Durante los días 22 y 23 de agosto de 2024, el equipo de HeliosRace UPV tuvo el placer y oportunidad de participar junto a su primer prototipo en el circuito Zolder en Heusden-Zolder, Bélgica.',
    'about.vehicles.title': 'Conoce nuestros vehículos',
    'about.vehicles.prototype1': 'Nuestro primer prototipo. El comienzo de un legado.',
    'about.vehicles.prototype2': 'Nuestra segunda apuesta. El futuro de Helios Race UPV.',
    'about.findUs.title': 'Encuéntranos',
    'team.title': 'Conoce a Nuestro Equipo',
    'team.subtitle': 'Estudiantes trabajando juntos para impulsar los límites de las carreras solares y desarrollar la movilidad sostenible del futuro.',
    'team.description': 'Nuestro equipo está formado por estudiantes apasionados de varias disciplinas de ingeniería, trabajando juntos para crear soluciones innovadoras de carreras solares. Cada miembro aporta habilidades y perspectivas únicas al proyecto.',
    'partners.title': 'Nuestros Partners',
    'partners.subtitle': 'La colaboración es clave para nuestro éxito. Conoce a las organizaciones que apoyan nuestra misión.',
    'partners.becomePartner.title': 'Conviértete en Partner',
    'partners.becomePartner.text': 'Únete a nuestra misión de avanzar en la tecnología de transporte sostenible. Colabora con HeliosRace UPV y sé parte del futuro de las carreras solares.',
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Tienes preguntas o quieres saber más sobre HeliosRace UPV? Ponte en contacto con nosotros.',
    'contact.nameLabel': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailLabel': 'Email',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.messageLabel': 'Mensaje',
    'contact.messagePlaceholder': 'Tu mensaje...',
    'contact.submitButton': 'Enviar mensaje',
    'contact.sendingButton': 'Enviando...',
    'contact.successTitle': '¡Mensaje enviado!',
    'contact.successDescription': 'Nos pondremos en contacto contigo lo antes posible.',
    'contact.errorTitle': 'Error',
    'contact.errorDescription': 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
    'join.title': 'Únete a Nuestro Equipo',
    'join.subtitle': 'Sé parte del futuro de la tecnología de carreras sostenibles',
    'join.readyTitle': '¿Listo para Unirte?',
    'join.readyText': 'Aplica ahora a través de nuestro formulario. ¡Esperamos conocerte!',
    'join.apply': 'Aplicar Ahora',
    'join.titlend': '¿Quieres unirte?',
    'join.description': 'Si te apasiona la tecnología, la innovación y el automovilismo, ¡únete! Trabaja con nosotros de cerca para desarrollar un sistema de propulsión sostenible y eficiente. ¡Te esperamos!',
    'join.button': 'Apúntate',
  },
} as const;

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}