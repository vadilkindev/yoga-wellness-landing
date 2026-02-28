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
        title: 'Clase de Yoga',
        description: 'Una práctica suave y restaurativa pensada para ayudarte a relajar, soltar tensiones y reconectar con vos misma.',
        icon: '🧘‍♀️'
    },
    {
        id: 's2',
        title: 'Retiro de Yoga',
        description: 'Sumergite en una experiencia transformadora que combina yoga, meditación y bienestar integral.',
        icon: '🌴'
    },
    {
        id: 's3',
        title: 'Sesión de Meditación',
        description: 'Prácticas de meditación guiada para cultivar la atención plena, bajar el estrés y encontrar claridad mental.',
        icon: '🧘‍♂️'
    },
    {
        id: 's4',
        title: 'Coaching Personal',
        description: 'Sesiones personalizadas adaptadas a lo que necesitás, enfocadas en tu crecimiento personal y en lograr tus metas.',
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
