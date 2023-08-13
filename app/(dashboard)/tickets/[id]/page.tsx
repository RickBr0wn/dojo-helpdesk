import { Ticket } from '../ticket-list'
import { notFound } from 'next/navigation'

type TicketDetailsProps = {
  params: {
    id: string
  }
}

type StaticPageParams = {
  id: string
}

// This function will be called at build time, and will generate
// dynamic metadata for this page based on the ticket ID
export async function generateMetadata({ params }: TicketDetailsProps) {
  // Fetch the ticket from the API
  const res = await fetch('http://localhost:4000/tickets/' + params.id)
  const ticket: Ticket = await res.json()

  // Return the metadata for this page
  return {
    title: `${ticket.title}`,
    description: 'A helpdesk for the Dojo community',
  }
}

// This function will be called at build time, and will generate
// static pages for each ticket in the database
export async function generateStaticParams(): Promise<StaticPageParams[]> {
  // Fetch the tickets from the API
  const response = await fetch('http://localhost:4000/tickets')
  const tickets: Ticket[] = await response.json()

  // Return the static params for each ticket
  // The array will be shaped like this:
  // [{ params: { id: '1' } }, { params: { id: '2' } }, ...]
  return tickets.map(ticket => ({
    id: ticket.id,
  }))
}

// This function will get the ticket from the API based on the ID
async function getTicket(id: string): Promise<Ticket> {
  // Fetch the ticket from the API
  const response = await fetch('http://localhost:4000/tickets/' + id, {
    next: { revalidate: 60 },
  })

  // If the ticket doesn't exist, return a 404
  if (!response.ok) notFound()

  // Otherwise, return the ticket
  return response.json()
}

export default async function TicketDetails({ params }: TicketDetailsProps) {
  // Fetch the ticket from the API
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h1>Ticket Details</h1>
      </nav>
      <div className="card my-5">
        <h1>{ticket.title}</h1>
        <h5>{ticket.body}</h5>
        <div className={`pill ${ticket.priority}`}>
          <span>{ticket.priority} priority</span>
        </div>
        <small>{ticket.user_email}</small>
      </div>
    </main>
  )
}

// Path: app/tickets/[id].tsx
// Created at: 19:45:10 - 11/08/2023
// Language: Typescript
// Framework: React/Next.js
