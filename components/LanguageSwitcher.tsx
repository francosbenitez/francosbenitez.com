import { useState } from "react";
import Argentina from "@/public/icons/argentina.svg";
import Usa from "@/public/icons/usa.svg";
import useLocale from "hooks/useLocale";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";

const LanguageSwitcher = () => {
  const { currentLocale, setCurrentLocale } = useLocale();

  const [open, setOpen] = useState(false);

  const switchOpen = () => {
    setOpen(!open);
  };

  const handleLocale = (locale: string) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);
    setOpen(false);
  };

  return (
    <div className="switcher-area cursor-pointer z-10">
      <div className="lang-switcher">
        <div
          className={`flag-container ${open && "active"}`}
          onClick={switchOpen}
        >
          <GTranslateOutlinedIcon
            sx={{
              color: "var(--primary)",
            }}
          />
          <svg
            stroke="var(--primary)"
            fill="var(--primary)"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="triangle"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg>
        </div>
        <div className={`select-area ${open && "active"}`}>
          <div
            className={`flag-wrapper ${currentLocale !== "en" && "active"}`}
            onClick={() => handleLocale("es")}
          >
            <Argentina width="30" className="flag-svg" />
          </div>

          <div
            className={`flag-wrapper ${currentLocale === "en" && "active"}`}
            onClick={() => handleLocale("en")}
          >
            <Usa width="30" className="flag-svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
