import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  const listTabs = [
    {
      name: 'Bài tập thực hành 19-03',
      href: '/'
    },
    {
      name: 'Todo App',
      href: '/todo_v1'
    },
    {
      name: 'Increase & Descrease',
      href: '/increase_descrease'
    },
    {
      name: 'Todo App with Api',
      href: '/todo_v2'
    }
  ]

  return (
    <header className='fixed top-0 right-0 left-0 bg-blue-400 text-white px-6 h-16 flex items-center'>
        <div className='flex items-center gap-4 ml-6'>
          {listTabs.map(tab => {
            return (
              <NavLink to={tab.href} className={({ isActive }) => {
                return isActive ? 'bg-white font-bold cursor-pointer text-blue-400 px-4 py-2 rounded-lg' : 'text-white font-bold'
              }}>
                {tab.name}
              </NavLink>
            )
          })}
        </div>
      </header>
  )
}

export default Header