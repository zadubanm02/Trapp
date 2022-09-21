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
        <button
          className="mx-2 flex justify-center items-center"
          key={"sk"}
          onClick={() => onChangeLanguage()}
        >
          <Image
            src={require("../../assets/icons8-slovakia-48.png")}
            width={24}
            height={24}
            alt="Logo"
            className="rounded-xl relative"
          />
        </button>
      ) : (
        // </button>
        <button
          p-2
          className="mx-2 flex justify-center items-center"
          key={"en"}
          onClick={() => onChangeLanguage()}
        >
          <Image
            src={require("../../assets/icons8-usa-48.png")}
            alt="Logo"
            width={24}
            height={24}
            className="rounded-xl p-2"
          />
        </button>
      )}
    </>
  );
};

export default ChangeLangButton;
