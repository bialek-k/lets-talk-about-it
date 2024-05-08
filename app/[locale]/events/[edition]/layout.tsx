import Header from '@/components/Header/Header';

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-x-hidden flex flex-col items-center">
      <Header isMain={false} />
      {children}
    </section>
  );
}
