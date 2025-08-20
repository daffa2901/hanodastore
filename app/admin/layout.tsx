'use client';

import React from 'react'
import { usePathname } from 'next/navigation'
import AdminHeader from './components/AdminHeader'
import AdminFooter from './components/AdminFooter'
import { AuthProvider } from './components/AuthContext'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  )
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return <div className="min-h-screen">{children}</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <main className="flex-1">
        {children}
      </main>
      <AdminFooter />
    </div>
  )
}
