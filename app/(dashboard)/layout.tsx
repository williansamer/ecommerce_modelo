import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ClerkProvider,SignInButton,SignedIn,SignedOut,UserButton} from '@clerk/nextjs'

import "../globals.css";
import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunter - Admin Dashboard",
  description: "Admin dashboard to manage Hunter's Data",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className="flex max-lg:flex-col text-grey-1">
            {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
            <LeftSideBar/>
            <TopBar/>
            <div className="flex-1">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
