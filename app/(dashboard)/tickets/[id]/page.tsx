import { Metadata } from 'next/types'
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

export async function generateMetadata({ params }: TicketDetailsProps) {
  const res = await fetch('http://localhost:4000/tickets/' + params.id)
  const ticket: Ticket = await res.json()

  return {
    title: `${ticket.title}`,
    description: 'A helpdesk for the Dojo community',
  }
}

export async function generateStaticParams(): Promise<StaticPageParams[]> {
  const response = await fetch('http://localhost:4000/tickets')
  const tickets: Ticket[] = await response.json()

  return tickets.map(ticket => ({
    id: ticket.id,
  }))
}

async function getTicket(id: string): Promise<Ticket> {
  const response = await fetch('http://localhost:4000/tickets/' + id, {
    next: { revalidate: 60 },
  })

  if (!response.ok) notFound()

  return response.json()
}

export default async function TicketDetails({ params }: TicketDetailsProps) {
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
