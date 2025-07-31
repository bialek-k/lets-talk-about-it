'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkbox: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const { t } = useTranslation();

  const validateName = (name: string) => {
    let trimmedName = name.trim();

    // Sprawdzenie długości
    if (trimmedName.length > 254) {
      setNameError('Imię i nazwisko jest za długie (maksymalnie 254 znaki)');
      return false;
    }

    // Normalizacja spacji (usuwanie wielokrotnych spacji)
    trimmedName = trimmedName.replace(/\s+/g, ' ');

    // Sprawdzenie czy nie zaczyna się lub kończy myślnikiem
    if (trimmedName.startsWith('-') || trimmedName.endsWith('-')) {
      setNameError(
        'Imię i nazwisko nie może zaczynać się ani kończyć myślnikiem'
      );
      return false;
    }

    // Sprawdzenie czy nie ma wielokrotnych myślników
    if (trimmedName.includes('--')) {
      setNameError('Imię i nazwisko nie może zawierać wielokrotnych myślników');
      return false;
    }

    // Sprawdzenie czy nazwa zawiera tylko litery, spacje i myślniki
    const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\-]+$/;
    if (!nameRegex.test(trimmedName)) {
      setNameError('Imię i nazwisko może zawierać tylko litery');
      return false;
    }

    // Sprawdzenie czy nie zawiera cyfr
    if (/\d/.test(trimmedName)) {
      setNameError('Imię i nazwisko nie może zawierać cyfr');
      return false;
    }

    const nameParts = trimmedName.split(' ').filter((part) => part.length > 0);

    if (nameParts.length < 2) {
      setNameError('Proszę podać imię i nazwisko (np. Jan Kowalski)');
      return false;
    }

    if (nameParts.some((part) => part.length < 2)) {
      setNameError('Imię i nazwisko muszą mieć co najmniej 2 znaki każde');
      return false;
    }

    setNameError('');
    return true;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const trimmedEmail = email.trim();

    if (!emailRegex.test(trimmedEmail)) {
      setEmailError('Proszę podać poprawny adres email (np. jan@example.com)');
      return false;
    }

    if (trimmedEmail.length > 254) {
      setEmailError('Adres email jest za długi');
      return false;
    }

    setEmailError('');
    return true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, name: value });

    if (value.trim()) {
      validateName(value);
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });

    if (value.trim()) {
      validateEmail(value);
    } else {
      setEmailError('');
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Walidacja przed wysłaniem
    if (!validateName(formData.name) || !validateEmail(formData.email)) {
      toast.error('Proszę poprawić błędy w formularzu');
      return;
    }

    // Sanityzacja danych przed wysłaniem
    const sanitizedData = {
      name: formData.name
        .trim()
        .replace(/\s+/g, ' ') // normalizacja spacji
        .replace(/[<>]/g, ''), // usuwanie potencjalnie niebezpiecznych znaków
      email: formData.email.trim().toLowerCase(),
      checkbox: formData.checkbox,
    };

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });

      if (res.ok) {
        toast.success(
          'Dziękujemy za udział w konkursie! Formularz został wysłany pomyślnie.',
          {
            duration: 5000,
          }
        );
        setFormData({ name: '', email: '', checkbox: false });
        setNameError('');
        setEmailError('');
      } else {
        toast.error('Przepraszamy, wystąpił błąd. Spróbuj ponownie.', {
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error('Przepraszamy, wystąpił błąd. Spróbuj ponownie.', {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h3 className="text-main-white text-[26px] text-center font-semibold mb-5 mt-[30px]">
        {t('fillform')}
      </h3>
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-4 px-6 lg:px-0 mt-8 text-main-white lg:text-2xl"
        role="form"
        aria-label="Formularz konkursowy"
      >
        <label htmlFor="name">{t('name')}</label>
        <input
          type="text"
          id="name"
          placeholder={t('namePlaceholder')}
          className={`text-black pl-5 border-2 transition-colors ${
            nameError
              ? 'border-red-500 focus:border-red-500'
              : 'border-transparent focus:border-main-yellow'
          }`}
          value={formData.name}
          onChange={handleNameChange}
          required
          aria-required="true"
          aria-invalid={nameError ? 'true' : 'false'}
          aria-describedby={nameError ? 'name-error' : undefined}
        />
        {nameError && (
          <span
            id="name-error"
            className="text-red-400 text-sm -mt-2"
            role="alert"
            aria-live="polite"
          >
            {nameError}
          </span>
        )}

        <label htmlFor="email">{t('email')}</label>
        <input
          type="email"
          id="email"
          placeholder="email@example.com"
          className={`text-black pl-5 border-2 transition-colors ${
            emailError
              ? 'border-red-500 focus:border-red-500'
              : 'border-transparent focus:border-main-yellow'
          }`}
          value={formData.email}
          onChange={handleEmailChange}
          required
          aria-required="true"
          aria-invalid={emailError ? 'true' : 'false'}
          aria-describedby={emailError ? 'email-error' : undefined}
        />
        {emailError && (
          <span
            id="email-error"
            className="text-red-400 text-sm -mt-2"
            role="alert"
            aria-live="polite"
          >
            {emailError}
          </span>
        )}

        <div className="flex items-center gap-3 mt-5">
          <label htmlFor="checkbox" className="relative cursor-pointer">
            <input
              type="checkbox"
              id="checkbox"
              checked={formData.checkbox}
              onChange={(e) =>
                setFormData({ ...formData, checkbox: e.target.checked })
              }
              required
              aria-required="true"
              aria-describedby="checkbox-description"
              className="sr-only peer"
            />
            <div
              className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center peer-focus:ring-2 peer-focus:ring-main-yellow peer-focus:ring-offset-2 peer-focus:ring-offset-black ${
                formData.checkbox
                  ? 'bg-main-yellow border-main-yellow'
                  : 'border-white bg-transparent hover:border-main-yellow'
              }`}
              role="presentation"
              aria-hidden="true"
            >
              {formData.checkbox && (
                <svg
                  className="w-3 h-3 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </label>
          <label
            htmlFor="checkbox"
            className="cursor-pointer leading-tight"
            id="checkbox-description"
          >
            {t('acceptterms')}
          </label>
        </div>

        <input
          type="submit"
          className="bg-main-yellow self-center text-black py-2 px-4 rounded w-min disabled:opacity-50 disabled:cursor-not-allowed mt-5 transition-transform duration-200 hover:scale-105 hover:shadow-lg disabled:hover:scale-100 cursor-pointer"
          value={isSubmitting ? 'Wysyłanie...' : t('sendForm')}
          disabled={isSubmitting}
          aria-describedby="submit-status"
        />

        {/* Screen reader only status for form submission */}
        <div
          id="submit-status"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {isSubmitting ? 'Formularz jest wysyłany...' : ''}
        </div>
      </form>
    </>
  );
};
