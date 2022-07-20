import { Button, Input, Spacer, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className=" ">
      <h2 className="font-bold text-5xl text-center">Welcome back !</h2>
      <Spacer y={3} />
      <div className="flex flex-col">
        <Input bordered width="23rem" placeholder="john.doe@email.com" />
        <Spacer y={1} />
        <Input.Password bordered placeholder="Passowrd" />
        <Spacer y={1} />
        <Text className="text-right" color="primary">
          Forgot password ?
        </Text>
        <Spacer y={1} />
        <Button size={"lg"}> Login </Button>
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
          Dont have an account ?
        </Text>
        <Spacer y={1} />
        <Text
          color="primary"
          css={{
            textAlign: "center",
          }}
        >
          Register
        </Text>
      </div>
    </div>
  );
};

export default LoginForm;
