import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";


const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Browser Extension Manager UI",
  description: "Frontend Mentor Junior Level Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.className} font-sans antialiased h-full bg-no-repeat bg-(image:--color-light-gradient) dark:bg-(image:--color-dark-gradient) max-w-[1170px] w-full mx-auto py-6 md:px-8 px-4`}
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
