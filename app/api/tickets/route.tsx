import { Ticket } from '@/app/(dashboard)/tickets/ticket-list'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  // Create a new ticket
  const ticket: Ticket = await req.json()

  // get supabase instance
  const supabase = createRouteHandlerClient({ cookies })

  // get the user session for the email
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // insert the ticket into the database
  const { data, error } = await supabase
    .from('Tickets')
    .insert([{ ...ticket, user_email: session?.user?.email }])
    .select()
    .single()

  return NextResponse.json({ data, error })
}

// Path: app/components/tickets/route.tsx
// Created at: 21:24:07 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
