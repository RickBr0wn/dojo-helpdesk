'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const ticket = { title, body, priority, user_email: 'mario@netninja.dev' }

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/tickets')
    } else {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Title:</span>
        <textarea
          required
          onChange={e => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          onChange={e =>
            setPriority(e.target.value as 'low' | 'medium' | 'high')
          }
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  )
}

// Path: app/tickets/create-form.tsx
// Created at: 20:20:19 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
