import { LucideIcon } from 'lucide-react';

export interface ServicePackage {
  title: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  packages: ServicePackage[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavLink {
  name: string;
  href: string;
}