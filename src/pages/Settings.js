import SettingsOptions from "../comps/SettingsOptions";

import getTranslation from "../lang";

import "./styles/Settings.css";

/*
 * Settings
 * Settings page
 */
export default function SettingsPage() {
  const lang = sessionStorage.getItem("lang");

  return (
    <div
      className={`settingsComp settingsCompDarkMode${sessionStorage.getItem(
        "darkMode"
      )}`}
    >
      <SettingsOptions lang={lang} />

      <p className="legalTxt">
        {`${getTranslation("webPort", lang)} `}
        <a href="https://twitter.com/AnimalRadio_App">
          {getTranslation("animalSounds", lang)}
        </a>
        .<br />
        {getTranslation("notAssociated", lang)}
      </p>
    </div>
  );
}
