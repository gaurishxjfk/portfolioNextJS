import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Gaurish Naik",
  description:
    "I am a fullstack developer currently working at Afour. I generally work with Javascript, React, Node and bunch of other things",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-27T8Q8JF07" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-27T8Q8JF07');
        `}
      </Script>
      <body className="bg-black">{children}</body>
    </html>
  );
}
