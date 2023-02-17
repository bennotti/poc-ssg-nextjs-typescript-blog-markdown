import '../styles/globals.css'
import { NextPage } from "next";
import { AuthProvider, useAuth } from "@contexts/auth";
import type { AppProps } from 'next/app';
import Head from "next/head";

type CustomPage = NextPage & {
  requiresAuth?: boolean;
  redirectUnauthenticatedTo?: string;
};
interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: CustomPage;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp
