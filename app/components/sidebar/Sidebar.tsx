import React from 'react'

import DestktopSidebar from './DestktopSidebar'
import MobileFooter from './MobileFooter'

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <DestktopSidebar />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  )
}
