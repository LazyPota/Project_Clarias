import {
  LayoutDashboard,
  Droplets,
  Warehouse,
  BadgeDollarSign,
  Fish,
  Waves,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Environment",
    href: "/environment",
    icon: Droplets,
  },
  {
    label: "Ponds",
    href: "/ponds",
    icon: Waves,
  },
  {
    label: "Feeding",
    href: "/feeding",
    icon: Fish,
  },
  {
    label: "Harvest",
    href: "/harvest",
    icon: Warehouse,
  },
  {
    label: "Finance",
    href: "/finance",
    icon: BadgeDollarSign,
  },
];
