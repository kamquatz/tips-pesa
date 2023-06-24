'use client'

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import { teams } from '@/constants'
import { SearchTeamProps } from '@/types'

const SearchTeam = ({ team, setTeam }: SearchTeamProps) => {
  const [query, setQuery] = useState('')

  const filteredTeams =
    query === ''
      ? teams
      : teams.filter((team) => (
        team.toLowerCase().replaceAll(/\s+/g, '')
          .includes(query.toLowerCase().replaceAll(/\s+/g, '')
          )))

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
                  Create {query}
                </Combobox.Option>

              ) : (
                filteredTeams.map((team => (
                  <Combobox.Option
                    key={team}
                    className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={team}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {team}
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