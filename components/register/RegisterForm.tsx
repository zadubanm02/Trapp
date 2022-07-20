import { Button, Input, Spacer, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

const RegisterForm = () => {
  return (
    <div className=" ">
      <h2 className="font-bold text-5xl text-center">Welcome !</h2>
      <Spacer y={3} />
      <div className="flex flex-col">
        <Input bordered width="23rem" placeholder="Full name" />
        <Spacer y={1} />
        <Input bordered width="23rem" placeholder="Email" />
        <Spacer y={1} />
        <Input.Password bordered placeholder="Passowrd" />
        <Spacer y={1} />
        <Button size={"lg"}> Register </Button>
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
          Already have an account ?
        </Text>
        <Spacer y={1} />
        <Text
          color="primary"
          css={{
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </div>
    </div>
  );
};

export default RegisterForm;
