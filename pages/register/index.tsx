import type { NextPage } from "next";
import Image from "next/image";
import RegisterForm from "../../components/register/RegisterForm";
import Logo from "../../assets/Vector.svg";

const RegisterScreen: NextPage = () => {
  return (
    <div className="flex flex-row min-w-full h-screen items-center justify-center bg-white">
      <div className="flex w-full items-center justify-center p-5">
        <Image
          //src={require("../../assets/Vector.jpg")}
          src={Logo}
          height={200}
          width={400}
          alt="Logo"
        />
      </div>
      <div className="flex w-full items-center justify-center p-5">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterScreen;
