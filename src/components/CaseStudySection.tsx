type Props = {
  heading: string;
  children: React.ReactNode;
};

export default function CaseStudySection({ heading, children }: Props) {
  return (
    <section>
      <h2 className='mb-4 font-serif text-2xl font-bold text-charcoal sm:text-3xl'>{heading}</h2>
      {children}
    </section>
  );
}
