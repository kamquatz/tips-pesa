import { CustomFilter, Home, SearchBar } from '@/components'
import Image from 'next/image'

export default function App() {
  return (
    <main className="overflow-hidden">
      <Home />

      <div className='mt-12 padding-x padding-y max-width' id='predictions'>
        <div className='home__text-container'>
          <h1 className='text-xl font-extrabold'>Our Predictions</h1>
          <p>Explore our A.I Generated Predictions</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filters-container'>
            <CustomFilter title='market' />
            <CustomFilter title='day' />
          </div>
        </div>
      </div>
    </main>
  )
}
