import { Ticket } from '@/app/(dashboard)/tickets/ticket-list'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  // Fetch the tickets from the API
  const res = await fetch('http://localhost:4000/tickets')
  const tickets: Ticket[] = await res.json()

  // Return the tickets
  return NextResponse.json(tickets, { status: 200 })
}

export async function POST(req: Request) {
  // Create a new ticket
  const ticket: Ticket = await req.json()

  // Save the ticket to the database
  const res = await fetch('http://localhost:4000/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  })

  // Extract the new ticket from the response
  const newTicket: Ticket = await res.json()

  // Return the new ticket
  return NextResponse.json(newTicket, { status: 201 })
}

// Path: app/components/tickets/route.tsx
// Created at: 21:24:07 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
