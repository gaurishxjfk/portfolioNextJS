import "./globals.css";

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
      <body className="bg-black">{children}</body>
    </html>
  );
}
