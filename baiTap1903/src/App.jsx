import { Route, Routes } from 'react-router'
import './App.css'
import TodoApp from './component/TodoApp'
import Header from './component/Header'
import ReducerApp from './component/ReducerApp'
import TodoAppApi from './component/TodoAppApi'
import Footer from './component/Footer'

function App() {
  return (
    <div className='relative min-h-screen'>
      <Header />

      <main className='mt-16 container mx-auto p-6 pb-32'>
        <div className='w-[1200px] mx-auto'>
          <Routes>
            <Route path="todo_v1" element={<TodoApp />} />
            <Route path="increase_descrease" element={<ReducerApp />} />
            <Route path="todo_v2" element={<TodoAppApi />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
