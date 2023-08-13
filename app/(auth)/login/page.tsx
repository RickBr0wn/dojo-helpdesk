'use client'
import AuthForm from '../auth-form'

export default function Login() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault()
    console.log({ type: 'log in', email, password })
  }

  return (
    <main>
      <h1 className="text-center">Log in</h1>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}

// Path: app/tickets/auth/sign-up/login.tsx
// Created at: 20:50:08 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
