"use client";

const dictionaries: any = {
  en: () =>
    import("../dictionaries/en.json").then(
      (module) => module.default
    ),
  nl: () =>
    import("../dictionaries/nl.json").then(
      (module) => module.default
    ),
  it: () =>
    import("../dictionaries/nl.json").then(
      (module) => module.default
    ),
  es: () =>
    import("../dictionaries/sp.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: any) => {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  } else {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }
};
