import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextApiRequest } from 'next'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// This is the function that will handle the redirect once
// the user has verified their email address
export async function GET(req: NextApiRequest) {
  // make sure we have a url
  if (!req.url) throw new Error('No URL in the request object. (req.url)')

  // get the url
  const url = new URL(req.url)

  // get the code
  const code = url.searchParams.get('code')

  if (code) {
    // get the supabase client
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }
  console.log({ url: url.origin })

  return NextResponse.redirect(url.origin)
}

// Path: app/api/tickets/auth/callback/route.tsx
// Created at: 14:59:18 - 13/08/2023
// Language: Typescript
// Framework: React/Next.js
