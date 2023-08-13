import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  // Fetch the ticket from the API
  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = await res.json()

  // If the ticket is not found, return a 404
  if (!res.ok) {
    return NextResponse.json(
      { error: 'cannot find ticket #' + ticket.id },
      { status: 404 }
    )
  }

  // Otherwise, return the ticket
  return NextResponse.json(ticket, { status: 200 })
}

// Path: app/api/tickets/[id]/route.tsx
// Created at: 13:01:11 - 13/08/2023
// Language: Typescript
// Framework: React/Next.js
