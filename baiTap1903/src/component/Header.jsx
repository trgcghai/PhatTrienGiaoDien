import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <header className='fixed top-0 right-0 left-0 bg-blue-400 text-white px-6 h-16 flex items-center'>
        <div className='flex items-center gap-4 ml-6'>
          <NavLink to='/' className={({ isActive }) => {
            return isActive ? 'bg-white font-bold cursor-pointer text-blue-400 px-4 py-2 rounded-lg' : 'text-white font-bold'
          }}>
            Bài tập thực hành 19-03
          </NavLink>
          <NavLink to='todo_v1' className={({ isActive }) => {
            return isActive ? 'bg-white font-bold cursor-pointer text-blue-400 px-4 py-2 rounded-lg' : 'text-white font-bold'
          }}>
            Todo App
          </NavLink>
          <NavLink to='increase_descrease' className={({ isActive }) => {
            return isActive ? 'bg-white font-bold cursor-pointer text-blue-400 px-4 py-2 rounded-lg' : 'text-white font-bold'
          }}>
            Increase & Descrease
          </NavLink>
          <NavLink to='todo_v2' className={({ isActive }) => {
            return isActive ? 'bg-white font-bold cursor-pointer text-blue-400 px-4 py-2 rounded-lg' : 'text-white font-bold'
          }}>
            Todo App with Api
          </NavLink>
        </div>
      </header>
  )
}

export default Header