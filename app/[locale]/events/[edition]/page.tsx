import initTranslations from '@/app/i18n';
import Edition from '@/components/Edition/Edition';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';

const EventPage = async ({
  params: { locale, edition },
}: {
  params: { locale: string; edition: number };
}) => {
  const i18nNamespaces = ['edition'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Edition locale={locale} edition={edition} translation={t} />
    </TranslationsProvider>
  );
};

export default EventPage;
