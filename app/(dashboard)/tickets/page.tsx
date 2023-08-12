import { Suspense } from 'react'
import TicketList from './ticket-list'
import Loading from '../loading'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Dojo Helpdesk | Tickets',
  description: 'A helpdesk for the Dojo community',
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}

// Path: app/tickets/page.tsx
// Created at: 23:52:28 - 10/08/2023
// Language: Typescript
// Framework: React/Next.js
