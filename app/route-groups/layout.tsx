import React from 'react';

export const runtime = 'edge';

const title = 'Route Groups';

export const metadata = {
  metadataBase: new URL('https://app-playground-on.pages.dev'),
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
