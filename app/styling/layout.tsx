import { TabGroup } from '#/ui/tab-group';
import React from 'react';

export const runtime = 'edge';

const title = 'Styling';

export const metadata = {
  metadataBase: new URL('https://app-playground-on.pages.dev'),
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

const items = [
  {
    text: 'Global CSS',
    slug: 'global-css',
  },
  {
    text: 'CSS Modules',
    slug: 'css-modules',
  },
  {
    text: 'Styled Components',
    slug: 'styled-components',
  },
  {
    text: 'Styled JSX',
    slug: 'styled-jsx',
  },
  {
    text: 'Tailwind CSS',
    slug: 'tailwind',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <TabGroup
        path="/styling"
        items={[
          {
            text: 'Home',
          },
          ...items,
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
