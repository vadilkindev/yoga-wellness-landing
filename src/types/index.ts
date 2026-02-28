export interface NavItem {
    label: string;
    href: string;
}

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface FeatureItem {
    id: string;
    title: string;
    description: string;
}

export interface TestimonialItem {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    image: string;
}
