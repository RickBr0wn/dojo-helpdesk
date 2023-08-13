'use client'
import { useState } from 'react'

type AuthFormProps = {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => void
}

export default function AuthForm({ handleSubmit }: AuthFormProps) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
        handleSubmit(e, email, password)
      }
    >
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value as string)
          }
          value={email}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value as string)
          }
          value={password}
          required
        />
      </label>
      <button type="submit" className="btn-primary">
        submit
      </button>
    </form>
  )
}

// Path: app/(auth)/auth-form.tsx
// Created at: 14:04:31 - 13/08/2023
// Language: Typescript
// Framework: React/Next.js
