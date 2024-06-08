import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Nhật Kí Điện Tử",
  description: "Sổ Nhật Kí Điện Tử Thanh Niên Duy Sơn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
      <body>{children}</body>
      </UserProvider>
    </html>
  );
}
