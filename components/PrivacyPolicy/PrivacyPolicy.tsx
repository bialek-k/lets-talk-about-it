'use client';
import type { DocsQueryQuery } from '@/graphql/generated';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Data, MapWindow } from '@/components/Modal/Modal';

export const PrivacyPolicy = (doc: DocsQueryQuery) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Data | undefined>();

  const modalOpenHandler = (title: string) => {
    if (title === 'regulations') {
      setModalData({
        title: 'Regulamin',
        content: doc?.doc?.regulation.raw,
      });
      setIsOpen(true);
    }
    if (title === 'privacyPolicy') {
      setModalData({
        title: 'Polityka Prywatności',
        content: doc?.doc?.private_policy.raw,
      });
      setIsOpen(true);
    }
  };

  return (
    <>
      <>
        <button
          aria-label="Otwórz regulamin"
          onClick={() => modalOpenHandler('regulations')}
          className="text-left"
        >
          {t('regulations')}
        </button>
        <button
          aria-label="Otwórz politykę prywatności"
          onClick={() => modalOpenHandler('privacyPolicy')}
          className="text-left"
        >
          {t('privacyPolicy')}
        </button>
      </>
      {isOpen && (
        <MapWindow isOpen={isOpen} setIsOpen={setIsOpen} data={modalData} />
      )}
    </>
  );
};
