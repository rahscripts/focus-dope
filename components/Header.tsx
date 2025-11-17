import React from 'react'

const Header = () => {
  return (
   <section>
        <div className="flex max-w-2xl mx-auto items-center  justify-between">
          <div className="text-xl font-semibold">
            Focus-dope
          </div>
          <div className="space-x-4">
            <a className="link link-hover" href="/tasks">tasks</a>
            <a className="link link-hover" href="">timer</a>
            <a className="link link-hover" href="">motivation</a>
            <a className="link link-hover" href="">diary</a>
          </div>
        </div>
      </section>
  )
}

export default Header