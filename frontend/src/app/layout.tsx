import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NAV_ITEMS, NAV_ITEMS_CTA } from "@/constants";
import Link from "next/link";
import { ButtonAsChild } from "@/components/ButtonAsChild";
import { buttonVariants } from "@/components/ui/button";
import NextImage from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased text-primary-foreground max-w-7xl md:container mx-auto`}
        >
          <header className="w-full flex justify-between py-8">
            <figure>
              <NextImage
                src="/images/brand-logo.svg"
                width={132}
                height={32}
                alt="get_hired logo"
              />
              <h1 className="sr-only">LOGO</h1>
            </figure>
            <nav className="flex gap-8 justify-between items-center">
              <ul className="flex gap-4">
                {NAV_ITEMS.map(({ id, label, href }) => (
                  <li key={id}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-2">
                <li className="">
                  <Link
                    href="/sign-in"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <ButtonLink href="/get-started" variant="primary">
                    Get started
                  </ButtonLink>
                  <Link
                    href="/get-started"
                    className={`${buttonVariants({
                      variant: "default",
                    })} bg-primary text-primary-foreground`}
                  >
                    Get started
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className="bg-background-secondary py-24">
            <div className="container mx-auto max-w-7xl">
              <section className="flex justify-between pb-12">
                <section className="flex flex-col gap-8">
                  {/* <NextImage
                    src="/images/LOGO.svg"
                    alt="AVA logo"
                    width={55}
                    height={16}
                  /> */}
                  <address>
                    <p className="font-bold">Kontakt:</p>
                    <Link href="mailto:support@ai-shopping-assistant.com">
                      support@ai-shopping-assistant.com
                    </Link>
                  </address>
                </section>
                <nav>
                  <ul className="flex flex-col gap-4 font-bold md:flex-row">
                    {NAV_ITEMS.map(({ id, label, href }) => (
                      <li key={id}>
                        <Link href={href}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
              <div className="divider divider-accent" />
              <section className="flex flex-col justify-between gap-6 md:flex-row">
                <p className="text-center md:text-left">
                  © 2024 Upskill. All rights reserved.
                </p>
                <ul className="flex gap-4 text-[14px] underline">
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/">Cookies Settings</Link>
                  </li>
                </ul>
              </section>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
