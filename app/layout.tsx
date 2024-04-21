import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/Modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modals/RentModal";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
  icons:{
    icon:'images/logo.png'
  }
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <RegisterModal />
        <LoginModal />
        <RentModal/>
        <Navbar currentUser={currentUser}/>
       <div className="pb-20 pt-28">
       {children}
       </div>
      </body>
    </html>
  );
}
