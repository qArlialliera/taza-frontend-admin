import React, { useEffect } from 'react'
import { Sidebar } from '../sidebar/Sidebar'

export const Messages = () => {

    useEffect(() => {
      connect()
    
    }, [])
    
  return (
    <div className="cagewall">
    <Sidebar />
    </div>
  )
}
