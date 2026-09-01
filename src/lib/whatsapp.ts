import { siteConfig } from "@/config/site";
export function buildWhatsAppUrl(message:string){if(!siteConfig.whatsapp)return "#";return `https://wa.me/${siteConfig.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent(message)}`}
