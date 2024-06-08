import Header from '@/components/Header/Header';

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-x-hidden w-full flex flex-col items-center">
      <Header />
      {children}
    </section>
  );
}
