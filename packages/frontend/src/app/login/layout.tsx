'use client';

import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div>
      {children}
    </div>
  );
}
