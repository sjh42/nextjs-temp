import { Container } from "@nextui-org/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
