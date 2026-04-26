export type Locale = 'en' | 'es';

export type CaseStudy = {
  slug: string;
  client: string;
  color: string;
  category: Record<Locale, string>;
  brief: Record<Locale, string>;
  challenge: Record<Locale, string>;
  approach: Record<Locale, string[]>;
  outcome: Record<Locale, string>;
  stack: string[];
  liveUrl: string;
  heroImage?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'imperfect-gaming',
    client: 'IMPerfect Gaming',
    color: '#C8E400',
    category: {
      en: 'Esports / Team Management',
      es: 'Esports / Gestión de Equipo',
    },
    brief: {
      en: 'A Puerto Rico esports organization competing in OW2 and Marvel Rivals needed a way to run the business side — rosters, scrims, announcements — without their coaching staff touching code.',
      es: 'Una organización de esports de Puerto Rico compitiendo en OW2 y Marvel Rivals necesitaba una forma de manejar el lado operativo — rosters, scrims, anuncios — sin que el staff de coaching tocara el código.',
    },
    challenge: {
      en: 'Building a bilingual org management system that could handle roster moves, scrim scheduling, and team announcements — all without requiring the coaching staff to touch the codebase. The solution was a role-based Team Hub with scoped permissions for Admin, Coach, and Manager roles.',
      es: 'Construir un sistema bilingüe de gestión de organización que pudiera manejar movimientos de roster, programación de scrims y anuncios del equipo — todo sin requerir que el staff de coaching tocara el código. La solución fue un Team Hub basado en roles con permisos para Admin, Coach y Manager.',
    },
    approach: {
      en: [
        'Designed a role-based permission system with three tiers: Admin, Coach, Manager',
        'Built a bilingual content system with next-intl for parallel EN/ES management',
        'Created a Team Hub dashboard for scrim scheduling and roster moves',
        'Implemented a three-strike tracking system for player accountability',
      ],
      es: [
        'Diseñamos un sistema de permisos basado en roles con tres niveles: Admin, Coach, Manager',
        'Construimos un sistema de contenido bilingüe con next-intl para gestión paralela EN/ES',
        'Creamos un dashboard Team Hub para programación de scrims y movimientos de roster',
        'Implementamos un sistema de seguimiento de tres strikes para responsabilidad del jugador',
      ],
    },
    outcome: {
      en: 'Coaching staff now runs the full organization without developer involvement. Bilingual parity across every roster announcement, scrim schedule, and team update.',
      es: 'El staff de coaching ahora maneja la organización completa sin involucrar desarrolladores. Paridad bilingüe en cada anuncio de roster, horario de scrim y actualización del equipo.',
    },
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'next-intl', 'Supabase', 'Framer Motion'],
    liveUrl: 'https://imperfectgg.com/en',
  },
  {
    slug: 'emmalina',
    client: 'Emmalina',
    color: '#C9A96E',
    category: {
      en: 'Luxury Fashion / Personal Styling',
      es: 'Moda de Lujo / Estilismo Personal',
    },
    brief: {
      en: 'A personal stylist affiliated with Saks, Neiman Marcus, and Bergdorf Goodman needed a site that converted casual visitors into private styling clients — while still monetizing through affiliate links.',
      es: 'Una estilista personal afiliada a Saks, Neiman Marcus y Bergdorf Goodman necesitaba un sitio que convirtiera visitantes casuales en clientas de estilismo privado — mientras monetizaba a través de enlaces de afiliados.',
    },
    challenge: {
      en: 'The client needed to convert casual site visitors into private styling clients, while simultaneously driving affiliate sales through Saks, Neiman Marcus, and Bergdorf Goodman. We restructured the site around her personal brand first, with affiliate commerce as a secondary layer — not the other way around.',
      es: 'La clienta necesitaba convertir visitantes casuales en clientes de estilismo privado, mientras simultáneamente impulsaba ventas de afiliados a través de Saks, Neiman Marcus y Bergdorf Goodman. Reestructuramos el sitio alrededor de su marca personal primero, con el comercio de afiliados como capa secundaria — no al revés.',
    },
    approach: {
      en: [
        'Led with personal-brand storytelling — bio, services, and stylist voice above affiliate commerce',
        'Built a clean booking flow that routes serious inquiries into a high-intent funnel',
        'Integrated affiliate product grids as a supporting monetization layer, not the hero',
        'Designed for editorial browsing — generous typography, slow scroll pacing, luxury palette',
      ],
      es: [
        'Lideramos con narrativa de marca personal — bio, servicios y voz de estilista por encima del comercio de afiliados',
        'Construimos un flujo de reservas limpio que canaliza consultas serias hacia un embudo de alta intención',
        'Integramos grillas de productos afiliados como capa secundaria de monetización, no como protagonista',
        'Diseñamos para navegación editorial — tipografía generosa, ritmo de scroll pausado, paleta de lujo',
      ],
    },
    outcome: {
      en: 'The site now reads as a stylist brand first and a shop second. Booking inquiries arrive pre-qualified, and affiliate clicks still flow through without cannibalizing the core offer.',
      es: 'El sitio ahora se lee como una marca de estilista primero y una tienda después. Las consultas de reserva llegan pre-calificadas, y los clics de afiliados siguen fluyendo sin canibalizar la oferta principal.',
    },
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Framer Motion', 'Formspree'],
    liveUrl: 'https://emmalina-brand.vercel.app',
  },
  {
    slug: 'magenta-the-label',
    client: 'Magenta The Label',
    color: '#C4587A',
    category: {
      en: 'E-Commerce / Handcrafted Fashion',
      es: 'E-Commerce / Moda Artesanal',
    },
    brief: {
      en: 'A handcrafted handbag brand needed a Shopify storefront where every item is one-of-a-kind — a structural mismatch with standard e-commerce flows that assume repeatable SKUs.',
      es: 'Una marca de carteras artesanales necesitaba una tienda Shopify donde cada artículo es único — un desajuste estructural con los flujos estándar de e-commerce que asumen SKUs repetibles.',
    },
    challenge: {
      en: 'Launching a Shopify store for a handcrafted product brand where every item is one-of-a-kind created a unique inventory problem — standard e-commerce flows assume repeatable SKUs. We built a custom product structure that communicated scarcity as a feature, not a limitation, which directly improved conversion.',
      es: 'Lanzar una tienda Shopify para una marca de productos artesanales donde cada artículo es único creó un problema de inventario particular — los flujos estándar de e-commerce asumen SKUs repetibles. Construimos una estructura de producto personalizada que comunicaba la escasez como una característica, no una limitación, lo que mejoró directamente la conversión.',
    },
    approach: {
      en: [
        'Restructured the product catalog so each handbag reads as a unique edition, not a depleted SKU',
        'Copy-led product pages that frame scarcity as craftsmanship, not inventory failure',
        'Streamlined checkout with clear one-of-one messaging so buyers act quickly',
        'Built a collection system that groups pieces thematically without implying restock',
      ],
      es: [
        'Reestructuramos el catálogo para que cada cartera se lea como una edición única, no un SKU agotado',
        'Páginas de producto guiadas por copy que enmarcan la escasez como artesanía, no como falta de inventario',
        'Checkout optimizado con mensaje claro de pieza única para que las compradoras actúen rápido',
        'Construimos un sistema de colecciones que agrupa piezas temáticamente sin sugerir reposición',
      ],
    },
    outcome: {
      en: 'Scarcity became a selling point instead of a checkout friction. The brand voice now carries consistently from homepage through product detail to confirmation.',
      es: 'La escasez se convirtió en argumento de venta en lugar de una fricción de checkout. La voz de marca ahora fluye consistentemente desde la portada hasta el detalle de producto y la confirmación.',
    },
    stack: ['Shopify', 'Liquid', 'Tailwind', 'Custom Theme'],
    liveUrl: 'https://magentathelabel.vercel.app',
  },
  {
    slug: 'profumo-di-vita',
    client: 'Profumo di Vita',
    color: '#8B6F47',
    category: {
      en: 'Fragrance Retail / Bilingual Commerce',
      es: 'Comercio de Fragancias / E-Commerce Bilingüe',
    },
    brief: {
      en: 'A luxury fragrance retailer with two physical Puerto Rico locations needed a fully bilingual online presence without doubling the content operations workload.',
      es: 'Un minorista de fragancias de lujo con dos ubicaciones físicas en Puerto Rico necesitaba una presencia bilingüe en línea sin duplicar la carga operativa de contenido.',
    },
    challenge: {
      en: 'Operating as a fully bilingual EN/ES store with two physical Puerto Rico locations meant every piece of content — product descriptions, membership tier details, store hours, promotional copy — had to be maintained in parallel without creating double the workload. We implemented a translation management system that kept both languages in sync with a single content update.',
      es: 'Operar como una tienda completamente bilingüe EN/ES con dos ubicaciones físicas en Puerto Rico significaba que cada pieza de contenido — descripciones de productos, detalles de membresía, horarios, texto promocional — tenía que mantenerse en paralelo sin crear el doble de trabajo. Implementamos un sistema de gestión de traducciones que mantuvo ambos idiomas sincronizados con una sola actualización de contenido.',
    },
    approach: {
      en: [
        'Set up a translation management layer so new products publish in EN/ES from a single edit',
        'Designed membership tier pages that read naturally in both languages, not word-for-word translations',
        'Integrated store locator with hours and promotions synced across both locales',
        'Built a content workflow the client can run without engineering support',
      ],
      es: [
        'Configuramos una capa de gestión de traducciones para que los productos nuevos se publiquen en EN/ES desde una sola edición',
        'Diseñamos páginas de membresía que se leen con naturalidad en ambos idiomas, no traducciones palabra por palabra',
        'Integramos un localizador de tiendas con horarios y promociones sincronizados en ambos idiomas',
        'Construimos un flujo de contenido que el cliente puede operar sin soporte de ingeniería',
      ],
    },
    outcome: {
      en: 'Content parity across languages without parallel workflows. Store updates now ship to both locales from a single edit, and the membership funnel reads natively in EN and ES.',
      es: 'Paridad de contenido entre idiomas sin flujos paralelos. Las actualizaciones de tienda ahora se publican en ambos idiomas desde una sola edición, y el embudo de membresía se lee con naturalidad en EN y ES.',
    },
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'next-intl', 'Radix UI'],
    liveUrl: 'https://v0-perfume-store-clone-eight.vercel.app',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getOtherCaseStudies(slug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.slug !== slug);
}
