import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insta DM Composer",
  description:
    "Craft and copy a bold message for Sohan Jat inspired by your Instagram request."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
