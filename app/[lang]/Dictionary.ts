
const dictionaries = {
  fa: () =>
    import("@/public/assets/locales/fa/common").then(
      (module) => module.default
    ),
  en: () =>
    import("@/public/assets/locales/en/common").then(
      (module) => module.default
    ),
  ar: () =>
    import("@/public/assets/locales/ar/common").then(
      (module) => module.default
    ),
};
// @ts-ignore
export const getDictionary = async (locale: string) => dictionaries[locale]();
