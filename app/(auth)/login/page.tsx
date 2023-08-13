'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import AuthForm from '../auth-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault()
    setError('')

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    }

    if (!error) {
      router.push('/')
    }
  }

  return (
    <main>
      <h1 className="text-center">Log in</h1>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="text-red-500">{error}</div>}
    </main>
  )
}

// Path: app/tickets/auth/sign-up/login.tsx
// Created at: 20:50:08 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
