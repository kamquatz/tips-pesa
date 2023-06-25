'use client'

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import { SearchTeamProps } from '@/types'

const SearchTeam = ({ matches, team, setTeam }: SearchTeamProps) => {
  const [query, setQuery] = useState('')

  const filteredTeams =
    query === ''
      ? matches
      : matches.filter((match) => (
        match.home.toLowerCase().replaceAll(/\s+/g, '')
          .includes(query.toLowerCase().replaceAll(/\s+/g, '')
          ) || match.away.toLowerCase().replaceAll(/\s+/g, '')
            .includes(query.toLowerCase().replaceAll(/\s+/g, '')
            )
      ))

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={team}
        onChange={setTeam}
      >
        <div className='relative w-full'>
          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Search Team'
            displayValue={(team: string) => team}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredTeams.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                </Combobox.Option>

              ) : (
                filteredTeams.map((match => (
                  <Combobox.Option
                    key={match.home+match.away}
                    className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={match.home+' vs '+match.away}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {match.home+' vs '+match.away}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                )))
              )
              }

            </Combobox.Options>
          </Transition>
        </div>

      </Combobox>
    </div>
  )
}

export default SearchTeam