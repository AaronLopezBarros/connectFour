import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Connect Four',
  description: 'Famous game connect four now in next',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
