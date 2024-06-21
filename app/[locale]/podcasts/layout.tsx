import Header from '@/components/Header/Header';

export default function PodcastsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <section className="overflow-x-hidden flex flex-col items-center">
      <Header locale={locale} />
      {children}
    </section>
  );
}
