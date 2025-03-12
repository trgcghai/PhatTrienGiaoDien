import './App.css'
import DishCard from './components/DishCard'
import Foods from './components/Foods'
import Footer from './components/Footer'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <div>
      <Header />

      <div className='w-[70%] mx-auto mt-4'>

        <div className='font-bold'>
          Home &gt; <span className='text-[#F44B87FF]'>Your recepie box</span>
        </div>

        <UserProfile />

        <div className='border-b-2 border-[#424955FF] mt-8'>
          <ul className='flex item-center gap-4 mt-8'>
            {["Saved Recipes", "Folders", "Recipes by Genevieve"].map((item, index) => (
              <li key={item} className={`${index == 0 ? 'bg-[#fcbad1] text-[#F44B87FF] font-semibold text-lg rounded-t-lg' : 'text-[#424955FF] text-lg'} p-3`}>{item}</li>
            ))}
          </ul>
        </div>

        <Foods />

        <Pagination />
      </div>

      <Footer />
    </div>
  )
}

export default App
