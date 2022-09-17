import { Dropdown } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ChangeLangButton = () => {
  const { locale, push, asPath } = useRouter();
  function getDirection(locale: string) {
    if (locale === "sk") {
      return (locale = "en");
    }
    return (locale = "sk");
  }
  const onChangeLanguage = () => {
    console.log("Locale", locale);
    push(asPath, undefined, { locale: locale == "sk" ? "en" : "sk" });
  };
  return (
    <>
      {locale == "en" ? (
        <button key={"sk"} onClick={() => onChangeLanguage()}>
          <Image
            src={require("../../assets/icons8-slovakia-48.png")}
            height={24}
            width={24}
            alt="Logo"
            className="rounded-xl mt-6 relative"
            style={{ top: 10 }}
          />
        </button>
      ) : (
        <button key={"en"} onClick={() => onChangeLanguage()}>
          <Image
            src={require("../../assets/icons8-usa-48.png")}
            height={24}
            width={24}
            alt="Logo"
            className="rounded-xl"
          />
        </button>
      )}
    </>
  );
};

export default ChangeLangButton;
