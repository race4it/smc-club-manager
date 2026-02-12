import './globals.css';

export const metadata = {
  title: 'SMC Club Manager',
  description: 'Member management for SMC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
