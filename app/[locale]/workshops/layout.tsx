import Header from '@/components/Header/Header';

export default function PodcastsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-x-hidden flex flex-col items-center">
      <Header />
      {children}
    </section>
  );
}
