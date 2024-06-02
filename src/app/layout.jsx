import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { constructMetadata } from "../lib/utils";
import { Toaster } from "../components/ui/toaster";
const mulish = Mulish({ subsets: ["vietnamese"] });
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";
export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-zinc-50 ${mulish.className}`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children} <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
