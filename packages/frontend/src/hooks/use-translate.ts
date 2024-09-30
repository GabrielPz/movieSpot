"use client";

import { useLanguage } from "@/utils/language";
import * as enUS from "../messages/en";
import * as ptBR from "../messages/pt";

export const useTranslate = () => {
  const { language: languagetest } = useLanguage();
  let selectedMessages;
  switch (languagetest.language) {
    case "pt":
      selectedMessages = ptBR.messages;
      break;
    case "en":
      selectedMessages = enUS.messages;
      break;
    default:
      selectedMessages = enUS.messages;
  }
  return selectedMessages;
};
