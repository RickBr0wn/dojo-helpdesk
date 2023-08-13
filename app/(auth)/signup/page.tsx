'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import AuthForm from '../auth-form'
import { useState } from 'react'

export default function Signup() {
  const router = useRouter()
  const [error, setError] = useState<string>('')

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault()

    const supabase = createClientComponentClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/api/auth/callback` },
    })

    if (error) {
      setError(error.message)
      return
    }

    if (!error) {
      router.push('/verify-email')
    }
  }

  return (
    <main>
      <h1 className="text-center">Sign up</h1>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  )
}

// Path: app/tickets/auth/signup/signup.tsx
// Created at: 20:52:41 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
