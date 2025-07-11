import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

import enHome from "@/../messages/en/homepage.json";
import enNavbar from "@/../messages/en/navbar.json";
import enLogin from "@/../messages/en/login.json";
import enProfile from "@/../messages/en/profile.json";
import enErrors from "@/../messages/en/errors.json";
import enMembership from "@/../messages/en/membership.json";

import esHome from "@/../messages/es/homepage.json";
import esNavbar from "@/../messages/es/navbar.json";
import esLogin from "@/../messages/es/login.json";
import esProfile from "@/../messages/es/profile.json";
import esErrors from "@/../messages/es/errors.json"
import esMembership from "@/../messages/es/membership.json"

import frHome from "@/../messages/fr/homepage.json";
import frNavbar from "@/../messages/fr/navbar.json";
import frLogin from "@/../messages/fr/login.json";
import frProfile from "@/../messages/fr/profile.json";
import frMembership from "@/../messages/fr/membership.json"
import frErrors from "@/../messages/fr/errors.json"

import jaHome from "@/../messages/ja/homepage.json";
import jaNavbar from "@/../messages/ja/navbar.json";
import jaLogin from "@/../messages/ja/login.json";
import jaProfile from "@/../messages/ja/profile.json";
import jaErrors from "@/../messages/ja/errors.json"
import jaMembership from "@/../messages/ja/membership.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(I18NextHttpBackend)
  .init({
    resources: {
      en: {
        home: enHome,
        navbar: enNavbar,
        login: enLogin,
        profile: enProfile,
        errors: enErrors,
        membership: enMembership
      },
      es: {
        home: esHome,
        navbar: esNavbar,
        login: esLogin,
        profile: esProfile,
        errors: esErrors,
        membership: esMembership
      },
      fr: {
        home: frHome,
        navbar: frNavbar,
        login: frLogin,
        profile: frProfile,
        errors: frErrors,
        membership: frMembership
      },
      ja: {
        home: jaHome,
        navbar: jaNavbar,
        login: jaLogin,
        profile: jaProfile,
        errors: jaErrors,
        membership: jaMembership
      }
    },
    fallbackLng: "en",
    supportedLngs: ["es","en","fr","ja" ],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
