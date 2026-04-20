type Props = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  featuredLabel?: string;
};

export default function PricingTierCard({
  name,
  price,
  tagline,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
  featuredLabel,
}: Props) {
  return (
    <div
      className={`relative bg-white rounded-xl p-8 h-full flex flex-col ${
        featured ? 'border-2 border-accent shadow-lg' : 'border border-border'
      }`}
    >
      {featured && featuredLabel && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
          {featuredLabel}
        </span>
      )}

      <h3 className="font-serif text-xl font-bold text-charcoal">{name}</h3>
      <p className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-charcoal">
        {price}
      </p>
      <p className="mt-3 text-warm-gray leading-relaxed">{tagline}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-warm-gray leading-relaxed"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
