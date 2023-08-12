import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-4xl">There was a problem!</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the <Link href="/">dashboard</Link>
      </p>
    </main>
  )
}

// Path: app/not-found.tsx
// Created at: 23:47:38 - 11/08/2023
// Language: Typescript
// Framework: React/Next.js
