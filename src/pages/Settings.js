import SettingsOptions from "../comps/SettingsOptions";

import getTranslation from "../lang";

import "./styles/Settings.css";

/*
 * Settings
 * Settings page
 */
export default function SettingsPage(props) {
  return (
    <div
      className={`settingsComp settingsCompDarkMode${sessionStorage.getItem(
        "darkMode"
      )}`}
    >
      <SettingsOptions lang={props.lang} />

      <p className="legalTxt">
        {`${getTranslation("webPort", props.lang)} `}
        <a href="https://twitter.com/AnimalRadio_App">
          {getTranslation("animalSounds", props.lang)}
        </a>
        .<br />
        {getTranslation("notAssociated", props.lang)}
      </p>
    </div>
  );
}
