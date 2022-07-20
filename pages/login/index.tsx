import type { NextPage } from "next";
import Image from "next/image";
import LoginForm from "../../components/register/LoginForm";
import Logo from "../../assets/Vector.svg";

const LoginScreen: NextPage = () => {
  return (
    <div className="flex flex-row min-w-full h-screen items-center justify-center bg-white">
      <div className="flex w-full items-center justify-center p-5">
        <Image src={Logo} height={200} width={400} alt="Logo" />
      </div>
      <div className="flex w-full items-center justify-center p-5">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;
