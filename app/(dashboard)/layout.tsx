import Navbar from '../components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

// Path: app/(dashboard)/layout.tsx
// Created at: 21:02:47 - 12/08/2023
// Language: Typescript
// Framework: React/Next.js
