'use client';
import type { DocsQueryQuery } from '@/graphql/generated';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapWindow } from '@/components/Modal/Modal';
import { RichText } from '@graphcms/rich-text-react-renderer';

import type { RichTextContent } from '@graphcms/rich-text-types';

export const PrivacyPolicy = (doc: DocsQueryQuery) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title: string;
    content: RichTextContent | null;
  }>({
    title: '',
    content: null,
  });

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
        <MapWindow isOpen={isOpen} setIsOpen={setIsOpen}>
          {modalData.content && (
            <RichText
              content={modalData.content}
              renderers={{
                p: ({ children }) => {
                  return <p className="m-0 mt-6">{children}</p>;
                },
              }}
            />
          )}
        </MapWindow>
      )}
    </>
  );
};
