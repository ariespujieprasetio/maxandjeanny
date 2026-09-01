export const siteConfig = {
  brand: "MAX & JEANNY", descriptor: "Yamaha Music School",
  title: "Max & Jeanny | Music School",
  description: "Discover music programs, locations, and trial classes at Max & Jeanny.",
  email: null as string | null, phone: null as string | null, whatsapp: null as string | null, address: null as string | null,
  navigation: [
    { label: "Programs", href: "/programs" }, { label: "Locations", href: "/locations" },
    { label: "About Us", href: "/about" }, { label: "Events", href: "/#events" }, { label: "Contact", href: "/contact" },
  ],
  social: { instagram: "#", facebook: "#", youtube: "#" },
  contentNotice: "Prototype content pending verification by Max & Jeanny.",
} as const;
