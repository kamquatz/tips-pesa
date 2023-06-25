'use client'

import { useState } from 'react'
import { MatchProps } from '@/types'

interface MarchCardProps {
    match: MatchProps
}

const MatchCard = ({ match }: MarchCardProps) => {
    const { kickoff_date, kickoff_time, home, away, prediction, odd, probability, result, status } = match;
    return (
        <div className='car-card group'>
            <div className='relative flex w-full'>
                <div className='flex w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-[10px]'>
                            {kickoff_date}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-[10px]'>
                            {kickoff_time}
                        </p>
                    </div>
                </div>
            </div>

            <small className='flex w-full justify-center font-bold'>
                {home} vs {away}
            </small>

            <p className='flex w-full justify-center font-extrabold text-blue-600'>
                {prediction}
            </p>

            <div className='relative flex w-full mt-2'>
                <div className='flex w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-[10px] font-semibold'>
                            {probability ? probability + '%' : ''}
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className={`text-[12px] font-bold ${status === 'WON' ? 'text-green-500' : status === 'LOST' ? 'text-red-500' : ''}`}>
                            {result ? result + ' ' + status : ''}
                        </p>
                    </div>


                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-[10px] font-semibold'>
                            {odd ? 'x' + odd : ''}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchCard