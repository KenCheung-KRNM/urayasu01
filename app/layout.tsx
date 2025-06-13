import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

interface RootLayoutProps {
  children: React.ReactNode;
}

const bodyClassName: string = `${inter.className} antialiased`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
