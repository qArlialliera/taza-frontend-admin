import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import s from './HomePage.module.css'
import { HomeMessages } from './HomeComponents/HomeMessages'
import { HomeControl } from './HomeComponents/HomeControl'
import { HomeStatistic } from './HomeComponents/HomeStatistic'

export const HomePage = () => {
  return (
    <div className="cagewall">
      <Sidebar />
      <div className='area'>
        <div className={s.homepagegrid}>
          <div className={s.grid_message}><HomeMessages /></div>
          <div className={s.grid_control}><HomeControl /></div>
          <div className={s.grid_statistic}><HomeStatistic /></div>
        </div>
      </div>
    </div>
  )
}
