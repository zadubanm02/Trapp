import { Button, FormElement, Input, Spacer, Text } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";
import {
  isFormValid,
  validateForm,
  Validation,
} from "../../validations/authValidations";

const RegisterForm = () => {
  const { register, registerWithGoogleProvider, registerWithFacebookProvider } =
    useAuth();
  const router = useRouter();
  const [validations, setValidations] = useState<Validation>({
    email: null,
    password: null,
    fullName: null,
  });
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
    const { id, value } = e.target;
    if (id === "fullName") {
      setForm((form) => ({ ...form, fullName: value }));
    }
    if (id === "email") {
      setForm((form) => ({ ...form, email: value }));
    }
    if (id === "password") {
      setForm((form) => ({ ...form, password: value }));
    }
  };

  const submit = () => {
    const valid = validateForm(form);
    setValidations(valid);
    isFormValid(valid) && register(form);
  };

  return (
    <div className=" ">
      <h2 className="font-bold text-5xl text-center">Welcome !</h2>
      <Spacer y={3} />
      <div className="flex flex-col">
        <Input
          bordered
          width="23rem"
          placeholder="Full name"
          id="fullName"
          onChange={(e) => handleInputChange(e)}
          value={form.fullName}
          aria-label="fullName"
        />
        {validations.fullName && (
          <p className="text-red-400 text-xs mt-2">{validations.fullName}</p>
        )}
        <Spacer y={1} />
        <Input
          bordered
          width="23rem"
          placeholder="Email"
          id="email"
          onChange={(e) => handleInputChange(e)}
          value={form.email}
          aria-label="email"
        />
        {validations.email && (
          <p className="text-red-400 text-xs mt-2">{validations.email}</p>
        )}
        <Spacer y={1} />
        <Input.Password
          bordered
          placeholder="Passowrd"
          id="password"
          onChange={(e) => handleInputChange(e)}
          value={form.password}
          aria-label="password"
        />
        {validations.password && (
          <p className="text-red-400 text-xs mt-2">{validations.password}</p>
        )}
        <Spacer y={1} />
        <Button size={"lg"} onPress={() => submit()}>
          Register
        </Button>
        <Spacer y={1} />
        <Text
          css={{
            textAlign: "center",
          }}
        >
          or
        </Text>
        <Spacer y={1} />
        <div className="flex flex-row justify-around">
          <Image
            src={require("../../assets/googleIcon.png")}
            height={48}
            alt="Google"
            className="cursor-pointer"
            onClick={() => registerWithGoogleProvider()}
          />
          <Image
            src={require("../../assets/facebookIcon.png")}
            width={48}
            alt="Facebook"
            className="cursor-pointer"
            onClick={() => registerWithFacebookProvider()}
          />
          <Image
            src={require("../../assets/appleIcon.png")}
            width={48}
            alt="Facebook"
          />
        </div>
        <Spacer y={1} />
        <Text
          css={{
            textAlign: "center",
          }}
        >
          Already have an account ?
        </Text>
        <Spacer y={1} />
        <Text
          onClick={() => router.push("/login")}
          color="primary"
          css={{
            textAlign: "center",
          }}
          className="cursor-pointer"
        >
          Login
        </Text>
      </div>
    </div>
  );
};

export default RegisterForm;
function registerWithGoogleProvider(): void {
  throw new Error("Function not implemented.");
}
