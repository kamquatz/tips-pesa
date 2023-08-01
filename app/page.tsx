import { CustomFilter, Home, MatchCard, SearchBar, ShowMore } from '@/components'
import { matchDays, markets } from '@/constants';
import { fetchMatches } from '@/utils'

export default async function App({ searchParams }: any) {
  const allMatches = await fetchMatches({
    matchDay: searchParams.matchDay || '',
    market: searchParams.market || '',
    limit: searchParams.limit || 48
  });

  const isDataEmpty = !Array.isArray(allMatches) || allMatches.length < 1 || !allMatches;

  return (
    <main className="overflow-hidden">
      <Home />

      <div className='mt-12 padding-x padding-y max-width' id='predictions'>
        <div className='home__text-container'>
          <h1 className='text-xl font-extrabold'>Our Predictions</h1>
          <p>Explore our Soccer Predictions</p>
          <p className='text-gray-500 text-sm'>
            Streamline your betting experience with our A.I analyzed sure predictions
          </p>
          <p className='text-right text-green-500'>+95% Win Rate</p>
        </div>

        <div className='home__filters'>
          {/* {!isDataEmpty ? (
            <SearchBar matches={allMatches} />
          ) : ''
          } */}

          <div className='home__filter-container'>
            <CustomFilter title='market' options={markets} />
            <CustomFilter title='matchDay' options={matchDays} />
          </div>
        </div>

        {
          !isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {
                  allMatches.map((match) => (
                    <MatchCard match={match} />
                  ))
                }
              </div>

              <ShowMore
                pageNumber = {(searchParams.limit || 48) / 48}
                isNext = {(searchParams.limit || 48) > allMatches.length}
              />

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
