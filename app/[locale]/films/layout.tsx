import Header from '@/components/Header/Header';

const FilmsLayout =({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) =>{
  return (
    <section className="overflow-x-hidden w-full flex flex-col items-center">
      <Header locale={locale} />
      {children}
    </section>
  );
}

export default FilmsLayout;