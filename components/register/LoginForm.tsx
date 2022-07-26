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

const LoginForm = () => {
  const { login, loginWithGoogleProvider } = useAuth();
  const router = useRouter();
  const [validations, setValidations] = useState<Validation>({
    email: null,
    password: null,
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
    const { id, value } = e.target;
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
    isFormValid(valid) && login(form);
  };
  return (
    <div className=" ">
      <h2 className="font-bold text-5xl text-center">Welcome back !</h2>
      <Spacer y={3} />
      <div className="flex flex-col">
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
        <Text className="text-right" color="primary">
          Forgot password ?
        </Text>
        <Spacer y={1} />
        <Button size={"lg"} onPress={() => submit()}>
          Login
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
            onClick={() => loginWithGoogleProvider()}
          />
          <Image
            src={require("../../assets/facebookIcon.png")}
            width={48}
            alt="Facebook"
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
          Dont have an account ?
        </Text>
        <Spacer y={1} />
        <Text
          onClick={() => router.push("/register")}
          color="primary"
          css={{
            textAlign: "center",
          }}
          className="cursor-pointer"
        >
          Register
        </Text>
      </div>
    </div>
  );
};

export default LoginForm;
