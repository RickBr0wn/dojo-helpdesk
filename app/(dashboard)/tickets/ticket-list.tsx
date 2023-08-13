import Link from 'next/link'

// Fetch the tickets from the API
async function getTickets(): Promise<Ticket[]> {
  // Simulate a slow network
  await new Promise(resolve => setTimeout(resolve, 4000))

  // Fetch the tickets
  const response = await fetch('http://localhost:4000/tickets', {
    next: { revalidate: 0 }, // data will be revalidated on every request
  })

  // Return the tickets
  return response.json()
}

export type Ticket = {
  id: string
  title: string
  body: string
  priority: string
  user_email: 'open' | 'closed'
}

export default async function TicketList() {
  // Fetch the tickets from the API
  const tickets = await getTickets()

  return (
    <>
      {tickets.map(ticket => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h1>{ticket.title}</h1>
            <h5>{ticket.body}</h5>
            <div className={`pill ${ticket.priority}`}>
              <span>{ticket.priority} priority</span>
            </div>
            <small>{ticket.user_email}</small>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <h1 className="text-center ">No open tickets found! yay! 🥳</h1>
      )}
    </>
  )
}

// Path: app/tickets/ticket-list.tsx
// Created at: 00:32:06 - 11/08/2023
// Language: Typescript
// Framework: React/Next.js
