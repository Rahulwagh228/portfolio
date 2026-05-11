import "./globals.scss";
import "lenis/dist/lenis.css";
import CustomCursor from "./components/CustomCursor";
import MouseGlow from "./components/MouseGlow";
import PageLoader from "./components/PageLoader";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  title: 'Rahul Wagh - Full Stack Developer & UI/UX Designer',
  description: 'Portfolio of Rahul Wagh, a passionate Full Stack Developer and UI/UX Designer creating beautiful, functional, and user-centered digital experiences.',
  keywords: 'Full Stack Developer, UI/UX Designer, React, Next.js, Node.js, JavaScript, TypeScript, Web Developer, Portfolio',
  author: 'Rahul Wagh',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#7C3AED" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SmoothScroll />
        <PageLoader />
        <CustomCursor />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
