import type { NavItem, ServiceItem, FeatureItem } from '../types';

export const NAV_LINKS: NavItem[] = [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Services', href: '#services' },
    { label: 'About Me', href: '#about' },
    { label: 'Book Now', href: '#booking' },
];

export const SERVICES: ServiceItem[] = [
    {
        id: 's1',
        title: 'Yoga Class',
        description: 'A gentle and restorative yoga practice designed to help you relax, release tension, and reconnect with your body.',
        icon: '🧘‍♀️'
    },
    {
        id: 's2',
        title: 'Yoga Retreat',
        description: 'Immerse yourself in a transformative experience that combines yoga, meditation, and holistic wellness.',
        icon: '🌴'
    },
    {
        id: 's3',
        title: 'Meditation Session',
        description: 'Guided meditation practices to cultivate mindfulness, reduce stress, and promote mental clarity.',
        icon: '🧘‍♂️'
    },
    {
        id: 's4',
        title: 'Personal Coaching',
        description: 'One-on-one sessions tailored to your specific needs, focusing on personal growth and goal achievement.',
        icon: '🎯'
    }
];

export const FEATURES: FeatureItem[] = [
    {
        id: 'f1',
        title: 'Grow',
        description: 'Develop new skills and expand your capacity for personal and professional growth.'
    },
    {
        id: 'f2',
        title: 'Flow',
        description: 'Find your rhythm and cultivate a state of flow in your daily activities and creative pursuits.'
    },
    {
        id: 'f3',
        title: 'Glow',
        description: 'Radiate health and vitality with practices that nourish your body, mind, and spirit.'
    }
];
