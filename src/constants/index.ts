import type { NavItem, ServiceItem, FeatureItem } from '../types';

export const NAV_LINKS: NavItem[] = [
    { label: 'Precios', href: '#pricing' },
    { label: 'Servicios', href: '#services' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Reservá', href: '#booking' },
];

export const SERVICES: ServiceItem[] = [
    {
        id: 's1',
        title: 'Clases de Yoga para adultos',
        description: 'Combiná movimiento, respiración y meditación para promover el bienestar físico y mental.',
        icon: '🧘‍♀️'
    },
    {
        id: 's2',
        title: 'Clases de Yoga para niños',
        description: 'Una experiencia transformadora que combina yoga, meditación y bienestar integral para los pequeños.',
        icon: '🌴'
    },
    {
        id: 's3',
        title: 'Masajes Shiatsu',
        description: 'El masaje shiatsu es una técnica terapéutica japonesa que utiliza la presión de los dedos y las palmas para estimular puntos específicos del cuerpo, promoviendo el bienestar físico y emocional.',
        icon: '🧘‍♂️'
    },
    {
        id: 's4',
        title: 'Flores de Bach',
        description: 'Sesiones personalizadas adaptadas a lo que necesitás, método terapéutico que utiliza esencias naturales extraídas de flores para equilibrar las emociones y promover el bienestar integral.',
        icon: '🎯'
    }
];

export const FEATURES: FeatureItem[] = [
    {
        id: 'f1',
        title: 'Crecer',
        description: 'Desarrollá nuevas habilidades y expandí tu capacidad para crecer tanto personal como profesionalmente.'
    },
    {
        id: 'f2',
        title: 'Fluir',
        description: 'Encontrá tu propio ritmo y cultivá un estado de fluidez en tus rutinas diarias y creativas.'
    },
    {
        id: 'f3',
        title: 'Brillar',
        description: 'Irradiá salud y vitalidad con prácticas que nutren de verdad tu cuerpo, mente y espíritu.'
    }
];
