import { Avatar, Button, Text } from "@nextui-org/react";
import useTheme from "next-theme";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../hooks/useAuth";
import ChangeLangButton from "./ChangeLangButton";
import ThemeToggle from "./ThemeToggle";

const getFill = (theme: string) => {
  if (theme == "dark") {
    return "#fff";
  }
  return "#191823";
};

const Navbar = () => {
  const { logOut } = useAuth();
  const { theme } = useTheme();
  return (
    <div className="flex flex-row justify-between items-center p-3 border-slate-100 bg-white dark:bg-slate-800">
      <Avatar text="S" color="gradient" textColor="white" />
      {/* <Image
        src={require("../../assets/Vector.jpg")}
        height={32}
        width={72}
        alt="Logo"
      /> */}
      <svg
        width="80"
        height="24"
        viewBox="0 0 80 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.06194 0H10.3919V19.0345C8.00053 19.0345 6.06194 17.1819 6.06194 14.8966V0Z"
          fill={getFill(theme)}
        />
        <path
          d="M15.2254 4.96552H19.2667V19.0345C17.0347 19.0345 15.2254 17.2463 15.2254 15.0405V4.96552Z"
          fill={getFill(theme)}
        />
        <path
          d="M42.0439 4.96552H46.0852V24C43.8533 24 42.0439 22.2118 42.0439 20.006V4.96552Z"
          fill={getFill(theme)}
        />
        <path
          d="M59.0751 4.96552H63.1164V24C60.8845 24 59.0751 22.2118 59.0751 20.006V4.96552Z"
          fill={getFill(theme)}
        />
        <path
          d="M75.9587 0H80V13.5172C77.7681 13.5172 75.9587 11.729 75.9587 9.5232V0Z"
          fill={getFill(theme)}
        />
        <path
          d="M19.2667 7.58621C19.2667 6.13884 20.4945 4.96552 22.009 4.96552H24.7513V7.31035C24.7513 8.75771 23.5235 9.93104 22.009 9.93104H21.6393C20.3289 9.93104 19.2667 8.88122 19.2667 7.58621Z"
          fill={getFill(theme)}
        />
        <path
          d="M0 3.58621C0 1.6056 1.68011 0 3.75263 0H15.3665V3.58621H0Z"
          fill={getFill(theme)}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.8379 4.96552C47.7653 4.96552 46.0852 6.57112 46.0852 8.55172V15.4483C46.0852 17.5812 47.8946 19.3103 50.1265 19.3103H51.5698C54.5989 19.3103 57.0545 16.9637 57.0545 14.069V10.2069C57.0545 7.31216 54.5989 4.96552 51.5698 4.96552H49.8379ZM50.8482 8.27586C49.3337 8.27586 48.1059 9.44918 48.1059 10.8966V13.931C48.1059 15.3784 49.3337 16.5517 50.8482 16.5517C52.3627 16.5517 53.5905 15.3784 53.5905 13.931V10.8966C53.5905 9.44918 52.3627 8.27586 50.8482 8.27586Z"
          fill={getFill(theme)}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.0488 19.3103C34.8024 19.3103 36.2241 17.9518 36.2241 16.2759V8C36.2241 6.3241 34.8024 4.96552 33.0488 4.96552H30.7395C27.7104 4.96552 25.2548 7.31216 25.2548 10.2069V14.069C25.2548 16.9637 27.7104 19.3103 30.7395 19.3103H33.0488ZM31.4611 16.5517C32.9757 16.5517 34.2034 15.3784 34.2034 13.931V10.8966C34.2034 9.44919 32.9757 8.27586 31.4611 8.27586C29.9466 8.27586 28.7188 9.44918 28.7188 10.8966V13.931C28.7188 15.3784 29.9466 16.5517 31.4611 16.5517Z"
          fill={getFill(theme)}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.869 4.96552C64.7965 4.96552 63.1164 6.57112 63.1164 8.55172V15.4483C63.1164 17.5812 64.9257 19.3103 67.1577 19.3103H68.601C71.6301 19.3103 74.0856 16.9637 74.0856 14.069V10.2069C74.0856 7.31216 71.6301 4.96552 68.601 4.96552H66.869ZM67.8794 8.27586C66.3648 8.27586 65.137 9.44918 65.137 10.8966V13.931C65.137 15.3784 66.3648 16.5517 67.8794 16.5517C69.3939 16.5517 70.6217 15.3784 70.6217 13.931V10.8966C70.6217 9.44918 69.3939 8.27586 67.8794 8.27586Z"
          fill={getFill(theme)}
        />
        <path
          d="M75.9587 14.8966H80C80 17.0295 78.1906 18.7586 75.9587 18.7586V14.8966Z"
          fill={getFill(theme)}
        />
        <path
          d="M36.2241 19.3433H40.2654V4.96552C38.0334 4.96552 36.2241 6.75371 36.2241 8.95955V19.3433Z"
          fill={getFill(theme)}
        />
      </svg>
      <div className="flex flew-row">
        <ChangeLangButton />
        <ThemeToggle />
        <Button onPress={() => logOut()}>
          <FormattedMessage id="navbar.logout" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
