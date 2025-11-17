import React from 'react'
import { iserif } from '@/fonts/page'

const Intro = () => {
  return (
    <div className='flex flex-col max-w-2xl mx-auto items-start p-2 space-y-2 '>
      <div className={`${iserif.className} text-5xl font-bold text-black`}>Hello, this is me, MRahman.</div>

      <div>
        I created this app for my daily use, to help me stay focused and productive.
      </div>

      <div>
        I hope it becomes useful for you as well in managing your day and improving your routine.
      </div>

      <div>
        This dashboard is built to reduce distractions, stay consistent, and track progress clearly.
      </div>
    </div>
  )
}

export default Intro