interface AssetReference {
  _id: string;
  _type: string;
  url: string;
}

export interface SiteLanguages {
  active: boolean;
  language: string;
  languageCode: string;
  icon: {
    _type: string;
    asset: AssetReference;
  };
}
