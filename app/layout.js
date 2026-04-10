import './globals.css';

export const metadata = {
  title: 'PolicyBrain — All Your Policies. One Place.',
  description: 'Organize every insurance policy across your entities, assets, and renewals in one modern dashboard. Stop juggling spreadsheets and email folders.',
  openGraph: {
    title: 'PolicyBrain — All Your Policies. One Place.',
    description: 'Organize every insurance policy across your entities, assets, and renewals in one modern dashboard.',
    url: 'https://policybrain.app',
    siteName: 'PolicyBrain',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolicyBrain — All Your Policies. One Place.',
    description: 'Organize every insurance policy across your entities, assets, and renewals in one modern dashboard.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
