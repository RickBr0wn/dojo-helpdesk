'use client'
import AuthForm from '../auth-form'

export default function Signup() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault()
    console.log({ type: 'sign up', email, password })
  }

  return (
    <main>
      <h1 className="text-center">Sign up</h1>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}

// Path: app/tickets/auth/signup/signup.tsx
// Created at: 20:52:41 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
