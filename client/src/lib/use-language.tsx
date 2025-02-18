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
    'hero.subtitle': 'HeliosRace UPV is a student-led solar racing team pushing the boundaries of sustainable mobility through innovation and determination.',
    'hero.learnMore': 'Learn More',
    'hero.joinTeam': 'Join the Team',
    'about.title': 'About HeliosRace UPV',
    'about.subtitle': 'Pioneering sustainable mobility through solar-powered racing innovation',
    'about.mission.title': 'Our Mission',
    'about.mission.text1': 'At HeliosRace UPV, we are dedicated to pushing the boundaries of solar-powered mobility while nurturing the next generation of sustainable technology innovators. Our team combines engineering excellence with environmental consciousness to create cutting-edge solar racing vehicles.',
    'about.mission.text2': 'Through participation in international solar racing competitions, we demonstrate the viability of solar power in transportation and inspire others to embrace sustainable technologies.',
    'team.title': 'Meet Our Team',
    'team.subtitle': 'Dedicated students and faculty working together to push the boundaries of solar racing',
    'team.description': 'Our team consists of passionate students from various engineering disciplines, working together to create innovative solar-powered racing solutions. Each member brings unique skills and perspectives to the project.',
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Collaboration is key to our success. Meet the organizations that support our mission.',
    'partners.becomePartner.title': 'Become a Partner',
    'partners.becomePartner.text': 'Join us in our mission to advance sustainable transportation technology. Partner with HeliosRace UPV and be part of the future of solar racing.',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions or want to learn more about HeliosRace UPV? Get in touch with us.',
    'join.title': 'Join Our Team',
    'join.subtitle': 'Be part of the future of sustainable racing technology',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.submit': 'Submit',
    'form.sending': 'Sending...',
  },
  es: {
    'nav.about': 'Acerca',
    'nav.team': 'Equipo',
    'nav.partners': 'Partners',
    'nav.contact': 'Contacto',
    'nav.join': 'Únete',
    'hero.title': 'Corriendo Hacia un Futuro Sostenible',
    'hero.subtitle': 'HeliosRace UPV es un equipo estudiantil de carreras solares que impulsa los límites de la movilidad sostenible a través de la innovación y la determinación.',
    'hero.learnMore': 'Conoce Más',
    'hero.joinTeam': 'Únete al Equipo',
    'about.title': 'Sobre HeliosRace UPV',
    'about.subtitle': 'Pioneros en movilidad sostenible a través de la innovación en carreras solares',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.text1': 'En HeliosRace UPV, nos dedicamos a impulsar los límites de la movilidad solar mientras formamos a la próxima generación de innovadores en tecnología sostenible. Nuestro equipo combina la excelencia en ingeniería con la conciencia ambiental para crear vehículos de carreras solares de vanguardia.',
    'about.mission.text2': 'A través de la participación en competiciones internacionales de carreras solares, demostramos la viabilidad de la energía solar en el transporte e inspiramos a otros a adoptar tecnologías sostenibles.',
    'team.title': 'Conoce a Nuestro Equipo',
    'team.subtitle': 'Estudiantes y profesores dedicados trabajando juntos para impulsar los límites de las carreras solares',
    'team.description': 'Nuestro equipo está formado por estudiantes apasionados de varias disciplinas de ingeniería, trabajando juntos para crear soluciones innovadoras de carreras solares. Cada miembro aporta habilidades y perspectivas únicas al proyecto.',
    'partners.title': 'Nuestros Partners',
    'partners.subtitle': 'La colaboración es clave para nuestro éxito. Conoce a las organizaciones que apoyan nuestra misión.',
    'partners.becomePartner.title': 'Conviértete en Partner',
    'partners.becomePartner.text': 'Únete a nuestra misión de avanzar en la tecnología de transporte sostenible. Colabora con HeliosRace UPV y sé parte del futuro de las carreras solares.',
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Tienes preguntas o quieres saber más sobre HeliosRace UPV? Ponte en contacto con nosotros.',
    'join.title': 'Únete a Nuestro Equipo',
    'join.subtitle': 'Sé parte del futuro de la tecnología de carreras sostenibles',
    'form.name': 'Nombre',
    'form.email': 'Correo electrónico',
    'form.message': 'Mensaje',
    'form.submit': 'Enviar',
    'form.sending': 'Enviando...',
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