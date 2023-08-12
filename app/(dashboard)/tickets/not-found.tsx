import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-4xl">We hit a brick wall!</h2>
      <p>We could not find the ticket you were looking for.</p>
      <p>
        Go back to the <Link href="/">dashboard</Link>
      </p>
    </main>
  )
}

// Path: app/tickets/not-found.tsx
// Created at: 23:51:02 - 11/08/2023
// Language: Typescript
// Framework: React/Next.js
