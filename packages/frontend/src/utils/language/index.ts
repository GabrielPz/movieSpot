import { create } from 'zustand';

type LanguageProps = {
  language: 'en' | 'pt' | 'fr';
};

const language: LanguageProps = {
  language: 'en',
};

type UseLanguageProps = {
  language: LanguageProps;
  setLanguage: (languageSet: LanguageProps) => void;
};

export const useLanguage = create<UseLanguageProps>((set) => ({
  language,
  setLanguage: (languageSet: LanguageProps) =>
    set({
      language: languageSet,
    }),
}));
