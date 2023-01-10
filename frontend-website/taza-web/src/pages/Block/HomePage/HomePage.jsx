import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import s from './HomePage.module.css'

export const HomePage = () => {
  return (
    <div className={s.homepagewall}>
      <Sidebar />
      <div className={s.homepagegrid}>

      </div>
    </div>
  )
}
