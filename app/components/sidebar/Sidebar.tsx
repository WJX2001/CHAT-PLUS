import React from 'react'
import DestktopSidevar from './DestktopSidevar'

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <DestktopSidevar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  )
}
