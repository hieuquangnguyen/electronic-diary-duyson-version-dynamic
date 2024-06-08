import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream
import { UserProvider } from "@auth0/nextjs-auth0/client";
=======
import { Provider } from "@/components/provider/provider";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      <UserProvider>
      <body>{children}</body>
      </UserProvider>
=======
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
>>>>>>> Stashed changes
    </html>
  );
}
