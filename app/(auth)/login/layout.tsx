import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Log In</Link>
      </nav>

      {children}
    </>
  )
}

// Path: app/(auth)/login/layout.tsx
// Created at: 21:04:06 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
