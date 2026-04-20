import Link from 'next/link';

type Props = {
  locale: 'en' | 'es';
  client: string;
  category: string;
  color: string;
  breadcrumbWork: string;
};

export default function CaseStudyHero({
  locale,
  client,
  category,
  color,
  breadcrumbWork,
}: Props) {
  return (
    <header className="bg-cream border-b border-border">
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-14">
        <nav aria-label="Breadcrumb" className="text-sm text-warm-gray">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${locale}#work`}
                className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              >
                {breadcrumbWork}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-charcoal">
              {client}
            </li>
          </ol>
        </nav>

        <p className="mt-8 text-xs font-medium text-accent uppercase tracking-widest">
          {category}
        </p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
          {client}
        </h1>

        <div
          className="mt-10 aspect-video rounded-xl border border-border overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: `${color}1F` }}
          role="img"
          aria-label={`${client} placeholder hero`}
        >
          <div
            className="h-2 w-32 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </header>
  );
}
