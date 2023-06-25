import { CustomFilter, Home, MatchCard, SearchBar } from '@/components'
import { fetchMatches } from '@/utils'
import Image from 'next/image'

export default async function App() {
  const matchDay = ''; // new Date().toISOString().split('T')[0];
  const allMatches = await fetchMatches(matchDay);

  const isDataEmpty = !Array.isArray(allMatches) || allMatches.length < 1 || !allMatches;

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
            {/* <CustomFilter title='market' />
            <CustomFilter title='day' /> */}
          </div>
        </div>

        {
          !isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {
                  allMatches?.map((match) => (
                    <MatchCard match={match} />
                  ))
                }

              </div>
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>
                Oops!!! No Matches Available
              </h2>
            </div>
          )
        }
      </div>
    </main>
  )
}
