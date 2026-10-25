import { SettingsData } from "../../Components/Settings/SettingsData";
import { SettingsHeader } from "../../Components/Settings/SettingsHeader";
import { SettingsSideBar } from "../../Components/Settings/SettingsSideBar";

export const Settings = () => {
  return (
    <div>
      <SettingsHeader />
      <div className="flex">
        <SettingsSideBar />
        <SettingsData />
      </div>
    </div>
  );
};