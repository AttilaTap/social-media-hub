import Link from 'next/link';
import ClientLayout from '../components/ClientLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Social Media Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
