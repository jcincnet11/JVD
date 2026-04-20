type Props = {
  heading: string;
  children: React.ReactNode;
};

export default function CaseStudySection({ heading, children }: Props) {
  return (
    <section>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
        {heading}
      </h2>
      {children}
    </section>
  );
}
