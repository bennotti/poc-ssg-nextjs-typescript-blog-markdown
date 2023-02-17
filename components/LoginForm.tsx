import React from "react";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import EmailPasswordForm from "./EmailPasswordForm";
import { AnyObject } from "@core/types";

const LoginForm = () => {
  const { authenticate } = useAuth();
  const router = useRouter();

  const onFormSubmit = async (data: AnyObject) => {
    await authenticate('token');
    router.push("/dashboard");
  };

  return (
    <EmailPasswordForm
      submitText='Acessar'
      onSubmit={onFormSubmit}
    />
  );
};

export default LoginForm;