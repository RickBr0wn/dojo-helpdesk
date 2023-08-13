'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function LogOutButton() {
  const router = useRouter()

  const handleClick = async () => {
    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signOut()

    if (!error) {
      router.push('/login')
    }

    if (error) {
      console.error(error)
    }
  }

  return (
    <button className="btn-primary" onClick={handleClick}>
      Log Out
    </button>
  )
}

// Path: app/components/log-out-button.tsx
// Created at: 19:27:57 - 13/08/2023
// Language: Typescript
// Framework: React/Next.js
