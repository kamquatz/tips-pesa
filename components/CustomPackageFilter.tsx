'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'

import { CustomPackageFilterProps } from '@/types'


const CustomPackageFilter = ({ title, options }: CustomPackageFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  
  return (
    <div className='w-full'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
        }
        }
      >
        <div className='relative z-10 px-2'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{`${selected.title} @ KSh. ${selected.price}`}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              className='ml-4 object-cotain'
              alt='chevron up down'
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {
                options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                  >
                    {({ selected }) => (
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {`${option.title} @ KSh. ${option.price}`}
                      </span>
                    )
                    }
                  </Listbox.Option>
                ))
              }

            </Listbox.Options>

          </Transition>

        </div>
      </Listbox>

    </div>
  )
}

export default CustomPackageFilter