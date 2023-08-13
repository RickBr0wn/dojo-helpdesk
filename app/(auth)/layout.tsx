import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  // create the supabase client
  const supabase = createServerComponentClient({ cookies })
  // get the session data, if any
  const { data } = await supabase.auth.getSession()

  // if there is session data then there is a user, so redirect to the dashboard
  if (data.session) {
    // Use redirect() instead of router.push() because this is a server-side redirect
    redirect('/')
  }

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
