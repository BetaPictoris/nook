const translations = {
  en: {
    listenTabTitle: "Listen",
    settingsTabTitle: "Settings",

    morningGreet: "Good morning",
    noonGreet: "Good day",
    afternoonGreet: "Good afternoon",
    nightGreet: "Good night",

    game: "Game",
    gameNH: "New Horizons",
    gameNL: "New Leaf",
    gamePG: "Population Growing",
    gameWW: "Wild World",

    weather: "Weather",
    weatherClear: "Clear",
    weatherRainy: "Rain",
    weatherSnowy: "Snow",

    lang: "Language",

    darkMode: "Dark mode",

    webPort: "This is a web port of",
    animalSounds: "Animal Sounds",
    notAssociated:
      'Not associated with or endorsed by Nintendo, Animal Sounds, or "Animal Radio".',
  },

  de: {
    listenTabTitle: "Hören",
    settingsTabTitle: "Einstellungen",

    morningGreet: "Guten Morgen",
    noonGreet: "Guten Tag",
    afternoonGreet: "Guten Tag",
    nightGreet: "Gute Nacht",

    game: "Videospiel",
    gameNH: "New Horizons",
    gameNL: "New Leaf",
    gamePG: "Population Growing",
    gameWW: "Wild World",

    weather: "Wetter",
    weatherClear: "Klares",
    weatherRainy: "Regen",
    weatherSnowy: "Schnee",

    lang: "Sprache",

    darkMode: "Dunkler Modus",

    webPort: "Dies ist eine webseite Übersetzung von",
    animalSounds: "Animal Sounds",
    notAssociated:
      "Nicht verbunden mit oder gebilligt von Nintendo, Animal Sounds oder «Animal Radio».",
  },

  fr: {
    listenTabTitle: "Écouter",
    settingsTabTitle: "Réglages",

    morningGreet: "Bonjour",
    noonGreet: "Bonjour",
    afternoonGreet: "Bonjour",
    nightGreet: "Bonsoir",

    game: "Jeu vidèo",
    gameNH: "New Horizons",
    gameNL: "New Leaf",
    gamePG: "Population Growing",
    gameWW: "Wild World",

    weather: "Le temps",
    weatherClear: "Clair",
    weatherRainy: "Pleut",
    weatherSnowy: "Neige",

    lang: "Langue",

    darkMode: "Mode sombre",

    webPort: "De la porte web",
    animalSounds: "Animal Sounds",
    notAssociated:
      "Pas associé avec Nintendo, Animal Sounds, ou «Animal Radio».",
  },
};

/*
 * getTranslation
 * Takes a key (of `translations`.lang) and a lang (of `translations`)
 * and returns the value as a string.
 */
export default function getTranslation(key, lang) {
  return translations[lang][key];
}
