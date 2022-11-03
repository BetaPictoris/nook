const translations = {
  en: {
    listenTabTitle: "Listen",
    settingsTabTitle: "Settings",

    timeMorningGreet: "Good",
    timeMorning: "morning",
    timeNoonGreet: "Good",
    timeNoon: "noon",
    timeAfternoongGreet: "Good",
    timeAfternoon: "afternoon",
    timeNightGreet: "Good",
    timeNight: "night",
    timeDay: "day",

    game: "Game",
    gameNH: "New Horizons",
    gameNL: "New Leaf",
    gamePG: "Population Growing",
    gameWW: "Wild World",

    weather: "Weather",
    weatherClear: "Clear",
    weatherRainy: "Rain",
    weatherSnowy: "Snow",

    darkMode: "Dark mode",

    webPort: "This is a web port of",
    animalSounds: "Animal Sounds",
    notAssociated:
      "Not associated with or endorsed by Nintendo, Animal Sounds, or Animal Radio.",
  },

  de: {
    listenTabTitle: "Hören",
    settingsTabTitle: "Einstellungen",

    timeMorningGreet: "Guten",
    timeMorning: "Morgen",
    timeNoonGreet: "Guten",
    timeNoon: "Tag",
    timeAfternoongGreet: "Guten",
    timeAfternoon: "Tag",
    timeNightGreet: "Gute",
    timeNight: "Nacht",
    timeDay: "Tag",

    game: "Videospiel",
    gameNH: "New Horizons",
    gameNL: "New Leaf",
    gamePG: "Population Growing",
    gameWW: "Wild World",

    weather: "Weather",
    weatherClear: "Clear",
    weatherRainy: "Rain",
    weatherSnowy: "Snow",

    darkMode: "Dark mode",

    webPort: "Dies ist eine webseite Übersetzung von",
    animalSounds: "Animal Sounds",
    notAssociated:
      "Not associated with or endorsed by Nintendo, Animal Sounds, or Animal Radio.",
  },
};

export default function getTranslation(key, lang) {
  return translations[lang][key];
}
