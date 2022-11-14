import { Container } from "@nextui-org/react";
import { AppProps } from "next/app";

export default function Layout({ Component, pageProps }: AppProps) {
  return <Container {...pageProps}>{Component}</Container>;
}
