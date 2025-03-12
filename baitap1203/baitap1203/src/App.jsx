import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Filter from './components/Filter'
import Foods from './components/Foods'
import Pagination from './components/Pagination'

function App() {
  return (
    <div>
      <Header />

      <div className='flex items-start gap-6 justify-center gap-8 w-[1460px] mx-auto my-12'>
        <Filter />
        <div className='flex-[7]'>
          <div className='flex items-center justify-between'>
            <p className='font-bold text-2xl'>Salad (32)</p>
            <select name="" id="" className='border rounded-lg px-2 py-1 border-gray-300'>
              <option value="">A-Z</option>
              <option value="">Z-A</option>
              <option value="">Time descrease</option>
              <option value="">Time increase</option>
            </select>
          </div>
          <Foods />

          <Pagination />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
