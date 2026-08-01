import { ReactNode } from "react";

export const metadata = {
  title: "ChiezK3q",
  description: "Download file cepat dan aman.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className="bg-neutral-950 text-white font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
