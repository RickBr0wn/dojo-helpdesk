import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Navbar from '../components/navbar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  // create the supabase client
  const supabase = createServerComponentClient({ cookies })
  // get the session data, if any
  const { data } = await supabase.auth.getSession()

  // if there is no session data, redirect to the login page
  if (!data.session) {
    redirect('/login')
  }

  return (
    <div>
      <Navbar user={data.session.user} />
      {children}
    </div>
  )
}

// Path: app/(dashboard)/layout.tsx
// Created at: 21:02:47 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
